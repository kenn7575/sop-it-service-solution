import { Router } from "express";
import * as itemsController from "@controllers/items";

const router = Router();

router.get("/:UUID", itemsController.GetOne());
router.post("/", itemsController.CreateOne());

export default router;
