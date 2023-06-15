SELECT
  `z`.`UUID` AS `UUID`,
  `z`.`name` AS `Zone`,
  `z`.`floor_level` AS `Etage`,
  `b`.`UUID` AS `Bygning`,
  `b`.`name` AS `Lokale`
FROM
  (
    `sop`.`zones` `z`
    LEFT JOIN `sop`.`buildings` `b` ON(`z`.`building_id` = `b`.`UUID`)
  )