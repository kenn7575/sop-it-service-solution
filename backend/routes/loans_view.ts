import { Router } from "express";
import prisma from "@/prisma.config";
import { addFullname } from "@functions";

const router = Router();

router.get(["/", "/:UUID"], async (req: any, res, next) => {
  const { moderator } = req.user;

  let user = await prisma.users.findFirst({
    where: { username: req.user.username },
  });

  if (!user && !moderator) return res.sendStatus(401);

  let user_id = moderator ? undefined : user?.UUID;

  let loans = await prisma.loans.findMany({
    where: { user_id },
    select: { UUID: true },
  });

  const loansView = await prisma.loans_view.findMany({
    where: { UUID: { in: loans.map((loan) => loan.UUID) } },
  });

  await addFullname(loansView, "Laaner_Brugernavn");

  let headers = Object.keys(prisma.loans_view.fields);

  res.json({ headers, data: loansView });
});

export default router;
