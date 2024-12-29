import { Router } from "express";
import * as usersViewController from "@controllers/users_view";

const router = Router();

router.get("/", usersViewController.GetAll());

export default router;
