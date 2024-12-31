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

  // getOneTest(getId: GetId) {
  //   return async () => {
  //     let id = getId;

  //     if (typeof getId === "function") id = (await getId()).id;

  //     const response = await this.service.getOne(id as number);

  //     expect(response.status).toBe(200);
  //     expect(response.data).toEqual({
  //       data: expect.arrayContaining([]),
  //       status: "Found",
  //       message: this.expectedMessage?.getAll,
  //     });
  //   };
  // }

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

  return testCases;

  // updateTest() {
  //   return async () => {};
  // }

  // deleteTest() {
  //   return async () => {};
  // }
}
