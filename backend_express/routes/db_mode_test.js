const express = require("express");
const router = express.Router();
const { db } = require("../db");

router.get("/:table", async (req, res) => {
  const { table } = req.params;
  const rows = await db.find(table, req.query);

  res.json(rows);
});

router.get("/:table/:id", async (req, res) => {
  const { table, id } = req.params;
  const row = await db.findOne(table, { UUID: id });

  res.json(row);
});

router.post("/:table", async (req, res) => {
    const { table } = req.params;
  const newRow = await db.create(table, req.body);

  res.json(newRow);
});

router.delete("/:table/:id", async (req, res) => {
  const { table, id } = req.params;
  const deletedRow = await db.delete(table, id);

  res.json(deletedRow);
});

module.exports = router;
