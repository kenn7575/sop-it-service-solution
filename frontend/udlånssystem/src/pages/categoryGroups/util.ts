import { autoGenZodSchema } from "@services/autoGen";

export const fields: Field<categoryGroupModel>[] = [
  { label: "Navn", binding: "name" },
];

export const zodSchema = autoGenZodSchema(fields);
