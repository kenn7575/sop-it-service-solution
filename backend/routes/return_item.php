<?php
include "components/admin_db_conn.php";
include "components/functions.php";

$ids = (Array) $_GET["ids"] ?? null;

if (!isset($UUID)) die(json_encode(['message'=>'UUID not set', 'status'=>400], JSON_PRETTY_PRINT));

$conn->query("START TRANSACTION;");

die(json_encode($ids, JSON_PRETTY_PRINT));