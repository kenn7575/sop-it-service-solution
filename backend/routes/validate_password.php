<?php
include "components/admin_db_conn.php";

if (!isset($_POST["password"]) || !isset($_POST["user_password"])) {
    $result = (object) [
        "success" => false,
        "data" => $_POST
    ];
    die(json_encode($result, JSON_PRETTY_PRINT));
}

if (password_verify($_POST["password"], $_POST["user_password"])) {
    $result = (object) [
        "success" => true,
        "data" => $_POST
    ];
} else {
    $result = (object) [
        "success" => false,
        "data" => $_POST
    ];
}

die(json_encode($result, JSON_PRETTY_PRINT));