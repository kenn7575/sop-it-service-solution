import { autoGenZodSchema } from "@services/autoGen";

export const fields: Field<cableModel>[] = [
  {
    label: "Navn",
    binding: "name",
  },
  {
    label: "Antal i alt",
    binding: "amount_total",
    type: "number",
    required: false,
  },
  {
    label: "Antal Lånt",
    binding: "amount_lent",
    type: "number",
    required: false,
  },
  {
    label: "Kategori",
    binding: "category_id",
    type: "select",
    options: "cable_categories",
  },
];

export const zodSchema = autoGenZodSchema(fields);
