import { describe, it } from "vitest";
import {
  stripPath,
  formatPathToBreadcrumps,
  getLastPath,
} from "../src/services/pathFormatter";

describe("stripPath", () => {
  it("should cut off parts of a path string", async ({ expect }) => {
    const path1 = "/test/1";
    const path2 = "/";
    expect(stripPath(path1, 1)).toBe("/test");
    expect(stripPath(path1, 2)).toBe("/test/1");
    expect(stripPath(path2, 1)).toBe("/");
    expect(stripPath(path2, 2)).toBe("/");
  });
});

describe("formatPathToBreadcrumps", () => {
  it("should format a path string to an array of strings", async ({
    expect,
  }) => {
    const path1 = "/the/test";
    const path2 = "/";
    const path3 = "/test";
    expect(formatPathToBreadcrumps(path1)).toEqual([
      { path: "The", fullPath: "/the", seperator: true },
      { path: "Test", fullPath: "/the/test", seperator: false },
    ]);
    expect(formatPathToBreadcrumps(path2)).toEqual([
      { path: "Hjem", fullPath: "/", seperator: false },
    ]);
    expect(formatPathToBreadcrumps(path3)).toEqual([
      { path: "Test", fullPath: "/test", seperator: false },
    ]);
  });
});

describe("getLastPath", () => {
  it("should return the last part of a path", async ({ expect }) => {
    const path1 = "/the/test";
    const path2 = "/";
    const path3 = "/test";
    expect(getLastPath(path1)).toBe("test");
    expect(getLastPath(path2)).toBe("");
    expect(getLastPath(path3)).toBe("test");
  });
});
