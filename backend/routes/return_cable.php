<?php
include "components/admin_db_conn.php";

$cables = $_GET["cables"] ?? die(json_encode(['message'=>'cables not set', 'status'=>400], JSON_PRETTY_PRINT));

$conn->query("START TRANSACTION;");

foreach ($cables as $cable) {
    $conn->query(
        "UPDATE `cables_in_loan`
        SET `amount_returned` = '$cable[amount]'
        WHERE `cable_id` = '$cable[UUID]'");
}

$conn->query("COMMIT;");

$result = (object) [
    "success" => true,
    "data" => $cable['UUID']
];

die(json_encode($result, JSON_PRETTY_PRINT));