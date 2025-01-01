import { describe, it, afterEach } from "vitest";
import * as usersViewService from "@services/users_view";
import createTestCases from "./generateTests";

describe("Users View", () => {
  const deleteFunction = async (UUID: string) => {};

  const specificTestCases = createTestCases(usersViewService, deleteFunction);

  afterEach(async () => {
    specificTestCases.cleanUp();
  });

  describe("Get cases", () => {
    it("should get all users", specificTestCases.getAllTest());
  });
});