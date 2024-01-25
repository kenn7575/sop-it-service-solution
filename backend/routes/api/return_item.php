<?php
include "../components/admin_db_conn.php";
include "../components/functions.php";

$ids = $_GET["ids"] ?? res(400, "No ids specified");

$conn->query("START TRANSACTION;");

foreach ($ids as $id) {
    $conn->query("UPDATE `items` SET `product_status_id` = 1 WHERE `UUID` = '$id'");
}

$conn->query("COMMIT;");

res(200, "Items returned", $ids);
