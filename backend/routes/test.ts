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

  doc.image("./images/sde-logotype.png", 150, 50, {
    align: "center",
    fit: [300, 300],
  });

  doc.moveDown(7);

  // doc.fontSize(25).text("SDE Skoleoplæring", { align: "center" });
  // doc.moveDown();

  doc
    .fontSize(15)
    .text("Låner: ")
    .fontSize(23)
    .text(loanExample.users_loans_user_idTousers.username, { continued: true });

  doc
    .fontSize(15)
    .text("Dato: ", { align: "right" })
    .fontSize(23)
    .text(loanExample.date_created.split("T")[0], {
      align: "right",
    });

  doc.text("Lånte produkter:");

  for (let item of loanExample.items_in_loan) {
    doc.text(item.UUID.toString());
  }

  // doc.moveUp();
  // doc.text("Dato: ", { align: "right" });

  doc.end();

  doc.pipe(res);
});

export default router;

const loanExample = {
  UUID: 4351,
  date_created: "2023-10-18T11:30:48.000Z",
  date_updated: "2023-10-18T11:30:48.000Z",
  date_of_return: null,
  location_of_use_id: null,
  user_id: 907,
  helpdesk_personel_id: null,
  selfservice_case_id: null,
  recipient_type_id: null,
  loan_length: null,
  items_in_loan: [
    {
      UUID: 6734,
      loan_id: 4351,
      item_id: 1952,
      date_created: "2024-06-14T08:52:56.000Z",
      date_returned: null,
    },
    {
      UUID: 6735,
      loan_id: 4351,
      item_id: 3264,
      date_created: "2024-06-14T08:52:56.000Z",
      date_returned: null,
    },
    {
      UUID: 6736,
      loan_id: 4351,
      item_id: 1951,
      date_created: "2024-06-14T08:52:56.000Z",
      date_returned: null,
    },
    {
      UUID: 6737,
      loan_id: 4351,
      item_id: 2606,
      date_created: "2024-06-14T08:52:56.000Z",
      date_returned: null,
    },
    {
      UUID: 6738,
      loan_id: 4351,
      item_id: 1901,
      date_created: "2024-06-14T08:52:56.000Z",
      date_returned: null,
    },
    {
      UUID: 6739,
      loan_id: 4351,
      item_id: 1965,
      date_created: "2024-06-14T08:52:56.000Z",
      date_returned: null,
    },
    {
      UUID: 6740,
      loan_id: 4351,
      item_id: 1900,
      date_created: "2024-06-14T08:52:56.000Z",
      date_returned: null,
    },
    {
      UUID: 6741,
      loan_id: 4351,
      item_id: 3979,
      date_created: "2024-06-14T08:52:56.000Z",
      date_returned: null,
    },
    {
      UUID: 6742,
      loan_id: 4351,
      item_id: 3989,
      date_created: "2024-06-14T08:52:56.000Z",
      date_returned: null,
    },
    {
      UUID: 6743,
      loan_id: 4351,
      item_id: 1853,
      date_created: "2024-06-14T08:52:56.000Z",
      date_returned: null,
    },
    {
      UUID: 6744,
      loan_id: 4351,
      item_id: 1825,
      date_created: "2024-06-14T08:52:56.000Z",
      date_returned: null,
    },
    {
      UUID: 6745,
      loan_id: 4351,
      item_id: 1888,
      date_created: "2024-06-14T08:52:56.000Z",
      date_returned: null,
    },
    {
      UUID: 6746,
      loan_id: 4351,
      item_id: 1878,
      date_created: "2024-06-14T08:52:56.000Z",
      date_returned: null,
    },
    {
      UUID: 6747,
      loan_id: 4351,
      item_id: 1869,
      date_created: "2024-06-14T08:52:56.000Z",
      date_returned: null,
    },
  ],
  cables_in_loan: [
    {
      UUID: 450,
      loan_id: 4351,
      cable_id: 4,
      amount_lent: 1,
      amount_returned: 0,
      date_returned: null,
    },
    {
      UUID: 451,
      loan_id: 4351,
      cable_id: 5,
      amount_lent: 2,
      amount_returned: 0,
      date_returned: null,
    },
    {
      UUID: 452,
      loan_id: 4351,
      cable_id: 9,
      amount_lent: 1,
      amount_returned: 0,
      date_returned: null,
    },
    {
      UUID: 453,
      loan_id: 4351,
      cable_id: 24,
      amount_lent: 1,
      amount_returned: 0,
      date_returned: null,
    },
  ],
  users_loans_user_idTousers: {
    UUID: 907,
    username: "ANNL",
    password: "$2y$10$lHfKM8OFTL4uvle0SFdS4.MRXZaK47ec26uzYeg/1FzBqPea4dSZ.",
    name: "Anette N. Larsen",
    mail: "ANNL@edu.sde.dk",
    is_ad_user: true,
    date_created: "2022-11-09T15:37:21.000Z",
    date_updated: "2022-11-09T15:37:21.000Z",
    education_id: 1,
    role_id: 3,
    img_name: null,
  },
  users_loans_helpdesk_personel_idTousers: null,
  _count: {
    items_in_loan: 14,
    cables_in_loan: 4,
  },
};
