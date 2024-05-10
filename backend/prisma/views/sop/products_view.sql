SELECT
  `p`.`UUID` AS `UUID`,
  `p`.`name` AS `Navn`,
  `c`.`name` AS `Kategori`,
  `b`.`name` AS `Brand`,
  `p`.`date_created` AS `Oprettet`,
  `p`.`date_updated` AS `Opdateret`,
  `p`.`image_name` AS `image_name`
FROM
  (
    (
      `sop`.`products` `p`
      LEFT JOIN `sop`.`brands` `b` ON(`p`.`brand_id` = `b`.`UUID`)
    )
    LEFT JOIN `sop`.`categories` `c` ON(`p`.`category_id` = `c`.`UUID`)
  )