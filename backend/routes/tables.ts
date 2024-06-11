import { Router } from "express";
import { convertToPrismaTypes } from "@functions";
import prisma2 from "@/prisma.config";
const prisma = prisma2 as any;

import type { Prisma } from "@prisma/client";

const router = Router();

declare global {
  interface BigInt {
    toJSON(): string;
  }
}

BigInt.prototype.toJSON = function () {
  return this.toString();
};

router.get(["/:table", "/:table/:UUID"], async (req, res, next) => {
  const table = req.params.table as Prisma.ModelName;

  if (!table) return next();

  const prismaTable = prisma[table];

  if (!prismaTable) {
    console.log("Table not found:", table);

    return res.status(404).json({ error: "Table not found" });
  }

  next();
});

router.get("/:table", async (req, res) => {
  const table = req.params.table as Prisma.ModelName;
  let filter = req.query as any;

  if (filter.UUID) filter.UUID = Number(filter.UUID);

  Object.entries(filter).map(([key, value]) => {
    if (value === "null") filter[key] = null;
  });

  filter = convertToPrismaTypes(filter, table);

  const result = await prisma[table].findMany({
    where: filter,
  });

  const headers = Object.keys(prisma[table].fields);

  res.json({ headers, data: result });
});

router.get("/:table/:UUID", async (req, res) => {
  const { table, UUID } = req.params as {
    table: Prisma.ModelName;
    UUID: string;
  };

  let filter = req.query;

  if (!table || !Number(UUID))
    return res.status(400).json({ error: "Invalid request" });

  const result = await prisma[table].findUnique({
    where: { UUID: Number(UUID), ...filter },
  });

  res.json(result);
});

router.post("/:table", async (req, res) => {
  const table = req.params.table as Prisma.ModelName;
  var values = req.body.data;

  const prismaTable = prisma[table].fields;

  for (const { key, value } of Object.entries(prismaTable) as any) {
    if (value.typeName === "Int") values[key] = Number(values[key]);
  }

  // Object.entries(prismaTable).map(([key, value]) => {
  //   if (values[key]) {
  //     if (value.typeName === "Int") values[key] = Number(values[key]);
  //   }
  // });

  const newRow = await prisma[table].create({
    data: values,
  });

  res.json({ ...newRow, id: newRow.UUID });
});

router.patch("/:table/:UUID", async (req, res) => {
  const { table, UUID } = req.params as {
    table: Prisma.ModelName;
    UUID: string;
  };

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
  const { table, UUID } = req.params as {
    table: Prisma.ModelName;
    UUID: string;
  };

  try {
    const result = await prisma[table].delete({
      where: { UUID: Number(UUID) },
    });

    res.json(result);
  } catch (error: any) {
    if (error?.code === "P2003")
      return res.status(400).json({ error: "Foreign key constraint" });

    res.status(400).json({ error: error.message });
  }
});

router.delete("/", async (req, res) => {
  const { table, UUID } = req.query;

  return res.redirect(`api/${table}/${UUID}`);
});

export default router;
