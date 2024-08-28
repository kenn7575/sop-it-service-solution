SELECT
  `p`.`UUID` AS `UUID`,
  `p`.`name` AS `Navn`,
  `cg`.`name` AS `Kategori Gruppe`,
  `c`.`name` AS `Kategori`,
  `b`.`name` AS `Brand`,
  `p`.`date_created` AS `Oprettet`,
  `p`.`date_updated` AS `Opdateret`
FROM
  (
    (
      (
        `sop`.`products` `p`
        LEFT JOIN `sop`.`brands` `b` ON(`p`.`brand_id` = `b`.`UUID`)
      )
      LEFT JOIN `sop`.`categories` `c` ON(`p`.`category_id` = `c`.`UUID`)
    )
    LEFT JOIN `sop`.`category_groups` `cg` ON(`c`.`category_group_id` = `cg`.`UUID`)
  )