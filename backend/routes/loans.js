const express = require("express");
const router = express.Router();
const { returnLoan, returnCable } = require("../functions/loanLogic");
const { convertToPrismaTypes } = require("../functions/dbLogic");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.post("/", async (req, res) => {
  let { loan, products, cables } = req.body;

  loan = convertToPrismaTypes(loan, "loans");
  products = products.map((product) => convertToPrismaTypes(product, "items"));
  cables = cables.map((cable) => convertToPrismaTypes(cable, "cables"));

  const newLoan = prisma.loans.create({
    data: {
      ...loan,
      items_in_loan: {
        create: products.map(({ UUID }) => ({
          item_id: UUID,
        })),
      },
      cables_in_loan: {
        create: cables.map(({ UUID, "Lånt": amount }) => ({
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

  const updateCables = cables.map(({ UUID, "Lånt": amount }) =>
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

  return res.json(result);
});

router.patch("/return/item", async (req, res) => {
  const { ItemsInLoanToReturn: items } = req.body;
  if (!items) return res.sendStatus(400);

  await db.transaction();

  for (const item of items) {
    await db.update("items", { UUID: item.UUID }, { product_status_id: 1 });
  }

  for (const item of items) {
    await db.update(
      "items_in_loan",
      { item_id: item.UUID },
      { date_returned: new Date() }
    );
  }

  await returnLoan(db, items[0].loan_id);

  await db.commit();

  res.json({ success: true });
});

router.patch("/return/cable", async (req, res) => {
  const { CablesInLoanToReturn: cables } = req.body;
  if (!cables) return res.sendStatus(400);

  await db.transaction();

  for (const cable of cables) {
    await db.update(
      "cables_in_loan",
      { cable_id: cable.UUID },
      { amount_returned: cable["Mængde returneret"] }
    );

    await returnCable(db, cable);
  }

  await returnLoan(db, cables[0].loan_id);

  await db.commit();

  res.json({ success: true });
});

module.exports = router;
