import { describe, it, afterEach } from "vitest";
import * as loansService from "@services/loans";
import createTestCases from "./generateTests";
import prisma from "@/prisma.config";
import { items, loans } from "@prisma/client";

describe("Loans", () => {
  const deleteFunction = async (UUID: string) => {
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
