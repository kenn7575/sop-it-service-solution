import express from "express";
import prisma from "@/prisma.config";
import { returnLoan, returnCable, convertToPrismaTypes } from "@functions";

import type { cables, items, loans } from "@prisma/client";

const router = express.Router();

router.get(["/", "/:UUID"], async (req, res, next) => {
  const moderator = req.user?.moderator;

  if (moderator) return next();

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
    cables: cables[] | any[];
  }

  let { loan, products = [], cables = [] }: reqBody = req.body;

  loan = convertToPrismaTypes(loan, "loans");
  products = products.map((product) => convertToPrismaTypes(product, "items"));
  cables = cables.map((cable) => convertToPrismaTypes(cable, "cables"));

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
      cables_in_loan: {
        create: cables.map(({ UUID, Lånt: amount }) => ({
          cable_id: UUID,
          amount_lent: Number(amount),
        })),
      },
    },
  });

  const updateProducts = products.map(({ UUID }) =>
    prisma.items.update({
      where: { UUID },
      data: { product_status_id: 4 },
    })
  );

  const updateCables = cables.map(({ UUID, Lånt: amount }) =>
    prisma.cables.update({
      where: { UUID },
      data: { amount_lent: { increment: Number(amount) } },
    })
  );

  const result = await prisma.$transaction([
    newLoan,
    ...updateProducts,
    ...updateCables,
  ]);

  return res.json({ loanId: result[0].UUID });
});

router.patch("/return/item", async (req, res) => {
  const { ItemsInLoanToReturn: items } = req.body;
  if (!items) return res.sendStatus(400);

  var itemsToReturn = [];

  for (const item of items) {
    const itemToReturn = prisma.items.update({
      where: { UUID: item.UUID },
      data: { product_status_id: 1 },
    });

    itemsToReturn.push(itemToReturn);
  }

  var itemsInLoan = [];

  for (const item of items) {
    const { UUID: itemInLoanUUID } = (await prisma.items_in_loan.findFirst({
      where: { item_id: item.UUID },
    }))!;

    const itemInLoan = prisma.items_in_loan.update({
      where: { UUID: itemInLoanUUID },
      data: { date_returned: new Date() },
    });

    itemsInLoan.push(itemInLoan);
  }

  await prisma.$transaction([...itemsToReturn, ...itemsInLoan]);

  await returnLoan(items[0].loan_id);

  res.json({ success: true });
});

router.patch("/return/cable", async (req, res) => {
  const { CablesInLoanToReturn: cables } = req.body;
  if (!cables) return res.sendStatus(400);

  for (const cable of cables) {
    const { UUID: cableInLoanUUID } = (await prisma.cables_in_loan.findFirst({
      where: { cable_id: cable.UUID, loan_id: cable.loan_id },
    }))!;

    await prisma.cables_in_loan.update({
      where: { UUID: cableInLoanUUID },
      data: { amount_returned: cable["Mængde returneret"] },
    });

    await returnCable(cable);
  }

  await returnLoan(cables[0].loan_id);

  res.json({ success: true });
});

export default router;
