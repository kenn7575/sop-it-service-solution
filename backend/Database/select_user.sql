CREATE DEFINER=`root`@`localhost` PROCEDURE `select_user`(user_id INT, user_password VARCHAR(255))
BEGIN
	-- u.UUID, u.username, u.name, e.UUID, e.name
	SELECT * FROM users u
    LEFT JOIN educations e ON u.education_id = e.UUID
    LEFT JOIN addresses a ON u.address_id = a.UUID
    LEFT JOIN roles r on u.role_id = r.UUID
     WHERE u.UUID = user_id AND u.username = user_password;
END