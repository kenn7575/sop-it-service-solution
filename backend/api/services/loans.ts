import prisma from "@/prisma.config";
import { createLoanSchema } from "@/schemas/loans";
import {
  convertToPrismaTypes,
  ldapAuthenticate,
  returnLoan as returnLoanHelper,
} from "@functions";
import { items, loans } from "@prisma/client";

export async function createOne(
  loan: loans,
  products: (items & { withBag: boolean; withLock: boolean })[],
  personel_username: string,
  personel_password: string
): Promise<IResponse> {
  const { data, error } = createLoanSchema.safeParse({
    loan,
    products,
    personel_username,
    personel_password,
  });

  if (error) return { status: 400, data: error };

  const authenticate = await ldapAuthenticate(
    personel_username,
    personel_password
  ).catch((e) => console.log(e));

  if (!authenticate) return { status: 401 };

  const helpdesk_personel = await prisma.users.findFirst({
    where: { username: personel_username },
  });

  if (!helpdesk_personel) return { status: 401 };

  loan.helpdesk_personel_id = helpdesk_personel.UUID;

  loan = convertToPrismaTypes(loan, "loans");
  products = products.map((product) => convertToPrismaTypes(product, "items"));

  const newLoan = prisma.loans.create({
    data: {
      ...loan,
      items_in_loan: {
        create: products.map(({ UUID, withBag, withLock }) => ({
          item_id: UUID,
          withBag: Boolean(withBag),
          withLock: Boolean(withLock),
        })),
      },
    },
  });

  const result = await prisma.$transaction([newLoan]);

  return { status: 200, data: result };
}

interface Item {
  UUID: number;
  loan_id: number;
}

export async function returnLoan(items: Item[]): Promise<IResponse> {
  if (!items) return { status: 400, data: { success: false } };

  var itemsInLoan = [];

  for (const item of items) {
    const { UUID: itemInLoanUUID } = (await prisma.items_in_loan.findFirst({
      where: { item_id: item.UUID, loan_id: item.loan_id },
    }))!;

    const itemInLoan = prisma.items_in_loan.update({
      where: { UUID: itemInLoanUUID },
      data: { date_returned: new Date() },
    });

    itemsInLoan.push(itemInLoan);
  }

  await prisma.$transaction(itemsInLoan);

  await returnLoanHelper(items[0].loan_id);

  return { status: 200, data: { success: true } };
}
