<?php
include "admin_db_conn.php";

$roles = $conn->query("SELECT * FROM `roles`")->fetch_all(MYSQLI_ASSOC);

for ($i=0; $i < count($roles); $i++) { 
  $auth_lvl_id = $roles[$i]['authorization_level_id'];
  $roles[$i]['authorization_level_id'] = $conn->query("SELECT * FROM `authorization_levels` WHERE `UUID` = $auth_lvl_id")->fetch_object();
}

echo json_encode($roles, JSON_PRETTY_PRINT);