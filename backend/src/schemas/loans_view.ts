import { z } from "zod";

export const getLoanViews = z.object({
  moderatorLevel: z.number(),
  username: z.string(),
});
