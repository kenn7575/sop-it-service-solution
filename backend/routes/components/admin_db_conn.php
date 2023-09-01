<?php

include "headers.php";

if ($header != $env['AUTH']) die("Unauthorized");

try {
$conn = new mysqli("127.0.0.1", $env['ADMIN_USERNAME'], $env['ADMIN_PASSWORD'], "sop", '3306');
} catch (Exception $e) { res(500, "Connection failed: " . $e->getMessage()); }

if ($conn->connect_error) res(500, "Connection failed: " . $conn->connect_error);

