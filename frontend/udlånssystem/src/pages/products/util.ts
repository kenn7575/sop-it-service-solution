import { z } from "zod";
import type { Field } from "types/field";

export let fields = [
  {
    type: "select",
    binding: "product_id",
    label: "Produkttype",
    options: "products",
  },
  {
    type: "select",
    binding: "product_status_id",
    label: "Status",
    options: "product_status",
  },
] as Field[];

export let zodSchema = z.object({
  product_id: z.number().int(),
  product_status_id: z.number().int(),
});