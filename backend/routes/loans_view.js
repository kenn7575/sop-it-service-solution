const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get(["/", "/:UUID"], async (req, res, next) => {
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

  const headers = Object.keys(prisma.loans_view.fields);

  res.json({ headers, data: loansView });
});

module.exports = router;
