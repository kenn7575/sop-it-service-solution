<?php

include "headers.php";

$dbUri = parse_url($env["DB_URI"]);

try {
    $conn = new mysqli($dbUri["host"], $dbUri["user"], $dbUri["pass"], substr($dbUri["path"], 1), $dbUri["port"]);
} catch (Exception $e) { res(500, "Connection failed: " . $e->getMessage()); }

if ($conn->connect_error) res(500, "Connection failed: " . $conn->connect_error);

