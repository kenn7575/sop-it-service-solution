<?php
include "../components/admin_db_conn.php";

$UUID = $_GET["UUID"];

$result = $conn->query("CALL DeleteUser($UUID, @rowsAffected) ");

$id = $conn->query("SELECT @rowsAffected AS rowsAffected")->fetch_object()->rowsAffected;

die($id);