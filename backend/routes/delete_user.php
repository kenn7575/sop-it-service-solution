<?php
include "components/admin_db_conn.php";

try {
$UUID = $_POST['UUID'];
$address_id = $_POST['address_id'];

$conn->query("START TRANSACTION;");

$conn->query("DELETE FROM `users` WHERE `UUID` = '$UUID'");

if (isset($address_id)) {
  $conn->query("DELETE FROM `addresses` WHERE `UUID` = '$address_id'");
}

$conn->query("COMMIT;");

echo json_encode(true);
}
catch (error $e) { echo json_encode(false); } 