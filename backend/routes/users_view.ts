import { Router } from "express";
import prisma from "@/prisma.config";
import { addFullname } from "../functions";

const router = Router();

router.get("/", async (req, res) => {
  let users = await prisma.users_view.findMany();

  await addFullname(users, "Brugernavn");

  res.json({ headers: Object.keys(prisma.users_view.fields), data: users });
});

export default router;
