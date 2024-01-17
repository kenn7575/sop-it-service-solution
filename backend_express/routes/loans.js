const express = require("express");
const router = express.Router();
const pool = require("../db");

router.post("/", async (req, res) => {
  const itemUUIDs = req.body.products.map((product) => product.UUID);

  const conn = await pool.getConnection();

  await conn.beginTransaction();

  await conn.query(
    "UPDATE `items` SET `product_status_id` = '4' WHERE `UUID` IN (?)",
    [itemUUIDs]
  );

  const [newLoan] = await conn.query(
    "INSERT INTO `loans` (`user_id`, `loan_length`, `recipient_type_id`, `location_of_use_id`, `helpdesk_personel_id`) VALUES (?)",
    [Object.values(req.body.loan)]
  );

  const loanId = newLoan.insertId;

  await conn.query(
    "INSERT INTO `items_in_loan` (`loan_id`, `item_id`) VALUES ?",
    [req.body.products.map((product) => [loanId, product.UUID])]
  );

  await conn.commit();

  conn.release();

  return res.json({ loanId });
});

module.exports = router;
