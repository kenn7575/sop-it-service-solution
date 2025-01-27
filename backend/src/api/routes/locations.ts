import { Router } from "express";

import * as locationsController from "@controllers/locations";

const router = Router();

router.get("/", locationsController.GetAll());

export default router;
