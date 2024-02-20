const express = require("express");
const router = express.Router();
const { db } = require("../db");

router.get("/:UUID", async (req, res) => {
  const { UUID } = req.params;

  var [items] = await db.query("SELECT * FROM items WHERE UUID = ? LIMIT 1", [UUID]);

  items.loans = await db.query("SELECT * FROM items_in_loan WHERE item_id = ?", [UUID]);

  res.json(items);
});

module.exports = router;
