SELECT
  `l`.`UUID` AS `UUID`,
  `l`.`location_of_use_id` AS `location_of_use_id`,
  `l`.`selfservice_case_id` AS `selfservice_case_id`,
  `l`.`loan_length` AS `loan_length`,
  `sl`.`zone_id` AS `zone_id`,
  `sl`.`kabinet` AS `kabinet`,
  `sl`.`shelf` AS `shelf`,
  `u`.`UUID` AS `loaner_id`,
  `u`.`username` AS `loaner_username`,
  `hd`.`UUID` AS `personel_id`,
  `hd`.`username` AS `personel_username`,
  `rt`.`UUID` AS `recipient_type_id`,
  `rt`.`name` AS `recipient_name`
FROM
  (
    (
      (
        (
          `sop`.`loans` `l`
          LEFT JOIN `sop`.`storage_locations` `sl` ON(`sl`.`UUID` = `l`.`location_of_use_id`)
        )
        LEFT JOIN `sop`.`users` `u` ON(`u`.`UUID` = `l`.`user_id`)
      )
      LEFT JOIN `sop`.`users` `hd` ON(`hd`.`UUID` = `l`.`helpdesk_personel_id`)
    )
    LEFT JOIN `sop`.`recipient_type` `rt` ON(`rt`.`UUID` = `l`.`recipient_type_id`)
  )