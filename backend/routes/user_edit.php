<?php
include "admin_db_conn.php";

$user = $conn->query("SELECT * FROM `users` WHERE `UUID` = $_POST[UUID]")->fetch_object();

if (isset($user->address_id)) {
  $user->address_id = $conn->query("SELECT * FROM `addresses` WHERE `UUID` = $user->address_id")->fetch_object();
}

$user->education_id = $conn->query("SELECT * FROM `educations` WHERE `UUID` = $user->education_id")->fetch_object();
$user->role_id = $conn->query("SELECT * FROM `roles` WHERE `UUID` = $user->role_id")->fetch_object();
$auth_lvl_id = $user->role_id->authorization_level_id;
$user->role_id->authorization_level_id = $conn->query("SELECT * FROM `authorization_level` WHERE `UUID` = $auth_lvl_id")->fetch_object();

echo json_encode($user, JSON_PRETTY_PRINT);