import type { Field } from "types/field";
import { autoGenZodSchema } from "@services/autoGen";

export const fields = [
  {
    label: "Produkttype",
    binding: "product_id",
    type: "select",
    options: "products",
  },
  {
    label: "Status",
    binding: "product_status_id",
    type: "select",
    options: "product_status",
  },
] as Field[];

export const zodSchema = autoGenZodSchema(fields);
