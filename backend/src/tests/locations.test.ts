import { describe, it } from "vitest";
import * as locationsService from "@services/locations";
import createTestCases from "./generateTests";

describe("Locations", () => {
  const specificTestCases = createTestCases(locationsService);

  describe("Get cases", () => {
    it("should get all locations", specificTestCases.getAllTest());
  });
});
