SELECT
  `i`.`UUID` AS `UUID`,
  `p`.`name` AS `Navn`,
  `b`.`name` AS `Brand`,
  concat(
    `p`.`product_id_prefix`,
    lpad(`i`.`barcode_number`, 4, '0')
  ) AS `Stregkode`
FROM
  (
    (
      (
        `sop`.`items` `i`
        LEFT JOIN `sop`.`products` `p` ON(`i`.`product_id` = `p`.`UUID`)
      )
      LEFT JOIN `sop`.`categories` `c` ON(`p`.`category_id` = `c`.`UUID`)
    )
    LEFT JOIN `sop`.`brands` `b` ON(`p`.`brand_id` = `b`.`UUID`)
  )
WHERE
  !(
    `i`.`UUID` IN (
      SELECT
        `il`.`item_id`
      FROM
        `sop`.`items_in_loan` `il`
      WHERE
        `il`.`date_returned` IS NULL
    )
  )
  AND `i`.`product_status_id` IS NULL