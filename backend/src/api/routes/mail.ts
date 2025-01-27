import { Router } from "express";

import { sendMail } from "@/functions";

const router = Router();

router.post("/", async (req, res) => {
  const { NODE_ENV = "" } = process.env;
  if (!["development", "test"].includes(NODE_ENV)) return;

  const { to, subject, text } = req.body;

  const response = await sendMail(to, subject, text);

  res.send(response);
});

export default router;
