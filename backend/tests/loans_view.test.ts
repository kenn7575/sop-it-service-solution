import { describe, it, afterEach } from "vitest";
import * as loansViewService from "@services/loans_view";
import createTestCases from "./generateTests";

describe("Loans View", () => {
  const specificTestCases = createTestCases(loansViewService);

  describe("Get cases", () => {
    it("should get all loans", specificTestCases.getAllTest());
  });
});
