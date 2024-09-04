import { Router } from "express";
import prisma from "@/prisma.config";
import { addFullname } from "@functions";

const router = Router();

router.get(["/", "/:UUID"], async (req, res) => {
  const moderatorLevel = req.user?.moderatorLevel;

  let user = await prisma.users.findFirst({
    where: { username: req.user?.username },
  });

  if (!user && !moderatorLevel) return res.sendStatus(401);

  let user_id = moderatorLevel ? undefined : user?.UUID;

  let loans = await prisma.loans.findMany({
    where: { user_id },
    select: { UUID: true },
  });

  const loansView = await prisma.loans_view.findMany({
    where: { UUID: { in: loans.map((loan) => loan.UUID) } },
  });

  await addFullname(loansView, "Laaner");

  let headers = Object.keys(prisma.loans_view.fields);

  res.json({ headers, data: loansView });
});

export default router;
