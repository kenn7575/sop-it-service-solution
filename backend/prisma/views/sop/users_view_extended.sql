SELECT
  `u`.`UUID` AS `UUID`,
  `u`.`username` AS `Brugernavn`,
  `u`.`name` AS `Navn`,
  `u`.`mail` AS `Mail`,
  `e`.`name` AS `Uddannelse`,
  `a`.`city` AS `By`,
  `a`.`postal_code` AS `Postnummer`,
  `a`.`address_line_1` AS `Primaer adresse`,
  `a`.`address_line_2` AS `Sekundaer adresse`,
  `r`.`name` AS `Rolle`
FROM
  (
    (
      (
        `sop`.`users` `u`
        LEFT JOIN `sop`.`educations` `e` ON(`u`.`education_id` = `e`.`UUID`)
      )
      LEFT JOIN `sop`.`addresses` `a` ON(`u`.`address_id` = `a`.`UUID`)
    )
    LEFT JOIN `sop`.`roles` `r` ON(`u`.`role_id` = `r`.`UUID`)
  )