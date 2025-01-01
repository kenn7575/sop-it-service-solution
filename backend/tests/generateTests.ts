import { expect, TestFunction } from "vitest";

type GetId = number | (() => Promise<{ id: number }>);

type IService<T = any> = Partial<{
  getAll: (id?: number) => Promise<IResponse<T[]>>;
  getOne: (id: number) => Promise<IResponse<T>>;
  createOne: (body: any) => Promise<IResponse<T>>;
  createMultiple: (body: any) => Promise<IResponse<T[]>>;
  updateOne: (id: number, body: any) => Promise<IResponse<T>>;
  deleteOne: (id: number) => Promise<IResponse<T>>;
}>;

type ITestCases<T extends IService> = {
  [K in keyof T as `${string & K}Test`]: T[K] extends (...args: infer P) => any
    ? (...args: P) => TestFunction
    : never;
} & {
  cleanUp: () => void;
};

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
        expect(response.data).toBeInstanceOf(Array);
      };
    }) as T["getAll"] extends (...args: infer P) => any
      ? (...args: P) => TestFunction
      : never;
  }

  if (service.getOne && typeof service.getOne === "function") {
    testCases.getOneTest = ((id: number): TestFunction => {
      return async () => {
        const response = await service.getOne!(id);

        expect(response.status).toBe(200);
        expect(response.data).toBeInstanceOf(Object);
      };
    }) as T["getOne"] extends (...args: infer P) => any
      ? (...args: P) => TestFunction
      : never;
  }

  if (service.createOne && typeof service.createOne === "function") {
    testCases.createOneTest = ((body: any): TestFunction => {
      return async () => {
        const response = await service.createOne!(body);

        expect(response.status).toBe(201);
        expect(response.data).toBeInstanceOf(Object);
      };
    }) as T["createOne"] extends (...args: infer P) => any
      ? (...args: P) => TestFunction
      : never;
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
    }) as T["createMultiple"] extends (...args: infer P) => any
      ? (...args: P) => TestFunction
      : never;
  }

  if (service.updateOne && typeof service.updateOne === "function") {
    testCases.updateOneTest = ((id: number, body: any): TestFunction => {
      return async () => {
        const response = await service.updateOne!(id, body);

        expect(response.status).toBe(200);
        expect(response.data).toBeInstanceOf(Object);
      };
    }) as T["updateOne"] extends (...args: infer P) => any
      ? (...args: P) => TestFunction
      : never;
  }

  if (service.deleteOne && typeof service.deleteOne === "function") {
    testCases.deleteOneTest = ((id: number): TestFunction => {
      return async () => {
        const response = await service.deleteOne!(id);

        expect(response.status).toBe(200);
      };
    }) as T["deleteOne"] extends (...args: infer P) => any
      ? (...args: P) => TestFunction
      : never;
  }

  return testCases;
}
