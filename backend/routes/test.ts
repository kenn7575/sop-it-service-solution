import { Router } from "express";
import PDFDocument from "pdfkit";
import { generateHtml, generatePdf } from "@functions";
import prisma from "@/prisma.config";
import puppeteer from "puppeteer";

const router = Router();

router.get("/1", async (req, res) => {
  const loan = await getLoan();

  if (!loan) return res.status(404).json({ error: "Loan not found" });

  const main = generateHtml("main", {
    username1: loan.users_loans_user_idTousers.username,
    username2: loan.users_loans_helpdesk_personel_idTousers || "",
    date1: loan.date_created.toLocaleDateString("da-dk") || "",
    date2: loan.date_of_return?.toLocaleDateString("da-dk") || "",
  });

  const itemLoans = generateHtml("itemLoans", {});

  const pdf = await generatePdf([main, itemLoans]);

  res.setHeader("Content-Type", "application/pdf");
  res.send(pdf);
});

router.get("/2", async (req, res) => {
  const loan = await getLoan();

  if (!loan) return res.status(404).json({ error: "Loan not found" });

  const doc = new PDFDocument({
    // font: "Inter",
    info: { Title: "Udlånskvittering" },
  });

  // doc.pipe(fs.createWriteStream("test.pdf"))

  doc.image("./images/sde-logotype.png", 150, 50, {
    align: "center",
    fit: [300, 300],
  });

  doc.moveDown(8);

  // doc.fontSize(25).text("SDE Skoleoplæring", { align: "center" });
  // doc.moveDown();

  const h2 = 17
  const h1 = 21

  const topTextY = doc.y;

  doc
    .fontSize(h2)
    .text("Låner: ", 30, topTextY, { align: "left", })
    .fontSize(h1)
    .text(loan.users_loans_user_idTousers.username, {
      continued: true,
    });

  doc
    .fontSize(h2)
    .text("Låne Dato: ", 30, topTextY, { align: "right" })
    .fontSize(h1)
    .text(loan.date_created.toLocaleDateString("da-dk"), {
      align: "right",
    });

  doc
    .fontSize(h2)
    .text("Udlåner: ", 30, topTextY + 60, { align: "left" })
    .fontSize(h1)
    .text(loan.helpdesk_personel_id?.toString() || "", {
      continued: true,
    });

  let date_to_return = new Date(loan.date_created);

  date_to_return.setDate(date_to_return.getDate() + (loan.loan_length || 0));

  doc
    .fontSize(h2)
    .text("Retur Dato: ", 30, topTextY + 60, { align: "right" })
    .fontSize(h1)
    .text(date_to_return.toLocaleDateString("da-dk"), {
      align: "right",
    });

  doc.moveDown(2);

  const currentY = doc.y;

  doc.fontSize(20).text("Lånte produkter:");

  for (let item of loan.items_in_loan) {
    doc.fontSize(16).text(item.items.products.name);
  }

  doc.moveDown().text("Total: " + loan.items_in_loan.length, 30, doc.y);

  doc.fontSize(20).text("Lånte kabler:", 0, currentY, { align: "right" });

  for (let cable of loan.cables_in_loan) {
    doc.fontSize(16).text(cable.cables.name, 0, doc.y, { align: "right" });
  }

  doc.moveDown().text("Total: " + loan.cables_in_loan.length, 30, doc.y, {
    align: "right",
  });

  // doc.moveUp();
  // doc.text("Dato: ", { align: "right" });

  doc.end();

  doc.pipe(res);
});

router.get("/3", async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  page.setCookie({
    domain: "localhost",
    name: "token",
    value:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiBEb2UiLCJ1c2VybmFtZSI6Impkb2UiLCJtYWlsIjoiam9obmRvZUBtYWlsLmNvbSIsIm1vZGVyYXRvciI6dHJ1ZSwiaWF0IjoxNzE4Nzc3MTM5fQ.bRobcOQdj3I5Hv_S-aV0mb_l7ackYF9RqhbOIVPpi58",
  });

  await page.goto("http://localhost:5173/udlaan/1408/pdf", {
    waitUntil: "networkidle2",
  });

  await page.evaluate(() => {
    // @ts-ignore
    const pdfPart = document.querySelector("#pdf");

    if (pdfPart) {
      // @ts-ignore
      document.body.innerHTML = "";
      // @ts-ignore
      document.body.appendChild(pdfPart);
    } else {
      throw new Error("PDF part not found");
    }
  });

  const pdf = await page.pdf({
    format: "A4",
    printBackground: true,
  });

  await browser.close();

  res.setHeader("Content-Type", "application/pdf");
  res.send(pdf);
});

export default router;

async function getLoan() {
  const loan = await prisma.loans.findUnique({
    where: { UUID: 4351 },
    include: {
      items_in_loan: {
        select: { items: { select: { products: { select: { name: true } } } } },
      },
      cables_in_loan: {
        select: { cables: { select: { name: true, amount_lent: true } } },
      },
      users_loans_user_idTousers: true,
      users_loans_helpdesk_personel_idTousers: true,
    },
  });

  return loan;
}
