const express = require("express");
const router = express.Router();
const pool = require("../db");

router.get("/", async (req, res) => {
  const table = req.query.table;
  const UUID = (req.query.UUID && `WHERE UUID = '${req.query.UUID}'`) || "";

  if (!table) return res.status(400).json({ error: "Invalid table name" });

  var rows;

  try {
    [rows] = await pool.query(`SELECT * FROM ${table} ${UUID}`);
  } catch (err) {
    if (err.code == "ER_NO_SUCH_TABLE") {
      console.log("Invalid table name:", table);
      return res.status(400).json({ error: "Invalid table name" });
    }
  }

  var result = rows;

  if (rows.length === 1 && UUID) result = rows[0];
  if (rows.length < 1) result = [{ error: "No results found" }];

  return res.json(result);
});

module.exports = router;
