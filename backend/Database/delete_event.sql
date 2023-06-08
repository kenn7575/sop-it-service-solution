DELIMITER $$
CREATE EVENT delete_event
    ON SCHEDULE
        EVERY 1 HOUR
        STARTS CURRENT_TIMESTAMP
    DO
        DELETE FROM login_session WHERE expiration_date < NOW() - INTERVAL 1 DAY;
$$
DELIMITER ;