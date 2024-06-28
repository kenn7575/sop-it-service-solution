import { autoGenZodSchema } from "@services/autoGen";

export const fields: Field<productModel>[] = [
  {
    label: "Navn",
    binding: "name",
    type: "text",
  },
  {
    label: "Brand",
    binding: "brand_id",
    type: "select",
    options: "brands",
  },
  {
    label: "Kategori",
    binding: "category_id",
    type: "select",
    options: "categories",
  },
];

export const zodSchema = autoGenZodSchema(fields);
