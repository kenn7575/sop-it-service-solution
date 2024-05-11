import type { z } from "zod";
import type { Field } from "types/field";

const ZodToInputType: { [key: string]: "text" | "number" } = {
  ZodString: "text",
  ZodNumber: "number",
};

export function autoGenFields(
  zodSchema: z.ZodObject<any>,
  exclude = ["UUID"]
): Field[] {
  let fields = [] as Field[];

  Object.entries(zodSchema.shape).map(([key, value]: any) => {
    if (exclude.includes(key)) return;

    fields.push({
      type: ZodToInputType[value._def.typeName],
      binding: key,
      label: value._def.description,
    });
  });

  return fields;
}
