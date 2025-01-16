import { describe, it, afterEach } from "vitest";
import * as itemsService from "@services/items";
import * as tableService from "@services/tables";
import createTestCases from "./generateTests";
import prisma from "@/configs/prisma.config";

describe("Items", () => {
  const deleteFunction = async (UUID: string) => {
    await prisma.items.delete({ where: { UUID: Number(UUID) } });
  };

  const specificTestCases = createTestCases(itemsService, deleteFunction);
  const tableTestCases = createTestCases(tableService, deleteFunction);

  afterEach(async () => {
    specificTestCases.cleanUp();
  });

  describe("Get cases", async () => {
    const { UUID } = await prisma.items.findFirstOrThrow();

    it("should get all items", tableTestCases.getAllTest("items"));
    it("should get one item", specificTestCases.getOneTest(UUID));
  });

  describe("Create cases", async () => {
    const { UUID } = await prisma.products.findFirstOrThrow();

    it("should create an item", specificTestCases.createMultipleTest(UUID));
  });
});
