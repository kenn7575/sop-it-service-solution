<?php
include "components/headers.php";

$table = $_GET['table'] ?? "items";
$user = $_GET['user'] ?? "guest";
$password = $_GET['password'] ?? "";
$UUID = $_GET['UUID'] ?? "";
if ($UUID != "") $UUID = "WHERE UUID = '$UUID'";

if ($header != "test321" && $user != "guest") die("Unauthorized" . $header);

try {
$conn = new mysqli("127.0.0.1", $user, $password, "sop", '3306');
} catch (Exception $e) {
  die(json_encode([['error'=>$e->getMessage()]], JSON_PRETTY_PRINT));
}

if ($conn->connect_error) {
  die(json_encode([['error'=>$conn->connect_error]], JSON_PRETTY_PRINT));
}

$column_names_sql = "SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_NAME = '$table'
AND TABLE_SCHEMA = 'sop'
";

$result = $conn->query($column_names_sql);
$all_columns = array();

if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {    array_push($all_columns, $row["COLUMN_NAME"]);     } 
}


$all_columns = "`".implode("`, `", $all_columns)."`";

$columns = $_GET['columns'] ?? $all_columns;

$sql = "SELECT $columns FROM $table $UUID";

try {
$result = $conn->query($sql);
} catch (Exception $e) {
  echo json_encode([['error'=>$e->getMessage()]], JSON_PRETTY_PRINT); die();
}

$list = array();

if ($result->num_rows > 0) {
  $list = array();
  while($row = $result->fetch_assoc()) {
    array_push($list, $row);
  }
} else { array_push($list, ['no results'=>'0']); }
    
if ($list != null) {
  echo json_encode($list, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_NUMERIC_CHECK);
}
    