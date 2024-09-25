SELECT
  `sop`.`zones`.`UUID` AS `UUID`,
  `sop`.`zones`.`name` AS `Navn`,
  `b`.`name` AS `Bygning`,
  `sop`.`zones`.`floor_level` AS `Etage`
FROM
  (
    `sop`.`zones`
    LEFT JOIN `sop`.`buildings` `b` ON(`sop`.`zones`.`building_id` = `b`.`UUID`)
  )