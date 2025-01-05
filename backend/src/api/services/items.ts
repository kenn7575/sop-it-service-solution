import { prismaGetRefs as prisma } from "@/configs/prisma.config";
import { createItemSchema } from "@/schemas/item";

export async function getOne(UUID?: string | number): Promise<IResponse> {
  const UUIDNumber = Number(UUID);

  const item = await prisma.items.findUnique({
    where: { UUID: UUIDNumber || undefined },
    include: {
      items_in_loan: {
        include: { loans: { include: { users_loans_user_idTousers: true } } },
      },
    },
  });

  return { status: 200, data: item };
}

export async function createMultiple(
  product_id: number,
  amount = 1
): Promise<IResponse> {
  const validated = createItemSchema.safeParse({ product_id, amount });

  if (validated.error) return { status: 400, data: validated.error };

  const transactions = [];

  for (let i = 0; i < validated.data.amount; i++) {
    const itemTransaction = prisma.items.create({
      data: { product_id: validated.data.product_id },
    });

    transactions.push(itemTransaction);
  }

  const item = await prisma.$transaction(transactions);

  return { status: 201, data: item };
}
