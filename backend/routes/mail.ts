import { Router } from "express";
import { sendMail } from "@functions";

const router = Router();

router.post("/", async (req, res) => {
  const { to, subject, text } = req.body;

  await sendMail(to, subject, text);

  res.send({ success: true });
});

export default router;
