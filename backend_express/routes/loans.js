const express = require("express");
const router = express.Router();
const { db, pool } = require("../db");
const { returnLoan, returnCable } = require("../functions/loanLogic");

router.post("/", async (req, res) => {
  await db.transaction();

  const newLoan = await db.create("loans", req.body.loan);

  const { products, cables } = req.body;

  if (products) {
    await db.update(
      "items",
      { UUID: products.map((product) => product.UUID) },
      { product_status_id: 4 }
    );

    for (const product of products) {
      await db.create("items_in_loan", {
        loan_id: newLoan.UUID,
        item_id: product.UUID,
      });
    }
  }

  if (cables) {
    for (const cable of cables) {
      await db.create("cables_in_loan", {
        loan_id: newLoan.UUID,
        cable_id: cable.UUID,
        amount_lent: cable["Lånt"],
      });
    }

    for (const cable of cables) {
      await db.update(
        "cables",
        { UUID: cable.UUID },
        { amount_lent: cable["Lånt"] }
      );
    }
  }

  await db.commit();

  return res.json({ ...newLoan, loanId: newLoan.UUID });
});

router.patch("/return/item", async (req, res) => {
  const { ItemsInLoanToReturn: items } = req.body;
  if (!items) return res.sendStatus(400);

  // const conn = await pool.getConnection();

  // await conn.beginTransaction();

  await db.transaction();

  // await conn.query(
  //   "UPDATE `items` SET `product_status_id` = 1 WHERE `UUID` IN (?)",
  //   [items.map((item) => item.UUID)]
  // );

  for (const item of items) {
    await db.update("items", { UUID: item.UUID }, { product_status_id: 1 });
  }

  // await conn.query(
  //   "UPDATE `items_in_loan` SET `date_returned` = NOW() WHERE `item_id` IN (?) AND `date_returned` IS NULL",
  //   [items.map((item) => item.UUID)]
  // );

  for (const item of items) {
    await db.update(
      "items_in_loan",
      { item_id: item.UUID },
      { date_returned: new Date() }
    );
  }

  await returnLoan(db, items[0].loan_id);

  // await conn.commit();

  // conn.release();

  await db.commit();

  res.json({ success: true });
});

router.patch("/return/cable", async (req, res) => {
  const { CablesInLoanToReturn: cables } = req.body;
  if (!cables) return res.sendStatus(400);

  const conn = await pool.getConnection();

  await conn.beginTransaction();

  for (const cable of cables) {
    // await conn.query(
    //   "UPDATE `cables_in_loan` SET `amount_returned` = ? WHERE `cable_id` = (?)",
    //   [cable["Mængde returneret"], cable.UUID]
    // );

    await db.update(
      "cables_in_loan",
      { cable_id: cable.UUID },
      { amount_returned: cable["Mængde returneret"] }
    );

    returnCable(db, cable);
  }

  await returnLoan(db, cables[0].loan_id);

  await conn.commit();

  conn.release();

  res.json({ success: true });
});

module.exports = router;
