const express = require("express");
const router = express.Router();
const { pool, db } = require("../db");

router.get("/:table", async (req, res) => {
  const table = req.params.table;
  const filter = req.query;

  const result = await db.find(table, filter);

  // console.log(result)

  res.json(result);
});

router.get("/:table/:UUID", async (req, res) => {
  const { table, UUID } = req.params;

  const result = await db.findOne(table, { UUID });

  res.json(result);
});

router.post("/:table", async (req, res) => {
  const table = req.params.table;
  const values = req.body.data;

  const newRow = await db.create(table, values);

  res.json(newRow);
});

router.patch("/:table/:UUID", async (req, res) => {
  const { table, UUID } = req.params;
  const values = req.body.data;

  const result = await db.update(table, UUID, values);

  res.json(result);
});

router.delete("/", async (req, res) => {
  const table = req.query.table;
  const UUID = req.query.UUID;

  var rows;

  const conn = await pool.getConnection();

  await conn.beginTransaction();

  try {
    [rows] = await pool.query(`DELETE FROM ${table} WHERE UUID = '${UUID}'`);
  } catch (err) {
    if (err.code == "ER_NO_SUCH_TABLE") {
      console.log("Invalid table name:", table);
      return res.status(400).json({ error: "Invalid table name" });
    }
  }

  await conn.commit();

  conn.release();

  return res.json(rows);
});

module.exports = router;
