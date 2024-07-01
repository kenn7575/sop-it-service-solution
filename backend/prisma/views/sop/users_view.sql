SELECT
  `u`.`UUID` AS `UUID`,
  '' AS `Navn`,
  `u`.`username` AS `Brugernavn`,
  `u`.`date_created` AS `Oprettet`,
  `u`.`date_updated` AS `Opdateret`
FROM
  `sop`.`users` `u`