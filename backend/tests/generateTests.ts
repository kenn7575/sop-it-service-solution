import { Prisma } from "@prisma/client";
import { expect, TestFunction } from "vitest";

type IService<T = any> = Partial<{
  getAll: (id?: number) => Promise<IResponse<T[]>>;
  getOne: (id: number) => Promise<IResponse<T>>;
  createOne: (...args: any[]) => Promise<IResponse<T>>;
  createMultiple: (body: any) => Promise<IResponse<T[]>>;
  updateOne: (id: number, body: any) => Promise<IResponse<T>>;
  deleteOne: (id: number) => Promise<IResponse<T>>;
  returnLoan: (items: any) => Promise<IResponse<T>>;
}>;

type FunctionWithArgs<T> = T extends (...args: infer P) => any
  ? (...args: P) => TestFunction
  : never;

type ITestCases<T extends IService> = {
  [K in keyof T as `${string & K}Test`]: FunctionWithArgs<T[K]>;
} & {
  cleanUp: () => void;
};

function createTableTestCases(table: Prisma.ModelName) {}

export default function createTestCases<T extends IService>(
  service: T,

  cleanupFunction: (id: string) => void
): ITestCases<T> {
  const cleanupList: string[] = [];

  const testCases = {
    cleanUp() {
      cleanupList.map(cleanupFunction);
    },
  } as ITestCases<T>;

  if (service.getAll && typeof service.getAll === "function") {
    testCases.getAllTest = ((...args: any): TestFunction => {
      return async () => {
        const response = await service.getAll!(...args);

        expect(response.status).toBe(200);
        if (Array.isArray(response.data)) {
          expect(response.data).toBeInstanceOf(Array);
        } else {
          expect(response.data).toBeInstanceOf(Object);
        }
      };
    }) as FunctionWithArgs<T["getAll"]>;
  }

  if (service.getOne && typeof service.getOne === "function") {
    testCases.getOneTest = ((id: number): TestFunction => {
      return async () => {
        const response = await service.getOne!(id);

        expect(response.status).toBe(200);
        expect(response.data).toBeInstanceOf(Object);
      };
    }) as FunctionWithArgs<T["getOne"]>;
  }

  if (service.createOne && typeof service.createOne === "function") {
    testCases.createOneTest = ((...args: any[]): TestFunction => {
      return async () => {
        const response = await service.createOne!(...args);

        expect(response.status).toBe(201);
        expect(response.data).toBeInstanceOf(Object);
      };
    }) as FunctionWithArgs<T["createOne"]>;
  }

  if (service.createMultiple && typeof service.createMultiple === "function") {
    testCases.createMultipleTest = ((body: any): TestFunction => {
      return async () => {
        const response = await service.createMultiple!(body);

        expect(response.status).toBe(201);
        expect(response.data).toBeInstanceOf(Array);

        if (response.data) {
          cleanupList.push(...response.data.map((d) => d.UUID));
        }
      };
    }) as FunctionWithArgs<T["createMultiple"]>;
  }

  if (service.updateOne && typeof service.updateOne === "function") {
    testCases.updateOneTest = ((id: number, body: any): TestFunction => {
      return async () => {
        const response = await service.updateOne!(id, body);

        expect(response.status).toBe(200);
        expect(response.data).toBeInstanceOf(Object);
      };
    }) as FunctionWithArgs<T["updateOne"]>;
  }

  if (service.deleteOne && typeof service.deleteOne === "function") {
    testCases.deleteOneTest = ((id: number): TestFunction => {
      return async () => {
        const response = await service.deleteOne!(id);

        expect(response.status).toBe(200);
      };
    }) as FunctionWithArgs<T["deleteOne"]>;
  }

  return testCases;
}
