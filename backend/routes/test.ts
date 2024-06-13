import { Router } from "express";
import PDFDocument from "pdfkit";
import { generateHtml, generatePdf } from "@functions";

const router = Router();

router.get("/1", async (req, res) => {
  const main = generateHtml("main", {
    username1: loanExample.users_loans_user_idTousers.username,
    username2: loanExample.users_loans_helpdesk_personel_idTousers || "",
    date1: loanExample.date_created,
    date2: loanExample.date_of_return,
  });

  const itemLoans = generateHtml("itemLoans", {});

  const pdf = await generatePdf([main, itemLoans]);

  res.setHeader("Content-Type", "application/pdf");
  res.send(pdf);
});

router.get("/2", async (req, res) => {
  const doc = new PDFDocument({
    // font: "Inter",
    info: { Title: "Udlånskvittering" },
  });

  // doc.pipe(fs.createWriteStream("test.pdf"))

  doc.fontSize(25).text("SDE Skoleoplæring", { align: "center" });
  doc.moveDown();

  doc
    .text("Bruger: ", { continued: true, align: "left" })
    .text(loanExample.users_loans_user_idTousers.username, { continued: true })
    .text("Dato: ", { align: "right" });

  doc.moveUp();
  doc.text("Dato: ", { align: "right" });

  doc.end();

  doc.pipe(res);
});

export default router;

const loanExample = {
  UUID: 1413,
  date_created: "2022-07-28T11:11:41.000Z",
  date_updated: "2022-07-28T15:03:27.000Z",
  date_of_return: "2022-07-28T13:03:27.000Z",
  location_of_use_id: null,
  user_id: 779,
  helpdesk_personel_id: null,
  selfservice_case_id: null,
  recipient_type_id: null,
  loan_length: 0,
  items_in_loan: [
    {
      UUID: 25,
      loan_id: 1413,
      item_id: 3961,
      date_created: "2024-05-17T09:08:55.000Z",
      date_returned: "2022-07-28T13:03:27.000Z",
    },
  ],
  cables_in_loan: [
    {
      UUID: 1,
      loan_id: 1413,
      cable_id: 9,
      amount_lent: 1,
      amount_returned: 0,
      date_returned: null,
    },
  ],
  users_loans_user_idTousers: {
    UUID: 779,
    username: "marc157d",
    password: "$2y$10$OHCmal4.YBxQVyZxxHLZxeM6q.fV5zQhCthH12c9ViHVQzToB5fFm",
    name: "Marco Rolle",
    mail: "marc157d@edu.sde.dk",
    is_ad_user: true,
    date_created: "2022-07-28T10:50:45.000Z",
    date_updated: "2022-07-28T10:50:45.000Z",
    education_id: 1,
    role_id: 2,
    img_name: null,
  },
  users_loans_helpdesk_personel_idTousers: null,
  _count: {
    items_in_loan: 1,
    cables_in_loan: 1,
  },
};
