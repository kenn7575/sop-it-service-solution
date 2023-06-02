<?php
include "headers.php";

$header = apache_request_headers()['Authorization'] ?? $_GET['auth'] ?? "";

$conn = new mysqli("127.0.0.1", $env['ADMIN_USERNAME'], $env['ADMIN_PASSWORD'], "sop", '3306');

$token = $_POST['token'] ?? "";

$result = $conn->query("SELECT * FROM login_sessions WHERE token = '$token'");

$user = $result->fetch_assoc();

if ($user == null) {
    die(json_encode(['message'=>'Invalid token', 'status'=>403], JSON_PRETTY_PRINT));
}

$conn->query("UPDATE login_sessions SET expiration_date = DATE_ADD(NOW(), INTERVAL 1 DAY) WHERE token = '$token'");
echo json_encode(['message'=>"Session fundet", 'status'=>200, 'user'=>$user], JSON_PRETTY_PRINT);