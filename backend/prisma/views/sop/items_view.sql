SELECT
  `i`.`UUID` AS `UUID`,
  `p`.`name` AS `Navn`,
  `ps`.`status_name` AS `Status`,
  `sl`.`zone_id` AS `Zone id`,
  `i`.`date_created` AS `Dato oprettet`,
  `i`.`date_updated` AS `Dato opdateret`
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