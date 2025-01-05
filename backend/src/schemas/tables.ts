import { z } from "zod";

export const getTables = z.object({
  UUID: z.coerce.number(),
});
