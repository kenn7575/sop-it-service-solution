<?php
include "admin_db_conn.php";

$data = (object) $_POST;

// $conn->query("START TRANSACTION;");

$data->education_id = json_decode($data->education_id)->UUID;
$data->role_id = json_decode($data->role_id)->UUID;

echo json_encode($data, JSON_PRETTY_PRINT);

// $conn->query(
// "UPDATE `users` SET
// `username` = '$user->username',
// `name` = '$user->name',
// `mail` = '$user->mail',
// `education_id` = '$user->education_id',
// `role_id` = '$user->role_id'
// WHERE `UUID` = $user->UUID
// ");

//  $result = $conn->query("COMMIT;");

//  echo json_encode($result, JSON_PRETTY_PRINT);
