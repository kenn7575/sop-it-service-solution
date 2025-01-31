import { Router } from "express";

import * as itemsViewController from "@controllers/items_view";
import { verifyLDAP } from "@middleware/auth";

const router = Router();

router.get("/", itemsViewController.GetAll());
// router.get("/", verifyLDAP, itemsViewController.GetAll());

export default router;
