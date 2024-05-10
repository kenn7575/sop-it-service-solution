SELECT
  `i`.`UUID` AS `UUID`,
  `il`.`date_created` AS `Oprettet`,
  `ps`.`status_name` AS `Produkt status`,
  `p`.`name` AS `Produkt navn`,
  `il`.`loan_id` AS `loan_id`,
  `il`.`date_returned` AS `Returneret`
FROM
  (
    (
      (
        `sop`.`items_in_loan` `il`
        JOIN `sop`.`items` `i` ON(`il`.`item_id` = `i`.`UUID`)
      )
      JOIN `sop`.`product_status` `ps` ON(`ps`.`UUID` = `i`.`product_status_id`)
    )
    JOIN `sop`.`products` `p` ON(`p`.`UUID` = `i`.`product_id`)
  )