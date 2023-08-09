<?php
include "components/admin_db_conn.php";
include "components/functions.php";

$ids = json_decode($_GET["ids"] ?? die(json_encode(['message'=>'ids not set', 'status'=>400], JSON_PRETTY_PRINT)));

$conn->query("START TRANSACTION;");

foreach ($ids as $id) {
    $conn->query("UPDATE `items` SET `product_status_id` = 1 WHERE `UUID` = '$id'");
}

$conn->query("COMMIT;");

die(json_encode($ids, JSON_PRETTY_PRINT));