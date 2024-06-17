SELECT
  `r`.`UUID` AS `UUID`,
  `r`.`name` AS `name`,
  `al`.`level` AS `level`,
  `al`.`name` AS `al_name`
FROM
  (
    `sop`.`roles` `r`
    LEFT JOIN `sop`.`authorization_levels` `al` ON(`r`.`authorization_level_id` = `al`.`UUID`)
  )