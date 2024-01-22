async function returnLoan(db, loanId) {
  // const [itemsNotReturned] = await conn.query(
  //   "SELECT `item_id` FROM `items_in_loan` WHERE `loan_id` = (?) AND `date_returned` IS NULL",
  //   [loanId]
  // );

  const itemsNotReturned = await db.find("items_in_loan", {
    loan_id: loanId,
    date_returned: null,
  });

  console.log(itemsNotReturned);

  // const [cablesNotReturned] = await conn.query(
  //   "SELECT `cable_id` FROM `cables_in_loan` WHERE `loan_id` = (?) AND `date_returned` IS NULL AND `amount_returned` < `amount_lent`",
  //   [loanId]
  // );

  const cablesNotReturned = await db.find("cables_in_loan", {
    loan_id: loanId,
    date_returned: null,
    amount_returned: { $lt: "amount_lent" },
  });

  if (itemsNotReturned.length === 0 && cablesNotReturned.length === 0) {
    // await conn.query(
    //   "UPDATE `loans` SET `date_of_return` = NOW() WHERE `UUID` = (?)",
    //   [loanId]
    // );

    await db.update("loans", { UUID: loanId }, { date_of_return: new Date() });

    return true;
  }

  return false;
}

async function returnCable(db, cable) {
  const [amount] = await conn.query(
    "SELECT `amount_lent`, `amount_returned` FROM `cables_in_loan` WHERE `cable_id` = (?)",
    [cable.UUID]
  );

  await conn.query(
    "UPDATE `cables` SET `amount_lent` = `amount_lent` - ? WHERE `UUID` = (?)",
    [cable["Mængde returneret"], cable.UUID]
  );

  if (amount[0].amount_returned >= amount[0].amount_lent) {
    await conn.query(
      "UPDATE `cables_in_loan` SET `date_returned` = NOW() WHERE `cable_id` = (?) AND `date_returned` IS NULL",
      [cable.UUID]
    );

    return true;
  }

  return false;
}

module.exports = {
  returnLoan,
  returnCable,
};
