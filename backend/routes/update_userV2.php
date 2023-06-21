<?php
include "components/admin_db_conn.php";
try {
$data = (object) $_POST;

$conn->query("START TRANSACTION;");

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

if (isset($update_list)) $update_string = implode(", ", $update_list);

if (isset($insert_keys_list)) $insert_keys_string = implode(", ", $insert_keys_list);
if (isset($insert_values_list)) $insert_values_string = implode(", ", $insert_values_list);

if (isset($address)) {
    $address_line_2 = isset($address->address_line_2) ? "`address_line_2` = '$address->address_line_2'" : "`address_line_2` = NULL";
    $conn->query("INSERT INTO `addresses` ($insert_keys_string) VALUES ($insert_values_string) ON DUPLICATE KEY UPDATE $update_string");
    
    if (isset($address["UUID"])) { $data->address_id = $address["UUID"]; }
    else { $data->address_id = $conn->insert_id; }
}

$update_address = isset($address) ? "`address_id` = '$data->address_id'" : "`address_id` = NULL";
$insert_address = isset($address) ? "'$data->address_id'" : "NULL";
$user_UUID = isset($data->UUID) ? "'$data->UUID'" : "NULL";
$user_img_name = isset($data->img_name) ? "'$data->img_name'" : "NULL";
$user_password = "'" . password_hash($data->password, PASSWORD_DEFAULT) . "'";

$conn->query(
"INSERT INTO `users` (`UUID`, `username`, `password`, `name`, `mail`, `education_id`, `role_id`, `address_id`, `img_name`) VALUES
    (
        $user_UUID,
        '$data->username',
        $user_password,
        '$data->name',
        '$data->mail',
        '$data->education_id',
        '$data->role_id',
        '$data->address_id',
        $user_img_name
    )
ON DUPLICATE KEY UPDATE
    `username` = '$data->username',
    `name` = '$data->name',
    `mail` = '$data->mail',
    `education_id` = '$data->education_id',
    `role_id` = '$data->role_id',
    $update_address
");

 $result = $conn->query("COMMIT;");

 echo json_encode($result, JSON_PRETTY_PRINT);

} catch(PDOException $e) { die("Fejl"); }
