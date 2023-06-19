<?php
include "admin_db_conn.php";

$data = (object) $_POST;

// $conn->query("START TRANSACTION;");

$data->education_id = $data->education_id["UUID"];
$data->role_id = $data->role_id["UUID"];
$address = $data->address_id;

if (isset($address)) {
    foreach ($address as $key => $value) {
        if (isset($value)) {
            $update_list[] = "`$key` = '$value'";
            $insert_keys_list[] = "`$key`";
            $insert_values_list[] = "'$value'";
        }
    }
}

$update_string = implode(", ", $update_list);

$insert_keys_string = implode(", ", $insert_keys_list);
$insert_values_string = implode(", ", $insert_values_list);

if (isset($address)) {
    $address_line_2 = isset($address->address_line_2) ? "`address_line_2` = '$address->address_line_2'" : "`address_line_2` = NULL";
    $conn->query("INSERT INTO `addresses` ($insert_keys_string) VALUES ($insert_values_string) ON DUPLICATE KEY UPDATE $update_string");
    
    if (isset($address["UUID"])) { $data->address_id = $address["UUID"]; }
    else { $data->address_id = $conn->insert_id; }
}

$set_address = isset($address) ? "`address_id` = '$data->address_id'" : "`address_id` = NULL";

$conn->query(
"UPDATE `users` SET
    `username` = '$data->username',
    `name` = '$data->name',
    `mail` = '$data->mail',
    `education_id` = '$data->education_id',
    `role_id` = '$data->role_id',
    $set_address
WHERE `UUID` = $data->UUID
");

 $result = $conn->query("COMMIT;");

 echo json_encode($result, JSON_PRETTY_PRINT);
