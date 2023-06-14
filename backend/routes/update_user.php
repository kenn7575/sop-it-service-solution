<?php

include "headers.php";

if ($header != "test321") die("Unauthorized" . $header);
$conn = new mysqli("127.0.0.1", $env['ADMIN_USERNAME'], $env['ADMIN_PASSWORD'], "sop", '3306');

if ($conn->connect_error) {
  die(json_encode([['message'=>$conn->connect_error]], JSON_PRETTY_PRINT));
}

$user = (object) $_POST;

$conn->query("START TRANSACTION;");

$conn->query("UPDATE `users` SET
    `username` = '$user->unilogin',
    `name` = '$user->name',
    `mail` = '$user->mail',
    `education_id` = '$user->education',
    `role_id` = '$user->role'
    WHERE `UUID` = $user->UUID
");

$conn->query("UPDATE `addresses` SET
    `city` = '$user->city',
    `postal_code` = '$user->zip',
    `address_line_1` = '$user->street1',
    `address_line_2` = ".($user->street2 ? "'$user->street2'" : 'null')."
    WHERE `UUID` = $user->address_id
");

// $result = $conn->query("COMMIT;");

// echo json_encode($result, JSON_PRETTY_PRINT);
