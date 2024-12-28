import { Router } from "express";
import { Login, Validate } from "@/api/controllers/auth";

const router = Router();

router.post("/login", Login());
router.post("/validate", Validate());

router.get("/cookies", (req, res) => {
  res.json(req.cookies);
});

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
});

export default router;
