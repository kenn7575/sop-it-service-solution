<?php
include "components/admin_db_conn.php";

$user = (object) $_POST;

$updates_keys_list = [];
$updates_values_list = [];

if (isset($user->city)) {
  $updates_keys_list[] = "`city`";
  $updates_values_list[] = "'$user->city'";
}

if (isset($user->postal_code)) {
  $updates_keys_list[] = "`postal_code`";
  $updates_values_list[] = "'$user->postal_code'";
}

if (isset($user->address_line_1)) {
  $updates_keys_list[] = "`address_line_1`";
  $updates_values_list[] = "'$user->address_line_1'";
}

if (isset($user->address_line_2)) {
  $updates_keys_list[] = "`address_line_2`";
  $updates_values_list[] = "'$user->address_line_2'";
}

$updates_keys = implode(", ", $updates_keys_list);
$updates_values = implode(", ", $updates_values_list);

// echo $updates_keys . "\n" . $updates_values . "\n";

$conn->query("START TRANSACTION;");

$conn->query(
"UPDATE `users` SET
`username` = '$user->username',
`name` = '$user->name',
`mail` = '$user->mail',
`education_id` = '$user->education_id',
`role_id` = '$user->role_id'
WHERE `UUID` = $user->UUID
");

if (!isset($user->address_id)) {
  $conn->query(
  "INSERT INTO `addresses` ($updates_keys) VALUES ($updates_values)");

  $user->address_id = $conn->insert_id;

  $conn->query("UPDATE `users` SET `address_id` = '$user->address_id' WHERE `UUID` = $user->UUID");

} else if (isset($user->address_id)) {

$conn->query("UPDATE `addresses` SET 
  `city` = '$user->city',
  `postal_code` = '$user->postal_code',
  `address_line_1` = '$user->address_line_1',
  `address_line_2` = '$user->address_line_2'
WHERE `UUID` = $user->address_id");

}

 $result = $conn->query("COMMIT;");

 echo json_encode($result, JSON_PRETTY_PRINT);
