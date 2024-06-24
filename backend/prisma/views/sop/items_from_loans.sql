SELECT
  `i`.`UUID` AS `UUID`,
  `il`.`date_created` AS `Oprettet`,
  `ps`.`name` AS `Produkt status`,
  `p`.`name` AS `Produkt navn`,
  `il`.`withBag` AS `Med_taske`,
  `il`.`withLock` AS `Med_Laas`,
  concat(
    `p`.`product_id_prefix`,
    lpad(`i`.`barcode_number`, 4, '0')
  ) AS `Barcode`,
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