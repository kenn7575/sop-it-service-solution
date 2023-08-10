<?php
include "components/admin_db_conn.php";
include "components/functions.php";

$id = $_GET["id"] ?? die(json_encode(['message'=>'id not set', 'status'=>400], JSON_PRETTY_PRINT));

$conn->query("START TRANSACTION;");

$items = $conn->query("SELECT i.*
FROM items_in_loan il
JOIN items i ON il.item_id = i.UUID
WHERE il.loan_id = '$id' AND i.product_status_id = 4");

foreach ($items as $item) {
    $conn->query("UPDATE `items` SET `product_status_id` = 1 WHERE `UUID` = '$item[UUID]'");
}

$conn->query("COMMIT;");

$result = (object) [
    "success" => true,
    "id" => $id,
    "data" => $items
];

die(json_encode($result, JSON_PRETTY_PRINT));

