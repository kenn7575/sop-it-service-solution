<?php
include "components/admin_db_conn.php";
include "components/functions.php";

$UUID_query = "";
$table = $_GET['table'] ?? "users";

if (isset($_GET['UUID'])) $UUID_query = "WHERE `UUID` = $_GET[UUID]";

$column = $conn->query("SELECT * FROM `$table` $UUID_query");

if ($column->num_rows > 1) {
    $columns = array();
    while($row = $column->fetch_assoc()) {
        nested_objects($row, $conn);
        array_push($columns, $row);
    }
} else {
    $columns = $column->fetch_object();
    nested_objects($columns, $conn);
}

echo json_encode($columns, JSON_PRETTY_PRINT);