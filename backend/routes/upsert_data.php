<?php
include "components/admin_db_conn.php";
include "components/functions.php";

try {
$data = (object) $_POST["data"];
$table = $_POST["table"];

$conn->query("START TRANSACTION;");

upsert($table, $data, $conn);

$result = $conn->query("COMMIT;");

echo json_encode($result, JSON_PRETTY_PRINT);

} catch (error $e) {
    writeToLog($e->getMessage());
    die(json_encode(false));
}
