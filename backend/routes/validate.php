<?php
include "components/admin_db_conn.php";
include "components/functions.php";

$token = $_POST['token'] ?? "";

$login_session = null;

// TODO: Make unique token for each machine, instead of each user

$conn->query("DELETE FROM `login_sessions` WHERE `expiration_date` < NOW() AND `UUID` > 0");
$result = $conn->query("SELECT * FROM login_sessions");

while($row = $result->fetch_assoc())
{
    if (password_verify($row['username'].$row['user_UUID'], $token)) {
        $login_session = $row;
    }
}

if ($login_session == null) {
    res(401, "Invalid Token");
}

$user = $conn->query("SELECT * FROM users WHERE username = '$login_session[username]'")->fetch_object();

if ($user->role_id < 5) {
    res(403, "Forbidden");
}

$conn->query("UPDATE login_sessions SET expiration_date = DATE_ADD(NOW(), INTERVAL 1 DAY) WHERE token = '$token'");

res(200, "Session fundet", $user);