<?php
include "headers.php";

$username = $_POST['username'] ?? "";
$password = $_POST['password'] ?? "";

$conn = new mysqli("127.0.0.1", $env['ADMIN_USERNAME'], $env['ADMIN_PASSWORD'], "sop", '3306');

if ($conn->connect_error) {
  die(json_encode([['message'=>$conn->connect_error]], JSON_PRETTY_PRINT));
}

$result = $conn->query("SELECT * FROM users WHERE username = '$username'");

$user = $result->fetch_assoc();

// if ($user == null || !password_verify($password, $user['password'])) {
if ($user == null) {
    die(json_encode(['message'=>'Invalid username or password', 'status'=>403, 'user'=>$_POST], JSON_PRETTY_PRINT));
}

if (!password_verify($password, $user['password'])) {
    die(json_encode(['message'=>'Invalid username or password', 'status'=>403], JSON_PRETTY_PRINT));
}

if ($user['role_id'] < 5) {
    die(json_encode(['message'=>'Unauthorized', 'status'=>401], JSON_PRETTY_PRINT));
}

$user_hash = password_hash($user['username'].$user['UUID'], PASSWORD_DEFAULT);

echo json_encode(
    [
        'message'=>$user_hash,
        'status'=>200,
        'user'=>$user
    ], JSON_PRETTY_PRINT);

$expiration_date = date('Y-m-d H:i:s', strtotime('+1 day'));

$conn->query("DELETE FROM `login_sessions` WHERE `username` = '$user[username]'");
$conn->query("INSERT INTO `login_sessions` VALUES (null, '$user[username]', '$expiration_date', '$user_hash')");

// print_r($_SESSION);
// if (password_verify($user['username'].$user['UUID'], "$2y$10$6528MlopEJjPgdk.LN3m0elzN01F.Pb89xC7kLPDMNJ77YccD8A5.")) {
//     echo "Valid";
// } else {
//     echo "Invalid";
// }
// echo json_encode($user, JSON_PRETTY_PRINT);
