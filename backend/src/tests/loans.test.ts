import { afterEach, describe, it } from "vitest";

import prisma from "@/configs/prisma.config";
import * as loansService from "@services/loans";

import createTestCases from "./generateTests";

describe("Loans", () => {
  const deleteFunction = async (UUID: string) => {
    if (!UUID) return;
    await prisma.loans.delete({ where: { UUID: Number(UUID) } });
  };

  const specificTestCases = createTestCases(loansService, deleteFunction);

  afterEach(async () => {
    specificTestCases.cleanUp();
  });

  describe("Create cases", async () => {
    const { UUID: UserUUID, username } = await prisma.users.findFirstOrThrow();
    const { UUID: ItemUUID } = await prisma.items.findFirstOrThrow();

    const createLoanBody: ILoanCreateInput = {
      loan: {
        user_id: UserUUID,
        helpdesk_personel_id: UserUUID,
        loan_length: 30,
      },
      products: [{ UUID: ItemUUID, withBag: true, withLock: true }],
      personel_username: username,
      personel_password: "",
    };

    it("should create a loan", specificTestCases.createOneTest(createLoanBody));
  });
});
