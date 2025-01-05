import * as loansViewService from "@services/loans_view";

export function GetAll(): IController {
  return async (req, res) => {
    const { moderatorLevel, username } = req.user || {};

    const response = await loansViewService.getAll(moderatorLevel, username);

    res.status(response.status).json(response.data);
  };
}
