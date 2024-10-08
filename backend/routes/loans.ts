import express from "express";
import { prismaGetRefs as prisma } from "@/prisma.config";
import { returnLoan, convertToPrismaTypes, ldapAuthenticate } from "@functions";

import type { items, loans } from "@prisma/client";

const router = express.Router();

router.get(["/", "/:UUID"], async (req, res, next) => {
  const moderator = req.user?.moderatorLevel;

  if (moderator) return next();

  if (req.user?.username) return res.sendStatus(401);

  let user = await prisma.users.findFirst({
    where: { username: req.user?.username },
  });

  if (!user || !moderator) return res.sendStatus(401);

  let user_id = user.UUID;

  req.query.user_id = user_id.toString();

  return next();
});

router.post("/", async (req, res) => {
  interface reqBody {
    loan: loans;
    products: (items & { withBag: boolean; withLock: boolean })[];
    personel_username: string;
    personel_password: string;
  }

  let {
    loan,
    products = [],
    personel_username,
    personel_password,
  }: reqBody = req.body;

  if (!loan) return res.sendStatus(400);

  const authenticate = await ldapAuthenticate(
    personel_username,
    personel_password
  ).catch((e) => console.log(e));

  if (!authenticate) return res.sendStatus(401);

  const helpdesk_personel = await prisma.users.findFirst({
    where: { username: personel_username },
  });

  if (!helpdesk_personel) return res.sendStatus(401);

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

  return res.json({ loanId: result[0].UUID });
});

router.patch("/return/item", async (req, res) => {
  const { ItemsInLoanToReturn: items } = req.body;
  if (!items) return res.sendStatus(400);

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

  await returnLoan(items[0].loan_id);

  res.json({ success: true });
});

export default router;
