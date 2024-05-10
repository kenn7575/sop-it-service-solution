SELECT
  `sop`.`cables`.`UUID` AS `UUID`,
  `sop`.`cables`.`date_created` AS `Oprettet`,
  `sop`.`cables`.`date_updated` AS `Opdateret`,
  `sop`.`cables`.`name` AS `Navn`,
  `sop`.`cables`.`amount_total` AS `Total`,
  `sop`.`cables`.`amount_total` - `sop`.`cables`.`amount_lent` AS `Tilgaengelige`,
  `cg`.`name` AS `Kategori`
FROM
  (
    `sop`.`cables`
    LEFT JOIN `sop`.`categories` `cg` ON(`sop`.`cables`.`category_id` = `cg`.`UUID`)
  )