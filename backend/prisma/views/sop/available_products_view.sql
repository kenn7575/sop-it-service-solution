SELECT
  `i`.`UUID` AS `UUID`,
  `p`.`name` AS `Navn`,
  `b`.`name` AS `Brand`
FROM
  (
    (
      `sop`.`items` `i`
      LEFT JOIN `sop`.`products` `p` ON(`i`.`product_id` = `p`.`UUID`)
    )
    LEFT JOIN `sop`.`brands` `b` ON(`p`.`brand_id` = `b`.`UUID`)
  )
WHERE
  `i`.`product_status_id` = 1