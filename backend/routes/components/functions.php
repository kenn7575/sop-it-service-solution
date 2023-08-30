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

function res($code, $message) {
    $status = "";

    if ($code >= 100 && $code < 200) { header("HTTP/1.1 $code Informational"); $status = 'info'; }
    if ($code >= 200 && $code < 300) { header("HTTP/1.1 $code Success"); $status = 'success'; }
    if ($code >= 300 && $code < 400) { header("HTTP/1.1 $code Redirection"); $status = 'redirect'; }
    if ($code >= 400 && $code < 500) { header("HTTP/1.1 $code Client Error"); $status = 'error'; }
    if ($code >= 500 && $code < 600) { header("HTTP/1.1 $code Server Error"); $status = 'error'; }

    die(json_encode(
            [
                'code' => $code,
                'status' => $status,
                'message' => $message,
            ],
            JSON_PRETTY_PRINT
        ));
}