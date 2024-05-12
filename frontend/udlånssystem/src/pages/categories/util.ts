import { z } from "zod";
import { autoGenFields } from "@services/autoGenFields";

export const zodSchema = z.object({
  name: z
    .string({ description: "Navn", message: "Navn er påkrævet" })
    .trim()
    .min(1, "Navn er påkrævet"),
  category_group_id: z.number().int(),
});

export let fields = autoGenFields(zodSchema, ["category_group_id"]);

fields.push({
  type: "select",
  binding: "category_group_id",
  label: "Kategorigruppe",
  options: "category_groups",
});
