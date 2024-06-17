SELECT
  `sop`.`cables`.`UUID` AS `UUID`,
  `sop`.`cables`.`date_created` AS `Oprettet`,
  `sop`.`cables`.`date_updated` AS `Opdateret`,
  `sop`.`cables`.`name` AS `Navn`,
  `sop`.`cables`.`amount_total` AS `Total`,
  `sop`.`cables`.`amount_total` - `sop`.`cables`.`amount_lent` AS `Tilgaengelige`,
  `cc`.`name` AS `Kategori Navn`
FROM
  (
    `sop`.`cables`
    LEFT JOIN `sop`.`cable_categories` `cc` ON(`sop`.`cables`.`category_id` = `cc`.`UUID`)
  )