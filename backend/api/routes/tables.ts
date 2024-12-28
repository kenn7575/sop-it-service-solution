import { Router } from "express";
import { convertToPrismaTypes } from "@functions";
import { prismaGetRefs as prisma2 } from "@/prisma.config";
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

router.use(["/:table", "/:table/:UUID"], async (req, res, next) => {
  const table = req.params.table as Prisma.ModelName;

  if (!table) return next();

  const prismaTable = prisma[table];

  if (!prismaTable) {
    console.log(`Table not found: ${table}. Method: ${req.method}`);

    return res.status(404).json({ error: "Table not found" });
  }

  next();
});

router.get("/:table", async (req, res) => {
  const table = req.params.table as Prisma.ModelName;
  let filter = req.query as any;

  if (filter.UUID) filter.UUID = Number(filter.UUID);

  for (const [key, value] of Object.entries(filter)) {
    if (value === "null") filter[key] = null;
  }

  filter = convertToPrismaTypes(filter, table);

  try {
    let result = await prisma[table].findMany({
      where: filter,
    });

    const headers = Object.keys(prisma[table].fields);

    // ?withHeaders=true

    res.json({ headers, data: result });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/:table/:UUID", async (req, res) => {
  const { table, UUID } = req.params as {
    table: Prisma.ModelName;
    UUID: string;
  };

  const include = {} as any;

  let includeStringList = req.query.include?.toString().split(",");

  includeStringList?.map((table) => (include[table] = true));

  let filter = req.query;
  delete filter.include;

  if (!table || !Number(UUID))
    return res.status(400).json({ error: "Invalid request" });

  const result = await prisma[table].findUnique({
    where: { UUID: Number(UUID), ...filter },
    include,
  });

  res.json(result);
});

router.post("/:table", async (req, res) => {
  const table = req.params.table as Prisma.ModelName;
  var values = req.body.data;

  const prismaTable = prisma[table].fields;

  for (const [key, value] of Object.entries(prismaTable) as any) {
    if (value.typeName === "Int" && values[key])
      values[key] = Number(values[key]);
  }

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
  if (req.user && req.user.moderatorLevel < 2) {
    return res.status(403).json({ error: "Unauthorized" });
  }

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

export default router;
