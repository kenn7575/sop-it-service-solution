<?php
include "components/admin_db_conn.php";

$username = $_POST['username'] ?? "";
$password = $_POST['password'] ?? "";

$user = $conn->query("SELECT * FROM `users` WHERE `username` = '$username'")->fetch_object();

include "components/functions.php";
nested_objects($user, $conn);

if ($user == null || !password_verify($password, $user->password)) {
    die(json_encode(['message'=>'Invalid username or password', 'status'=>403], JSON_PRETTY_PRINT));
}

if ($user->role_id->UUID < 5) {
    die(json_encode(['message'=>'Unauthorized', 'status'=>401], JSON_PRETTY_PRINT));
}

$user_hash = password_hash($user->username.$user->UUID, PASSWORD_DEFAULT);

echo json_encode(
    [
        'message'=>$user_hash,
        'status'=>200,
        'user'=>json_encode($user, JSON_PRETTY_PRINT)
    ], JSON_PRETTY_PRINT);

$expiration_date = date('Y-m-d H:i:s', strtotime('+1 day'));

$conn->query("DELETE FROM `login_sessions` WHERE `username` = '$user->username'");
$conn->query("INSERT INTO `login_sessions` VALUES (null, '$user->username', '$user->UUID', '$expiration_date', '$user_hash')");
