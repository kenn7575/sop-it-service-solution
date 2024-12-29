import * as locationsService from "@services/locations";

export function GetAll(): IController {
  return async (req, res) => {
    const response = await locationsService.getAll();

    res.status(response.status).json(response.data);
  };
}
