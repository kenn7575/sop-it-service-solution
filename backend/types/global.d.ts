import type { users } from "@prisma/client";

declare global {
  interface ldapUser {
    distinguishedName: string;
    firstName: string;
    lastName: string;
    fullName: string;
    mail: string;
  }

  interface user extends Omit<users, "UUID">, ldapUser {
    UUID?: number;
    moderatorLevel: number;
  }
}

export {};
