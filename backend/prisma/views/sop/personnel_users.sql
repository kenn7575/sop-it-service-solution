SELECT
  `u`.`UUID` AS `UUID`,
  `u`.`username` AS `username`,
  `u`.`password` AS `password`,
  `u`.`name` AS `name`,
  `u`.`mail` AS `mail`,
  `u`.`is_ad_user` AS `is_ad_user`,
  `u`.`date_created` AS `date_created`,
  `u`.`date_updated` AS `date_updated`,
  `u`.`education_id` AS `education_id`,
  `u`.`role_id` AS `role_id`,
  `u`.`img_name` AS `img_name`
FROM
  `sop`.`users` `u`
WHERE
  `u`.`role_id` >= 5