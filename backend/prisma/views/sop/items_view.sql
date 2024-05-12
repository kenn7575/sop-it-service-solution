SELECT
  `i`.`UUID` AS `UUID`,
  `p`.`name` AS `Navn`,
  concat(
    `p`.`product_id_prefix`,
    lpad(`i`.`barcode_number`, 4, '0')
  ) AS `Barcode`,
  `ps`.`name` AS `Status`,
  `sl`.`zone_id` AS `Zone id`,
  `i`.`date_created` AS `Oprettet`,
  `i`.`date_updated` AS `Opdateret`
FROM
  (
    (
      (
        `sop`.`items` `i`
        LEFT JOIN `sop`.`products` `p` ON(`i`.`product_id` = `p`.`UUID`)
      )
      LEFT JOIN `sop`.`product_status` `ps` ON(`i`.`product_status_id` = `ps`.`UUID`)
    )
    LEFT JOIN `sop`.`storage_locations` `sl` ON(`i`.`storage_location_id` = `sl`.`UUID`)
  )