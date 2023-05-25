<?php
    // $request = $_SERVER['REQUEST_URI'];

    // $table = explode('/', $request)[2];

    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    $header = apache_request_headers()['Authorization'] ?? $_GET['auth'] ?? "";

    $table = $_GET['table'] ?? "items";
    $columns = $_GET['columns'] ?? "*";
    $user = $_GET['user'] ?? "guest";
    $password = $_GET['password'] ?? "";
    $UUID = $_GET['UUID'] ?? "";
    if ($UUID != "") $UUID = "WHERE UUID = '$UUID'";

    if ($header != "test321" && $user != "guest") die("Unauthorized" . $header);

    $conn = new mysqli("127.0.0.1", $user, $password, "sop", '3306');

    if ($conn->connect_error) {die("Connection failed: " . $conn->connect_error);}

    $sql = "SELECT $columns FROM $table $UUID";

    $result = $conn->query($sql);

    $list = array();

    if ($result->num_rows > 0) {
      $list = array();
      while($row = $result->fetch_assoc()) {
        array_push($list, $row);
      }
    } else { echo "{0: results}"; }
    
    if ($list != null) {
      echo json_encode($list, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_NUMERIC_CHECK);
    }
    ?>