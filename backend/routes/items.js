const express = require("express");
const router = express.Router();
const prisma = require("../prisma.config.js");

router.get("/:UUID", async (req, res) => {
  const { UUID } = req.params;

  var item = await prisma.items.findUnique({
    where: { UUID: Number(UUID) },
    include: {
      items_in_loan: true
    },
  });

  res.json(item);
});

module.exports = router;
