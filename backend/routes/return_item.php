<?php
include "components/admin_db_conn.php";
include "components/functions.php";

$ids = $_GET["ids"] ?? die(json_encode(['message'=>'ids not set', 'status'=>400], JSON_PRETTY_PRINT));

$conn->query("START TRANSACTION;");

foreach ($ids as $id) {
    $conn->query("UPDATE `items` SET `product_status_id` = 1 WHERE `UUID` = '$id'");
}

$conn->query("COMMIT;");

$result = (object) [
    "success" => true,
    "data" => $ids
];

die(json_encode($result, JSON_PRETTY_PRINT));
