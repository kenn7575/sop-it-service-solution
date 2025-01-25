import fs from "fs";
import Handlebars from "handlebars";

import prisma from "@/configs/prisma.config";

export async function generateLoanHTML(loan_id: number, email = false) {
  const source = fs.readFileSync("src/templates/loan.hbs", "utf8");
  const template = Handlebars.compile(source);

  const loan = await prisma.loans.findFirst({
    where: { UUID: loan_id },
    include: {
      items_in_loan: { include: { items: { include: { products: true } } } },
      users_loans_user_idTousers: true,
      users_loans_helpdesk_personel_idTousers: true,
    },
  });

  const itemsInLoan = await prisma.items_from_loans.findMany({
    where: { loan_id: loan_id },
  });

  if (!loan) return "";

  const date_to_be_returned =
    new Date(loan.date_created).getTime() +
    (loan.loan_length || 0) * 24 * 60 * 60 * 1000;

  const html = template({
    ...loan,
    date_to_be_returned,
    loaner: loan.users_loans_user_idTousers,
    helpdesk_personel: loan.users_loans_helpdesk_personel_idTousers,
    date_created: new Date(loan.date_created).toLocaleDateString(),
    return_date: new Date(date_to_be_returned).toLocaleDateString(),
    itemsInLoan: itemsInLoan,
    email,
  });

  return html;
}
