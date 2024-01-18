const express = require("express");
const router = express.Router();
const pool = require("../db");

router.use((req, res, next) => {
  if (req.path !== "/") return next();

  if (!req.query?.table)
    return res.status(400).json({ error: "Invalid table name" });
  next();
});

router.get("/", async (req, res) => {
  const table = req.query.table;
  const UUID = (req.query.UUID && `WHERE UUID = '${req.query.UUID}'`) || "";

  const conn = await pool.getConnection();

  await conn.beginTransaction();

  var rows;

  try {
    [rows] = await conn.query(`SELECT * FROM ${table} ${UUID}`);
  } catch (err) {
    if (err.code == "ER_NO_SUCH_TABLE") {
      console.log("Invalid table name:", table);
      return res.status(400).json({ error: "Invalid table name" });
    }
  }

  await conn.commit();

  conn.release();

  var result = rows;

  if (rows.length === 1 && UUID) result = rows[0];

  return res.json(result);
});

router.post("/", async (req, res) => {
  const table = req.query.table;
  const values = req.body.data;

  var rows;

  const conn = await pool.getConnection();

  await conn.beginTransaction();

  try {
    [rows] = await pool.query(`INSERT INTO ${table} SET ?`, values);
  } catch (err) {
    if (err.code == "ER_NO_SUCH_TABLE") {
      console.log("Invalid table name:", table);
      return res.status(400).json({ error: "Invalid table name" });
    }
    console.log(err);
  }

  await conn.commit();

  conn.release();

  return res.json({ id: rows.insertId });
});

router.patch("/", async (req, res) => {
  const table = req.query.table;
  const UUID = req.query.UUID;
  const values = req.body.data;

  var rows;

  const conn = await pool.getConnection();

  await conn.beginTransaction();

  try {
    [rows] = await pool.query(`UPDATE ${table} SET ? WHERE UUID = '${UUID}'`, [
      values,
    ]);
  } catch (err) {
    if (err.code == "ER_NO_SUCH_TABLE") {
      console.log("Invalid table name:", table);
      return res.status(400).json({ error: "Invalid table name" });
    }
  }

  await conn.commit();

  conn.release();

  return res.json({ id: UUID });
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
