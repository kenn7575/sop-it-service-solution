import { autoGenZodSchema } from "@services/autoGen";

export const fields: Field<cableCategoryModel>[] = [{ label: "Navn", binding: "name" }];

export const zodSchema = autoGenZodSchema(fields);
