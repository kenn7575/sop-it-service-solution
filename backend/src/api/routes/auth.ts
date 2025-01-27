import { Router } from "express";

import * as authController from "@controllers/auth";

const router = Router();

router.post("/login", authController.Login());
router.post("/validate", authController.Validate());

router.get("/cookies", (req, res) => {
  res.json(req.cookies);
});

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
});

export default router;
