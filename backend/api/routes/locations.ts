import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();

const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const buildings = await prisma.buildings.findMany({
    include: {
      zones: true,
    },
  });

  res.json(buildings);
});

export default router;
