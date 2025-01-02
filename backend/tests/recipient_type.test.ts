import { describe, it } from "vitest";
import * as tableService from "@services/tables";
import createTestCases from "./generateTests";
import prisma from "@/prisma.config";
import { Prisma } from "@prisma/client";

describe("Recipient type", () => {
  const testCases = createTestCases(tableService);
  const table: Prisma.ModelName = "recipient_type";

  describe("Get cases", async () => {
    const { UUID } = await prisma[table].findFirstOrThrow();

    it("should get all", testCases.getAllTest(table));
    it("should get one", testCases.getOneTest(table, UUID));
  });

  describe("Create cases", async () => {
    const createBody = { name: "Test" };

    it("should create", testCases.createOneTest(table, createBody));
  });

  describe("Update cases", async () => {
    const { UUID } = await prisma[table].findFirstOrThrow();
    const updateBody = { name: "Updated" };

    it("should update", testCases.updateOneTest(table, UUID, updateBody));
  });

  describe("Delete cases", async () => {
    const { UUID } = await prisma[table].create({ data: { name: "Temp" } });

    it("should delete", testCases.deleteOneTest(table, UUID));
  });
});
