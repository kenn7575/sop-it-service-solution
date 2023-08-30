<?php

include "headers.php";

if ($header != $env['AUTH']) die("Unauthorized");

try {
$conn = new mysqli("127.0.0.1", $env['ADMIN_USERNAME'], $env['ADMIN_PASSWORD'], "sop", '3306');
} catch (Exception $e) {
    die(json_encode([['error'=>$e->getMessage()]], JSON_PRETTY_PRINT));
}

if ($conn->connect_error) {
  die(json_encode([['message'=>$conn->connect_error]], JSON_PRETTY_PRINT));
}
