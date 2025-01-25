import { z } from "zod";

import { Prisma } from "@prisma/client";

import * as PrismaSchemas from "../../prisma/generated/zod";

type ISchemaType = "create" | "update";

export default function findPrismaSchema(
  type: ISchemaType,
  table: Prisma.ModelName
): z.ZodObject<any, any, any> {
  const createSuffix = "UncheckedCreateInputSchema";
  const updateSuffix = "UncheckedUpdateInputSchema";

  const schemaName = `${table}${
    type === "create" ? createSuffix : updateSuffix
  }` as keyof typeof PrismaSchemas;

  const schema = PrismaSchemas[schemaName];

  return schema as z.ZodObject<any, any, any>;
}
