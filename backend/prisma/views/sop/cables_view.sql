SELECT
  `p`.`UUID` AS `ProductUUID`,
  `p`.`name` AS `Name`
FROM
  (
    (
      `sop`.`products` `p`
      LEFT JOIN `sop`.`categories` `c` ON(`p`.`category_id` = `c`.`UUID`)
    )
    LEFT JOIN `sop`.`category_groups` `cg` ON(`cg`.`UUID` = `c`.`category_group_id`)
  )
WHERE
  `cg`.`UUID` = 12