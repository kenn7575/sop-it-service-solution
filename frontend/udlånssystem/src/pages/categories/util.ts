import type { Field } from "types/field";
import { autoGenZodSchema } from "@services/autoGen";

export const fields: Field[] = [
  {
    label: "Navn",
    binding: "name",
  },
  {
    label: "Kategorigruppe",
    binding: "category_group_id",
    type: "select",
    options: "category_groups",
  },
];

export const zodSchema = autoGenZodSchema(fields);