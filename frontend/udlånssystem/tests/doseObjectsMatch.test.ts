import doseObjectsMatch from "../src/services/doesObjectsMatch";
import { describe, it } from "vitest";

describe("doesObjectsMatch", () => {
  it("should return true if two objects are the same", async ({ expect }) => {
    const object1 = { id: 1, name: "test" };
    const object2 = { id: 1, name: "test" };
    const object3 = { id: 1, name: "test", age: 20 };
    const object4 = { id: 2, name: "test", age: 20 };
    expect(doseObjectsMatch(object1, object2)).toBe(true);
    expect(doseObjectsMatch(object1, object3)).toBe(false);
    expect(doseObjectsMatch(object3, object4)).toBe(false);
  });
});
