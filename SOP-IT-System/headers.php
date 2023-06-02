<?php

header("Content-Type: application/json; application/x-www-form-urlencoded; charset=UTF-8;");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: *");

$header = apache_request_headers()['Authorization'] ?? $_GET['auth'] ?? "";

$env = parse_ini_file('.env');