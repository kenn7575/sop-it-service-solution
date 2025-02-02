import { z } from "zod";

import { Prisma } from "@prisma/client";

type ISchemaType = "createSchema" | "updateSchema";

export default async function findPrismaSchema(
  type: ISchemaType,
  table: Prisma.ModelName
): Promise<z.ZodObject<any> | null> {
  try {
    const schema: any = await import("@/schemas/" + table);

    if (!schema) throw new Error("Schema not found");

    if (!schema[type]) throw new Error("Schema not found for type: " + type);

    return schema[type];
  } catch (error) {
    return null;
  }
}
