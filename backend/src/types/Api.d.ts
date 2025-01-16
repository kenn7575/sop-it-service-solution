import type { Request, Response } from "express";

declare global {
  interface IController {
    (req: Request, res: Response): void;
  }

  interface IResponse<T = any> {
    status: number;
    data?: T;
  }
}

export {};
