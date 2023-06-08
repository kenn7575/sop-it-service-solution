DROP USER IF EXISTS 'user'@localhost, 'guest'@localhost, 'admin'@localhost;
CREATE USER 'guest'@localhost IDENTIFIED BY '';
CREATE USER 'user'@localhost IDENTIFIED BY 'user';
CREATE USER 'admin'@localhost IDENTIFIED BY 'admin';

USE `sop`;
GRANT SELECT ON `items` TO 'guest'@localhost;
GRANT SELECT (UUID) ON `products` TO 'guest'@localhost;
GRANT SELECT ON `educations` TO 'guest'@localhost;
GRANT SELECT ON `brands` TO 'guest'@localhost;
GRANT SELECT ON `buildings` TO 'guest'@localhost;
GRANT SELECT ON `zones` TO 'guest'@localhost;
GRANT SELECT ON `categories` TO 'guest'@localhost;
GRANT SELECT ON `category_groups` TO 'guest'@localhost;
GRANT SELECT ON `product_status` TO 'guest'@localhost;
GRANT EXECUTE ON PROCEDURE `column_permissions` TO 'guest'@localhost;

GRANT SELECT ON `items` TO 'user'@localhost;
GRANT SELECT ON `products` TO 'user'@localhost;
GRANT SELECT ON `educations` TO 'user'@localhost;
GRANT SELECT ON `brands` TO 'user'@localhost;
GRANT SELECT ON `buildings` TO 'user'@localhost;
GRANT SELECT ON `zones` TO 'user'@localhost;
GRANT SELECT ON `categories` TO 'user'@localhost;
GRANT SELECT ON `category_groups` TO 'user'@localhost;
GRANT SELECT ON `product_status` TO 'user'@localhost;
GRANT EXECUTE ON PROCEDURE `select_user` TO 'user'@localhost;
GRANT EXECUTE ON PROCEDURE `column_permissions` TO 'user'@localhost;

GRANT ALL PRIVILEGES ON `sop`.* TO 'admin'@localhost;

REVOKE DROP ON *.* FROM 'admin'@localhost;

SHOW GRANTS FOR 'guest'@localhost;
SHOW GRANTS FOR 'user'@localhost;
SHOW GRANTS FOR 'admin'@localhost;