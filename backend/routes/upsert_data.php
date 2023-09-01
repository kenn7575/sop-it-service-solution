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

$conn->query("COMMIT;");

res(200, "Data upserted", $id);

} catch (error $e) {
    $conn->query("ROLLBACK;");
    res(500, "Error upserting data");
}
