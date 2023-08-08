<?php
include "components/admin_db_conn.php";
include "components/functions.php";

$id = $_GET["id"] ?? null;

if (!isset($id)) die(json_encode(['message'=>'id not set', 'status'=>400], JSON_PRETTY_PRINT));

$conn->query("START TRANSACTION;");

$loan = $conn->query("SELECT * FROM `loans` WHERE `UUID` = '$id'")->fetch_object();

$items_in_loan_array = $conn->query("SELECT * FROM `items_in_loan` WHERE `loan_id` = '$loan->UUID' AND `date_returned` IS NULL")->fetch_all(MYSQLI_ASSOC);

$items_in_loan = [];
foreach ($items_in_loan_array as $item_in_loan) {
    $items_in_loan[] = $item_in_loan;
    $conn->query("UPDATE `items_in_loan` SET `date_returned` = NOW() WHERE `UUID` = '$item_in_loan[UUID]'");
}


foreach ($items_in_loan as $item_in_loan) {
    $conn->query("UPDATE `items` SET `product_status_id` = 1 WHERE `UUID` = '$item_in_loan[item_id]'");
    $items[] = $conn->query("SELECT * FROM `items` WHERE `UUID` = '$item_in_loan[item_id]'")->fetch_all(MYSQLI_ASSOC);
}

$conn->query("COMMIT;");

$result = (object) [
    "success" => true,
    "id" => $id,
    "data" => $loan
];

die(json_encode($result, JSON_PRETTY_PRINT));

