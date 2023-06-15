SELECT
  `c`.`UUID` AS `Kategori UUID`,
  `c`.`name` AS `Kategori Navn`,
  `c`.`category_group_id` AS `Kategori gruppe id`,
  `cg`.`name` AS `Kategori gruppe navn`
FROM
  (
    `sop`.`categories` `c`
    LEFT JOIN `sop`.`category_groups` `cg` ON(`c`.`category_group_id` = `cg`.`UUID`)
  )