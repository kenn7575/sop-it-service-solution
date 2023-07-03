<?php
include "components/admin_db_conn.php";
include "components/functions.php";

try {
$data = (object) $_POST["data"];
$table = $_POST["table"];

$conn->query("START TRANSACTION;");

upsert($table, $data, $conn);

$rows_affected = $conn->affected_rows;
$id = $conn->insert_id;

$result = (object) [
    "success" => $rows_affected > 0,
    "id" => $id,
    "data" => $data
];

$conn->query("COMMIT;");

echo json_encode($result, JSON_PRETTY_PRINT);

} catch (error $e) {
    writeToLog($e->getMessage());
    $conn->query("ROLLBACK;");
    die(json_encode(false));
}
