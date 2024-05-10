const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

BigInt.prototype.toJSON = function () {
  return this.toString();
};

router.get("/:table", async (req, res) => {
  const table = req.params.table;
  let filter = req.query;

  if (filter.UUID) filter.UUID = Number(filter.UUID);

  const prismaTable = prisma[table];

  if (!prismaTable) return res.status(404).json({ error: "Table not found" });

  Object.entries(filter).map(([key, value]) => {
    if (value === "null") filter[key] = null;
  });

  const result = await prisma[table].findMany({
    where: filter,
  });

  const headers = Object.keys(prisma[table].fields);

  res.json({ headers, data: result });
});

router.get("/:table/:UUID", async (req, res) => {
  const { table, UUID } = req.params;

  if (!table || !Number(UUID))
    return res.status(400).json({ error: "Invalid request" });

  const result = await prisma[table].findUnique({
    where: { UUID: Number(UUID) },
  });

  res.json(result);
});

router.post("/:table", async (req, res) => {
  const table = req.params.table;
  var values = req.body.data;

  const prismaTable = prisma[table].fields;

  Object.entries(prismaTable).map(([key, value]) => {
    if (values[key]) {
      if (value.typeName === "Int") values[key] = Number(values[key]);
    }
  });

  const newRow = await prisma[table].create({
    data: values,
  });

  res.json({ ...newRow, id: newRow.UUID });
});

router.patch("/:table/:UUID", async (req, res) => {
  const { table, UUID } = req.params;
  const values = req.body.data;

  if (!values || Object.keys(values).length === 0)
    return res.status(400).json({ error: "No data provided" });

  delete values["UUID"];
  delete values["date_created"];
  delete values["date_updated"];

  const result = await prisma[table].update({
    where: { UUID: Number(UUID) },
    data: values,
  });

  res.json(result);
});

router.delete("/:table/:UUID", async (req, res) => {
  const { table, UUID } = req.params;

  const result = await prisma[table].delete({
    where: { UUID: Number(UUID) },
  });

  res.json(result);
});

router.delete("/", async (req, res) => {
  const { table, UUID } = req.query;

  const result = await prisma[table].delete({
    where: { UUID: Number(UUID) },
  });

  res.json(result);
});

module.exports = router;
