import prisma from "@/configs/prisma.config";
import { loans } from "@prisma/client";

export async function returnLoan(loanId: loans["UUID"]) {
  const itemsNotReturned = await prisma.items_in_loan.findMany({
    where: { loan_id: loanId, date_returned: null },
  });

  if (itemsNotReturned.length === 0) {
    await prisma.loans.update({
      where: { UUID: loanId },
      data: { date_of_return: new Date() },
    });

    return true;
  }

  return false;
}
