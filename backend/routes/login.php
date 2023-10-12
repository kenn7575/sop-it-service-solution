<?php
include "components/admin_db_conn.php";
include "components/functions.php";
include "./ldap.php";

$username = $_POST['username'] ?? "";
$password = $_POST['password'] ?? "";

$CurrentLDAPUser = ldap_auth($username, $password) ?? ldap_auth($username, $password, 'ADMINS');

if ($CurrentLDAPUser) {
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
    $conn->query("INSERT INTO `users` (`username`, `password`, `name`, `is_ad_user`, `mail`, `role_id`)
    VALUES ('$username', '$hashed_password', '$CurrentLDAPUser[name]', '1', '$CurrentLDAPUser[mail]', '$CurrentLDAPUser[role_id]')
    ON DUPLICATE KEY UPDATE `password` = '$hashed_password', `role_id` = '$CurrentLDAPUser[role_id]'");
}

$user = $conn->query("SELECT * FROM `users` WHERE `username` = '$username'")->fetch_object();

if ($user == null || !password_verify($password, $user->password)) res(401, 'Invalid username or password');
if ($user->role_id < 5) res(403, 'Forbidden');

$user_hash = password_hash($user->username.$user->UUID, PASSWORD_DEFAULT);

$expiration_date = date('Y-m-d H:i:s', strtotime('+1 day'));

$conn->query("DELETE FROM `login_sessions` WHERE `username` = '$user->username'");
$conn->query("INSERT INTO `login_sessions` VALUES (null, '$user->username', '$user->UUID', '$expiration_date', '$user_hash')");

res(200, $user_hash, $user);