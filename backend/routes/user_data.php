<?php
include "components/admin_db_conn.php";

$UUID_query = "";
$table = $_GET['table'] ?? "users";

if (isset($_GET['UUID'])) $UUID_query = "WHERE `UUID` = $_GET[UUID]";

$column = $conn->query("SELECT * FROM `$table` $UUID_query")->fetch_object();

foreach ($column as $key => $value) {
  if (substr($key, -3) == "_id" && isset($value)) {
    $table_name = substr($key, 0, -3);
    if (substr($table_name, -1) == "s") { $table_name = $table_name . "es"; } else { $table_name = $table_name . "s"; }
    $column->$key = $conn->query("SELECT * FROM `$table_name` WHERE `UUID` = $value")->fetch_object();
  }
}

echo json_encode($column, JSON_PRETTY_PRINT);