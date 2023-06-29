SELECT
  `c`.`UUID` AS `UUID`,
  `c`.`name` AS `Kategori Navn`,
  `cg`.`name` AS `Kategori gruppe navn`
FROM
  (
    `sop`.`categories` `c`
    LEFT JOIN `sop`.`category_groups` `cg` ON(`c`.`category_group_id` = `cg`.`UUID`)
  )