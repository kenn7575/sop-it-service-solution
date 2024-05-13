SELECT
  `l`.`UUID` AS `UUID`,
  `l`.`date_created` AS `Oprettet`,
  `l`.`date_updated` AS `Opdateret`,
  `l`.`date_of_return` AS `Returneret`,
  `z`.`name` AS `Zone`,
  `loaner`.`name` AS `Bruger`,
  `personel`.`name` AS `Personale`,
  `rt`.`NAME` AS `Recipent`,
  `l`.`loan_length` AS `Laanetid (dage)`,
  `l`.`date_created` + INTERVAL `l`.`loan_length` DAY AS `Returneringsdato`
FROM
  (
    (
      (
        (
          `sop`.`loans` `l`
          LEFT JOIN `sop`.`zones` `z` ON(`z`.`UUID` = `l`.`location_of_use_id`)
        )
        LEFT JOIN `sop`.`users` `loaner` ON(`loaner`.`UUID` = `l`.`user_id`)
      )
      LEFT JOIN `sop`.`users` `personel` ON(`personel`.`UUID` = `l`.`helpdesk_personel_id`)
    )
    LEFT JOIN `sop`.`recipient_type` `rt` ON(`rt`.`UUID` = `l`.`recipient_type_id`)
  )