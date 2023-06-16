SELECT
  `sop`.`loans`.`UUID` AS `UUID`,
  `sop`.`loans`.`date_created` AS `Dato oprettet`,
  `sop`.`loans`.`date_updated` AS `Date opdateret`,
  `sop`.`loans`.`date_of_return` AS `Dato retuneret`,
  `sop`.`loans`.`location_of_use_id` AS `Brugslokation id`,
  `sop`.`loans`.`user_id` AS `Bruger ID`,
  `sop`.`loans`.`helpdesk_personel_id` AS `Helpdesk personale id`,
  `sop`.`loans`.`selfservice_case_id` AS `Selfservice case id`,
  `sop`.`loans`.`recipient_type_id` AS `Recipent type id`,
  `sop`.`loans`.`loan_length` AS `Laanetid (dage)`
FROM
  `sop`.`loans`