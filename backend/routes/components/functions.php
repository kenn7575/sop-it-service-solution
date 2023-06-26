<?php

function nested_objects($column, $conn) {
    function addSuffix($table_name) {
        $exceptions = ["product_status"];

        if (in_array($table_name, $exceptions)) return $table_name;
        if (substr($table_name, -1) == "s") { $table_name = $table_name . "e"; }
        if (substr($table_name, -1) == "y") { $table_name = substr($table_name, 0, -1) . "ie"; }
        return $table_name = $table_name . "s";
    }

    foreach ($column as $key => $value) {
        if (substr($key, -3) == "_id" && isset($value)) {
        $table_name = substr($key, 0, -3);
        $table_name = addSuffix($table_name);
        $column->$key = $conn->query("SELECT * FROM `$table_name` WHERE `UUID` = $value")->fetch_object();
        }
    }

    return $column;
}

function upsert($table, $data, $conn) {
    foreach ($data as $key => $value) {
        if (isset($value)) {
            $data_insert_keys_list[] = "`$key`";
            $data_insert_values_list[] = "'$value'";
            $data_update_list[] = "`$key` = '$value'";
        }
    }

    $data_insert_keys_string = implode(", ", $data_insert_keys_list);
    $data_insert_values_string = implode(", ", $data_insert_values_list);
    $data_update_string = implode(", ", $data_update_list);

    $conn->query("INSERT INTO `$table` ($data_insert_keys_string) VALUES ($data_insert_values_string)ON DUPLICATE KEY UPDATE $data_update_string");
}