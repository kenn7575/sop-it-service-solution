import * as ItemsViewService from "@services/items_view";

export function GetAll(): IController {
  return async (req, res) => {
    const response = await ItemsViewService.getAll();

    res.status(response.status).json(response.data);
  };
}
