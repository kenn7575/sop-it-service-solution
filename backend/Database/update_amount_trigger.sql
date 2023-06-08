DELIMITER $$
CREATE TRIGGER update_product_amount
AFTER INSERT ON items
FOR EACH ROW
BEGIN
    UPDATE products
    SET amount = (
        SELECT COUNT(product_id)
        FROM items
        WHERE product_id = NEW.product_id
    )
    WHERE UUID = NEW.product_id;
END$$
DELIMITER ;
