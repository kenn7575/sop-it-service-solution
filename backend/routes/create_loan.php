<?php
include "components/admin_db_conn.php";
include "components/functions.php";

$loan = (object) $_POST["loan"];
$items = (array) $_POST["products"];

try {
    $conn->query("START TRANSACTION;");

    upsert("loans", $loan, $conn);

    $loan_id = $conn->insert_id;

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

    $result = (object) [
        "success" => true,
        "id" => $loan_id,
        "data" => $conn->query("SELECT * FROM `loans` WHERE `UUID` = $loan_id")->fetch_object()
    ];

    $conn->query("COMMIT;");

} catch (error $e) {
    $result =(object) [
        "success" => false,
        "id" => null,
        "data" => "Fejl i oprettelse af lån"
    ];
}

die(json_encode($result, JSON_PRETTY_PRINT));
