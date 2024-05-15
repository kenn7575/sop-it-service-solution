const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function returnLoan(loanId) {
  const itemsNotReturned = await prisma.items_in_loan.findMany({
    where: { loan_id: loanId, date_returned: null },
  });

  const cablesNotReturned = await prisma.cables_in_loan.findMany({
    where: { loan_id: loanId, date_returned: null },
  });

  if (itemsNotReturned.length === 0 && cablesNotReturned.length === 0) {
    await prisma.loans.update({
      where: { UUID: loanId },
      data: { date_of_return: new Date() },
    });

    return true;
  }

  return false;
}

async function returnCable(cable) {
  const { amount_lent, amount_returned } =
    await prisma.cables_in_loan.findFirst({
      where: { cable_id: cable.UUID, loan_id: cable.loan_id },
    });

  await prisma.cables.update({
    where: { UUID: cable.UUID },
    data: {
      amount_lent: {
        decrement: cable["Mængde returneret"],
      },
    },
  });

  if (amount_returned >= amount_lent) {
    const { UUID: cableInLoanUUID } = await prisma.cables_in_loan.findFirst({
      where: { cable_id: cable.UUID, loan_id: cable.loan_id },
    });

    await prisma.cables_in_loan.update({
      where: { UUID: cableInLoanUUID },
      data: { date_returned: new Date() },
    });

    return true;
  }

  return false;
}

module.exports = {
  returnLoan,
  returnCable,
};
