<?php
include "components/admin_db_conn.php";

$cables = $_GET["cables"] ?? res(400, "No cables specified");

$conn->query("START TRANSACTION;");

foreach ($cables as $cable) {
    $conn->query(
        "UPDATE `cables_in_loan`
        SET `amount_returned` = '$cable[amount]'
        WHERE `cable_id` = '$cable[UUID]'");
}

$conn->query("COMMIT;");

res(200, "Cable returned", $cable['UUID']);