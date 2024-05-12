import { z } from "zod";

export const zodSchema = z.object({
  name: z
    .string({ description: "Navn", message: "Navn er påkrævet" })
    .trim()
    .min(1, "Navn er påkrævet"),
});
