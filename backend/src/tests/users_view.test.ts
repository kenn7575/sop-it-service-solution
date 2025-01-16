import { describe, it } from "vitest";
import * as usersViewService from "@services/users_view";
import createTestCases from "./generateTests";

describe("Users View", () => {
  const specificTestCases = createTestCases(usersViewService);

  describe("Get cases", () => {
    it("should get all users", specificTestCases.getAllTest());
  });
});
