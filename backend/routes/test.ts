import { Router } from "express";
import PDFDocument from "pdfkit";
import fs from "fs";

const router = Router();

router.get("/", async (req, res) => {
  const doc = new PDFDocument();

  // doc.pipe(fs.createWriteStream("test.pdf"))

  doc.fontSize(25).text("SDE Skoleoplæring", { align: "center" });
  doc.moveDown();

  doc.text("Bruger: ", { align: "left" })
  doc.moveUp();
  doc.text("Dato: ", { align: "right" })

  doc.text("Emne: ", { align: "left" })

  doc.end();

  res.setHeader('Content-disposition', 'inline; filename="' + "test" + '"');
  res.setHeader('Content-type', 'application/pdf');

  doc.pipe(res);
});

export default router;
