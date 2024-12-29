import * as ItemsService from "@services/items";

export function GetAll(): IController {
  return async (req, res) => {
    const { UUID } = req.params;

    const response = await ItemsService.getAll(UUID);

    res.status(response.status).json(response.data);
  };
}

export function CreateOne(): IController {
  return async (req, res) => {
    const { product_id, amount } = req.body.data;

    const response = await ItemsService.createOneOrMore(product_id, amount);

    res.status(response.status).json(response.data);
  };
}
