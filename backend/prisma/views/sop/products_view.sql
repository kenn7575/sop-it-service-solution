SELECT
  `sop`.`products`.`UUID` AS `UUID`,
  `sop`.`products`.`name` AS `Navn`,
  `sop`.`products`.`date_created` AS `Dato oprettet`,
  `sop`.`products`.`date_updated` AS `Dato opdateret`,
  `sop`.`products`.`image_name` AS `image name`
FROM
  `sop`.`products`