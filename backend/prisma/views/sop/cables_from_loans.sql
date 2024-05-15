SELECT
  `l`.`UUID` AS `loan_id`,
  `c`.`UUID` AS `UUID`,
  `c`.`date_created` AS `Oprettet`,
  `c`.`name` AS `Kabel navn`,
  `cil`.`date_returned` AS `Returneret`,
  `cil`.`amount_lent` AS `Maengde laant`,
  `cil`.`amount_returned` AS `Maengde returneret`
FROM
  (
    (
      `sop`.`cables_in_loan` `cil`
      JOIN `sop`.`loans` `l` ON(`cil`.`loan_id` = `l`.`UUID`)
    )
    JOIN `sop`.`cables` `c` ON(`cil`.`cable_id` = `c`.`UUID`)
  )