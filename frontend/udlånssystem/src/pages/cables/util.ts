import { z } from "zod";
import { autoGenFields } from "@services/autoGenFields";

export const zodSchema = z.object({
  name: z
    .string({ description: "Navn", message: "Navn er påkrævet" })
    .trim()
    .min(1, "Navn er påkrævet"),
  amount_total: z.coerce
    .number({ description: "Antal i alt" })
    .int("Antal i alt skal være et positivt heltal")
    .min(0, "Antal i alt skal være et positivt heltal")
    .nullish(),
  amount_lent: z.coerce
    .number({ description: "Antal Lånt" })
    .int("Antal lånt skal være et heltal")
    .min(0, "Antal lånt skal være et positivt heltal")
    .nullish(),
  category_id: z.number().int(),
});

export let fields = autoGenFields(zodSchema, ["category_id"]);

fields.push({
  type: "select",
  binding: "category_id",
  label: "Kategori",
  options: "cable_categories",
});
