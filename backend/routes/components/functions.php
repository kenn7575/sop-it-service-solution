<?php

function writeToLog($data) {
    $file = fopen("text.log", "a");
    fwrite($file, $data."\n".date("Y-m-d H:i:s").", "
    .print_r($_SERVER["SCRIPT_NAME"], true).", "
    .__LINE__."\n\n");
    fclose($file);
}

function upsert($table, $data) {
    foreach ($data as $key => $value) {
        if (isset($value)) {
            // if (is_object($value) || substr($key, -3) == "_id") $value = $value["UUID"];
            $data_insert_keys_list[] = "`$key`";
            $data_insert_values_list[] = "'$value'";
            $data_update_list[] = "`$key` = '$value'";
        }
    }

    $data_insert_keys_string = implode(", ", $data_insert_keys_list);
    $data_insert_values_string = implode(", ", $data_insert_values_list);
    $data_update_string = implode(", ", $data_update_list);

    $query_string =
    "INSERT INTO `$table` ($data_insert_keys_string)
    VALUES ($data_insert_values_string)
    ON DUPLICATE KEY UPDATE $data_update_string; ";

    try {
        global $conn;
        $conn->query($query_string);
    } catch (Exception $e) { return $e; }

    return true;
}