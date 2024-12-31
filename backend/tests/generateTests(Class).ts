import { expect } from "vitest";

type GetId = number | (() => Promise<{ id: number }>);

type IService<T = any> = Partial<{
  getAll: () => Promise<IResponse<T[]>>;
  getOne: (id: number) => Promise<IResponse<T>>;
  createOne: (body: any) => Promise<IResponse<T>>;
  updateOne: (id: number, body: any) => Promise<IResponse<T>>;
  deleteOne: (id: number) => Promise<IResponse<T>>;
}>

interface ExpectedMessages {
  getAll: string;
  create: string;
  update: string;
  delete: string;
}

export default class TestCases<T extends { id: number }> {
  service: IService<T>;
  expectedMessage: Partial<ExpectedMessages>;
  cleanupList: string[] = [];

  constructor(
    service: IService<T>,
    expectedMessage: Partial<ExpectedMessages> = {}
  ) {
    this.service = service;
    this.expectedMessage = expectedMessage;

    if (service.getAll) this.getAllTest = async () => {}
  }

  cleanUp() {
    if (!this) return;

    for (const id of this.cleanupList) {
    }
  }

  getAllTest?: () => Promise<void>;

  // getAllTest() {
  //   return async () => {
  //     const response = await this.service.getAll();

  //     expect(response.status).toBe(200);
  //     expect(response.data).toEqual({
  //       data: expect.arrayContaining([]),
  //       status: "Found",
  //       message: this.expectedMessage?.getAll,
  //     });
  //   };
  // }

  getOneTest(getId: GetId) {
    return async () => {
      let id = getId;

      if (typeof getId === "function") id = (await getId()).id;

      const response = await this.service.getOne(id as number);

      expect(response.status).toBe(200);
      expect(response.data).toEqual({
        data: expect.arrayContaining([]),
        status: "Found",
        message: this.expectedMessage?.getAll,
      });
    };
  }

  createTest(body: any) {
    return async () => {
      const response = await this.service.createOne(body);

      expect(response.status).toBe(201);
      expect(response.data).toStrictEqual({
        status: "Created",
        message: this.expectedMessage?.create,
      });
    };
  }

  updateTest() {
    return async () => {};
  }

  deleteTest() {
    return async () => {};
  }
}
