import prisma from "@/prisma.config";
import { Prisma } from "@prisma/client";
import { Request, Response, NextFunction } from "express";

export async function Validate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const table = req.params.table as Prisma.ModelName;

  if (!table) return next();

  const prismaTable = prisma[table];

  if (!prismaTable) {
    console.log(`Table not found: ${table}. Method: ${req.method}`);

    return res.status(404).json({ error: "Table not found" });
  }

  next();
}
