import { users } from "@prisma/client";

declare global {
  namespace Express {
    interface Request {
      user?: (users & { moderator: boolean }) | null;
    }
  }
}
