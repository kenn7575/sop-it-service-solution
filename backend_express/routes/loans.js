const express = require("express");
const router = express.Router();
const pool = require("../db");
const { returnLoan, returnCable } = require("../functions/loanLogic");

router.post("/", async (req, res) => {
  const conn = await pool.getConnection();

  await conn.beginTransaction();

  const [newLoan] = await conn.query(
    "INSERT INTO `loans` (`user_id`, `loan_length`, `recipient_type_id`, `location_of_use_id`, `helpdesk_personel_id`) VALUES (?)",
    [Object.values(req.body.loan)]
  );

  const loanId = newLoan.insertId;

  if (req.body?.products) {
    await conn.query(
      "UPDATE `items` SET `product_status_id` = '4' WHERE `UUID` IN (?)",
      [req.body.products.map((product) => product.UUID)]
    );

    await conn.query(
      "INSERT INTO `items_in_loan` (`loan_id`, `item_id`) VALUES ?",
      [req.body.products.map((product) => [loanId, product.UUID])]
    );
  }

  if (req.body?.cables) {
    await conn.query(
      "INSERT INTO `cables_in_loan` (`loan_id`, `cable_id`, `amount_lent`) VALUES ?",
      [req.body.cables.map((cable) => [loanId, cable.UUID, cable["Lånt"]])]
    );

    for (const cable of req.body.cables) {
      await conn.query(
        "UPDATE `cables` SET `amount_lent` = `amount_lent` + ? WHERE `UUID` IN (?)",
        [cable["Lånt"], cable.UUID]
      );
    }
  }

  await conn.commit();

  conn.release();

  return res.json({ loanId });
});

router.patch("/return/item", async (req, res) => {
  console.log("returning item")
  const { ItemsInLoanToReturn: items } = req.body;
  if (!items) return res.sendStatus(400);

  const conn = await pool.getConnection();

  await conn.beginTransaction();

  await conn.query(
    "UPDATE `items` SET `product_status_id` = 1 WHERE `UUID` IN (?)",
    [items.map((item) => item.UUID)]
  );

  await conn.query(
    "UPDATE `items_in_loan` SET `date_returned` = NOW() WHERE `item_id` IN (?) AND `date_returned` IS NULL",
    [items.map((item) => item.UUID)]
  );

  await returnLoan(conn, items[0].loan_id);

  await conn.commit();

  conn.release();

  res.json({ success: true });
});

router.patch("/return/cable", async (req, res) => {
  const { CablesInLoanToReturn: cables } = req.body;
  if (!cables) return res.sendStatus(400);

  const conn = await pool.getConnection();

  await conn.beginTransaction();

  for (const cable of cables) {
    await conn.query(
      "UPDATE `cables_in_loan` SET `amount_returned` = ? WHERE `cable_id` = (?)",
      [cable["Mængde returneret"], cable.UUID]
    );

    returnCable(conn, cable);
  }

  await returnLoan(conn, cables[0].loan_id);

  await conn.commit();

  conn.release();

  res.json({ success: true });
});

module.exports = router;
