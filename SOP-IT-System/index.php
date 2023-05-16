<?php
    $request = $_SERVER['REQUEST_URI'];

    $table = explode('/', $request)[2];

    $conn = new mysqli("127.0.0.1", "root", "", "sop", '3306');

    if ($conn->connect_error) {die("Connection failed: " . $conn->connect_error);}

    $sql = "SELECT * FROM $table";

    $result = $conn->query($sql);

    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Origin: *");
    
    if ($result->num_rows > 0) {
      $list = array();
      while($row = $result->fetch_assoc()) {
        array_push($list, $row);
      }
    } else { echo "{0: results}"; }
    
    echo json_encode($list)
    ?>