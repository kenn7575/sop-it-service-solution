import { autoGenZodSchema } from "@services/autoGen";

export const fields: Field<categoryModel>[] = [
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
