import { z } from "zod";
import type { Field } from "types/field";

export let fields = [
  {
    type: "text",
    binding: "name",
    label: "Navn",
    required: true,
  },
  {
    type: "select",
    binding: "brand_id",
    label: "Brand",
    options: "brands",
  },
  {
    type: "select",
    binding: "category_id",
    label: "Kategori",
    options: "categories",
  },
] as Field[];

export let zodSchema = z.object({
  name: z.string({ description: "Navn", message: "Navn er påkrævet" }),
  brand_id: z.number().int(),
  category_id: z.number().int(),
});
