<?php
include "components/admin_db_conn.php";
include "components/functions.php";

$loan = (object) $_POST["loan"];
$items = $_POST["products"] ?? [];
$cables = $_POST["cables"] ?? [];

try {
    $conn->query("START TRANSACTION;");

    upsert("loans", $loan, $conn);

    $loan_id = $conn->insert_id;

    if (count($items) > 0) {

        foreach ($items as $item) {
            $conn->query("UPDATE `items` SET `product_status_id` = '4' WHERE `UUID` = $item[UUID]");
            if (isset($item['storage_location_id'])) {
                $conn->query("DELETE FROM `storage_locations` WHERE `UUID` = $item[storage_location_id]");
                $conn->query("UPDATE `items` SET `storage_location_id` = NULL WHERE `UUID` = $item[UUID]");
            }
            (object) $item_in_loan = new stdClass();
            $item_in_loan->loan_id = $loan_id;
            $item_in_loan->item_id = $item['UUID'];
            upsert("items_in_loan", $item_in_loan, $conn);
        }
    }

    if (count($cables) > 0) {
        foreach ($cables as $cable) {
            $conn->query("INSERT INTO `cables_in_loan` (`loan_id`, `cable_id`, `amount_lent`)
            VALUES ('$loan_id', '$cable[UUID]', '$cable[Lånt]')");
        }
    }
    
    $conn->query("COMMIT;");

    res(200, "Lån oprettet", $loan_id);
} catch (error $e) { res(500, "Fejl i oprettelse af lån", null); }
