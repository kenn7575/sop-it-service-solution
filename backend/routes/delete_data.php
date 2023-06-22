<?php
include "components/admin_db_conn.php";

try {
$UUID = $_POST['UUID'];
$table = $_POST['table'];

$conn->query("START TRANSACTION;");

$conn->query("DELETE FROM `$table` WHERE `UUID` = '$UUID'");

$conn->query("COMMIT;");

echo json_encode(true);
}
catch (error $e) { echo json_encode(false); }