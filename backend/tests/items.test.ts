import { describe, it, afterEach } from "vitest";
import * as itemsService from "@services/items";
import * as tableService from "@services/tables";
import createTestCases from "./generateTests";
import prisma from "@/prisma.config";

describe("Items", () => {
  const deleteFunction = async (UUID: string) => {
    await prisma.items.delete({ where: { UUID: Number(UUID) } });
  };

  const specificTestCases = createTestCases(itemsService, deleteFunction);

  afterEach(async () => {
    specificTestCases.cleanUp();
  });

  describe("Get cases", () => {
    it("should get all items", specificTestCases.getAllTest());
  });

  describe("Create cases", async () => {
    const { UUID } = await prisma.products.findFirstOrThrow();

    it("should create an item", specificTestCases.createMultipleTest(UUID));
  });
});
