SELECT
  `i`.`UUID` AS `UUID`,
  `il`.`date_created` AS `Oprettet`,
  `p`.`name` AS `Produkt`,
  `il`.`withBag` AS `Med_taske`,
  `il`.`withLock` AS `Med_Laas`,
  concat(
    `p`.`product_id_prefix`,
    lpad(`i`.`barcode_number`, 4, '0')
  ) AS `Stregkode`,
  `il`.`loan_id` AS `loan_id`,
  `il`.`date_returned` AS `Returneret`
FROM
  (
    (
      `sop`.`items_in_loan` `il`
      JOIN `sop`.`items` `i` ON(`il`.`item_id` = `i`.`UUID`)
    )
    JOIN `sop`.`products` `p` ON(`p`.`UUID` = `i`.`product_id`)
  )