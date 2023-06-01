<?php
include "headers.php";

$header = apache_request_headers()['Authorization'] ?? $_GET['auth'] ?? "";

$conn = new mysqli("127.0.0.1", $env['ADMIN_USERNAME'], $env['ADMIN_PASSWORD'], "sop", '3306');

$token = $_POST['token'] ?? "";

