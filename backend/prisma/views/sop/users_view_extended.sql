SELECT
  `u`.`UUID` AS `UUID`,
  `u`.`username` AS `Brugernavn`,
  `u`.`name` AS `Navn`,
  `u`.`mail` AS `Mail`,
  `e`.`name` AS `Uddannelse`,
  `r`.`name` AS `Rolle`
FROM
  (
    (
      `sop`.`users` `u`
      LEFT JOIN `sop`.`educations` `e` ON(`u`.`education_id` = `e`.`UUID`)
    )
    LEFT JOIN `sop`.`roles` `r` ON(`u`.`role_id` = `r`.`UUID`)
  )