<?php
include "admin_db_conn.php";

$educations = $conn->query("SELECT * FROM `educations`")->fetch_all(MYSQLI_ASSOC);

echo json_encode($educations, JSON_PRETTY_PRINT);
