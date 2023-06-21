<?php

function nested_objects($user, $conn) {
    foreach ($user as $key => $value) {
        if (substr($key, -3) == "_id" && isset($value)) {
        $table_name = substr($key, 0, -3);
        if (substr($table_name, -1) == "s") { $table_name = $table_name . "es"; } else { $table_name = $table_name . "s"; }
        $user->$key = $conn->query("SELECT * FROM `$table_name` WHERE `UUID` = $value")->fetch_object();
        }
    }
}