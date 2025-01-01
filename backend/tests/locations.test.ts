import { describe, it, afterEach } from "vitest";
import * as locationsService from "@services/locations";
import createTestCases from "./generateTests";

describe("Locations", () => {
  const deleteFunction = async (UUID: string) => {};

  const specificTestCases = createTestCases(locationsService, deleteFunction);

  afterEach(async () => {
    specificTestCases.cleanUp();
  });

  describe("Get cases", () => {
    it("should get all locations", specificTestCases.getAllTest());
  });
});
