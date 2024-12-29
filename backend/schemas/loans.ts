import { z } from "zod";

export const createLoanSchema = z.object({
  loan: z.object({
    user_id: z.coerce.number(),
    date_of_return: z.coerce.date().optional(),
    helpdesk_personel_id: z.coerce.number(),
    loan_length: z.coerce.number(),
  }),
  products: z.array(
    z.object({
      UUID: z.coerce.number(),
      withBag: z.boolean(),
      withLock: z.boolean(),
    })
  ),
  personel_username: z.string(),
  personel_password: z.string(),
});
