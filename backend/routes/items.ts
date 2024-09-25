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

router.post("/", async (req, res) => {
  const { product_id, amount } = req.body.data;

  const transactions = [];

  for (let i = 0; i < amount; i++) {
    const item = prisma.items.create({
      data: { product_id: Number(product_id) },
    });

    transactions.push(item);
  }

  const item = await prisma.$transaction(transactions);

  res.json(item);
});

export default router;
