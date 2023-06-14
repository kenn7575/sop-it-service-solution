<?php
include "headers.php";

$user = $_GET['user'] ?? "guest";
$password = $_GET['password'] ?? "";

try {
    $conn = new mysqli("127.0.0.1", $user, $password, "sop", '3306');
} catch (Exception $e) {
    die(json_encode([['error'=>$e->getMessage()]], JSON_PRETTY_PRINT));
}

if ($conn->connect_error) {
    die(json_encode([['error'=>$conn->connect_error]], JSON_PRETTY_PRINT));
}

$id = $_GET['id'] ?? "";
$username = $_GET['username'] ?? "";

$result = $conn->query("CALL select_user('$id', '$username')");

$user = $result->fetch_assoc();

echo json_encode($user, JSON_PRETTY_PRINT);
