const express = require("express");
const router = express.Router();
const prisma = require("../prisma.config.js");

router.get("/:UUID", async (req, res) => {
  const { UUID } = req.params;

  var brand = await prisma.brands.findUnique({
    where: { UUID: Number(UUID) },
    include: { _count: { select: { products: true } } },
  });

  res.json(brand);
});

module.exports = router;
