async function returnLoan(conn, loanId) {
  const [itemsNotReturned] = await conn.query(
    "SELECT `item_id` FROM `items_in_loan` WHERE `loan_id` = (?) AND `date_returned` IS NULL",
    [loanId]
  );

  const [cablesNotReturned] = await conn.query(
    "SELECT `cable_id` FROM `cables_in_loan` WHERE `loan_id` = (?) AND `date_returned` IS NULL AND `amount_returned` < `amount_lent`",
    [loanId]
  );

  if (itemsNotReturned.length === 0 && cablesNotReturned.length === 0) {
    await conn.query(
      "UPDATE `loans` SET `date_of_return` = NOW() WHERE `UUID` = (?)",
      [loanId]
    );

    return true;
  }

  return false;
}

async function returnCable(conn, cable) {
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
