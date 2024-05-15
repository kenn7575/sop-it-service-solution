SELECT
  `c`.`UUID` AS `UUID`,
  `c`.`name` AS `Kategori navn`,
  `cg`.`name` AS `Kategorigruppe navn`
FROM
  (
    `sop`.`categories` `c`
    LEFT JOIN `sop`.`category_groups` `cg` ON(`c`.`category_group_id` = `cg`.`UUID`)
  )