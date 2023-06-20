<?php
include "admin_db_conn.php";

$user_role_id = $_POST['role_id'] ?? 1;

$user_role = $conn->query("SELECT * FROM `roles` WHERE `UUID` = $user_role_id")->fetch_object();

$roles = $conn->query("SELECT * FROM `roles`")->fetch_all(MYSQLI_ASSOC);

$roles_user_can_access = [];

for ($i=0; $i < count($roles); $i++) {
  $auth_lvl_id = $roles[$i]['authorization_level_id'];
  $roles[$i]['authorization_level_id'] = $conn->query("SELECT * FROM `authorization_levels` WHERE `UUID` = $auth_lvl_id")->fetch_object();
  if ($roles[$i]['authorization_level_id']->level < $user_role->authorization_level_id) {
    $roles_user_can_access[] = $roles[$i];
  };
}

echo json_encode($roles_user_can_access, JSON_PRETTY_PRINT);