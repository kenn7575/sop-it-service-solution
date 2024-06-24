import { Router } from "express";
import prisma from "@/prisma.config";

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

export default router;
