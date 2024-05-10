SELECT
  `i`.`UUID` AS `UUID`,
  `p`.`name` AS `Navn`,
  `b`.`name` AS `Brand`,
  `ps`.`status_name` AS `Status`,
  `i`.`storage_location_id` AS `storage_location_id`
FROM
  (
    (
      (
        `sop`.`items` `i`
        LEFT JOIN `sop`.`products` `p` ON(`i`.`product_id` = `p`.`UUID`)
      )
      LEFT JOIN `sop`.`brands` `b` ON(`p`.`brand_id` = `b`.`UUID`)
    )
    LEFT JOIN `sop`.`product_status` `ps` ON(`i`.`product_status_id` = `ps`.`UUID`)
  )
WHERE
  `i`.`product_status_id` = 1