<?php
include "components/admin_db_conn.php";
include "components/functions.php";

$user_id = $_POST["UUID"];

$conn->query("START TRANSACTION;");

$loans = $conn->query("SELECT * FROM `loans` WHERE `user_id` = '$user_id'")->fetch_all(MYSQLI_ASSOC);

foreach ($loans as $loan) {
    $items_in_loan_array = $conn->query("SELECT * FROM `items_in_loan` WHERE `loan_id` = '$loan[UUID]'")->fetch_all(MYSQLI_ASSOC);
    foreach ($items_in_loan_array as $object) { $items_in_loan[] = $object; }
}

foreach ($items_in_loan as $item_in_loan) {
    $items[] = $conn->query("SELECT * FROM `items` WHERE `UUID` = '$item_in_loan[item_id]'")->fetch_all(MYSQLI_ASSOC);
}

echo json_encode($loans, JSON_PRETTY_PRINT);

echo json_encode($items_in_loan, JSON_PRETTY_PRINT);

die(json_encode($items, JSON_PRETTY_PRINT));

