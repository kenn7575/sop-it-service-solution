<?php
include "admin_db_conn.php";

$new_user = json_decode($_POST['new_user']) ?? "";

$password = password_hash($new_user->password, PASSWORD_DEFAULT);

$conn->query("START TRANSACTION;");

$conn->query("INSERT INTO `addresses` VALUES (
    null,
    '$new_user->city',
    '$new_user->zip',
    '$new_user->street1',
    ".
    ($new_user->street2 ? '$new_user->street2' : 'null')
    ."
)");

$address_id = $conn->insert_id;

$conn->query("INSERT INTO `users` VALUES (
    null,
    '$new_user->unilogin',
    '$password',
    '$new_user->firstName $new_user->lastName',
    '$new_user->mail',
    '0',
    NOW(),
    NOW(),
    $address_id,
    '$new_user->education',
    '$new_user->role',
    null
)
");

$result = $conn->query("COMMIT;");

echo json_encode($result, JSON_PRETTY_PRINT);

