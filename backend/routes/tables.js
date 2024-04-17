const express = require("express");
const router = express.Router();
const { db } = require("../db");
const { findReferenced, findReferencing } = require("../functions/dbLogic");

router.get("/:table", async (req, res) => {
  const table = req.params.table;
  const filter = req.query;

  const [referenced] = await db.query(findReferenced(table));

  var result = await db.find(table, filter);

  if (referenced && result && result.length > 0) {
    for (var column of result) {
      const rows = await db.query(
        `SELECT * FROM ${referenced.TABLE_NAME} WHERE ${referenced.COLUMN_NAME} = ?`,
        column[referenced.REFERENCED_COLUMN_NAME]
      );

      column[referenced.TABLE_NAME] = rows;
    }
  }

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

  if (!values || Object.keys(values).length === 0)
    return res.status(400).json({ error: "No data provided" });

  delete values["UUID"];
  delete values["date_created"];
  delete values["date_updated"];

  const result = await db.update(table, { UUID: UUID }, values);

  res.json(result);
});

router.delete("/:table/:UUID", async (req, res) => {
  const { table, UUID } = req.params;

  const result = await db.delete(table, { UUID: UUID });

  res.json(result);
});

router.delete("/", async (req, res) => {
  const { table, UUID } = req.query;

  const result = await db.delete(table, { UUID: UUID });

  res.json(result);
});

module.exports = router;
