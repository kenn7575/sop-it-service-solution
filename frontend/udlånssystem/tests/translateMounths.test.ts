import { translateMonth } from "../src/services/translateMonth";
import { describe, it } from "vitest";
describe("translateMonth", () => {
  const mounths = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const mounthsDanish = [
    "Januar",
    "Februar",
    "Marts",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "December",
  ];
  it("should return the correct month", async ({ expect }) => {
    for (let i = 0; i < mounths.length; i++) {
      expect(translateMonth(mounths[i])).toBe(mounthsDanish[i]);
    }
  });
});
