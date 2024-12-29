import { items, loans } from "@prisma/client";
import * as loansService from "@services/loans";

interface reqBody {
  loan: loans;
  products: (items & { withBag: boolean; withLock: boolean })[];
  personel_username: string;
  personel_password: string;
}

export function CreateOne(): IController {
  return async (req, res) => {
    const {
      loan,
      products = [],
      personel_username,
      personel_password,
    }: reqBody = req.body;

    const response = await loansService.createOne(
      loan,
      products,
      personel_username,
      personel_password
    );

    res.status(response.status).json(response.data);
  };
}

export function ReturnLoan(): IController {
  return async (req, res) => {
    const response = await loansService.returnLoan(
      req.body.ItemsInLoanToReturn
    );

    res.status(response.status).json(response.data);
  };
}
