import { Router } from "express";
import PDFDocument from "pdfkit";
import { generateHtml, generatePdf } from "@functions";

const router = Router();

router.get("/", async (req, res) => {
  // const doc = new PDFDocument();

  // // doc.pipe(fs.createWriteStream("test.pdf"))

  // doc.fontSize(25).text("SDE Skoleoplæring", { align: "center" });
  // doc.moveDown();

  // doc.text("Bruger: ", { align: "left" })
  // doc.moveUp();
  // doc.text("Dato: ", { align: "right" })

  // doc.text("Emne: ", { align: "left" })

  // doc.end();

  // res.setHeader('Content-disposition', 'inline; filename="' + "test" + '"');
  // res.setHeader('Content-type', 'application/pdf');

  // doc.pipe(res);

  const result = generateHtml({
    loaner_username: "test1",
    helpdesk_personel_username: "test2",
    date: "2021-09-01",
    return_date: "2021-09-02",
    subject: "Test",
  });

  const pdf = await generatePdf(result);

  res.setHeader("Content-Type", "application/pdf");
  res.send(pdf);
});

export default router;
