import { Router } from "express";
import { prismaGetRefs as prisma } from "@/prisma.config";

const router = Router();

router.get("/:UUID", async (req, res) => {
  const { UUID } = req.params;

  var item = await prisma.items.findUnique({
    where: { UUID: Number(UUID) },
    include: {
      items_in_loan: {
        include: {
          loans: {
            include: { users_loans_user_idTousers: true },
          },
        },
      },
    },
  });

  res.json(item);
});

router.patch("/:UUID", async (req, res, next) => {
  // TODO: Only limit when changing status

  if (req.user && req.user.moderatorLevel < 2) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  next();
});

export default router;
