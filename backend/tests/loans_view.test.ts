import { describe, it, afterEach } from "vitest";
import * as loansViewService from "@services/loans_view";
import createTestCases from "./generateTests";

describe("Loans View", () => {
  const deleteFunction = async (UUID: string) => {};

  const specificTestCases = createTestCases(loansViewService, deleteFunction);

  afterEach(async () => {
    specificTestCases.cleanUp();
  });

  describe("Get cases", () => {
    it("should get all loans", specificTestCases.getAllTest());
  });
});
