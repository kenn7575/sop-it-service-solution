SELECT
  `i`.`UUID` AS `UUID`,
  `p`.`name` AS `Navn`,
  concat(
    `p`.`product_id_prefix`,
    lpad(`i`.`barcode_number`, 4, '0')
  ) AS `Stregkode`,
  `ps`.`name` AS `Status`,
  `i`.`date_created` AS `Oprettet`,
  `i`.`date_updated` AS `Opdateret`
FROM
  (
    (
      `sop`.`items` `i`
      LEFT JOIN `sop`.`products` `p` ON(`i`.`product_id` = `p`.`UUID`)
    )
    JOIN `sop`.`product_status` `ps` ON(`i`.`product_status_id` = `ps`.`UUID`)
  )