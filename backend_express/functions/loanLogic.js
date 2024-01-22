async function returnLoan(db, loanId) {
  const itemsNotReturned = await db.find("items_in_loan", {
    loan_id: loanId,
    date_returned: null,
  });

  const cablesNotReturned = await db.find("cables_in_loan", {
    loan_id: loanId,
    date_returned: null,
  });

  if (itemsNotReturned.length === 0 && cablesNotReturned.length === 0) {
    await db.update("loans", { UUID: loanId }, { date_of_return: new Date() });

    return true;
  }

  return false;
}

async function returnCable(db, cable) {
  const { amount_lent, amount_returned } = await db.findOne("cables_in_loan", {
    cable_id: cable.UUID,
  });

  await db.update(
    "cables",
    { UUID: cable.UUID },
    { amount_lent: amount_lent - cable["Mængde returneret"] }
  );

  if (amount_returned >= amount_lent) {
    await db.update(
      "cables_in_loan",
      { cable_id: cable.UUID, date_returned: null },
      { date_returned: new Date() }
    );

    return true;
  }

  return false;
}

module.exports = {
  returnLoan,
  returnCable,
};
