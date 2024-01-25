<?php
include "../components/admin_db_conn.php";
include "../components/functions.php";

if (!isset($_POST["password"]) || !isset($_POST["user_password"])) res(400, "Missing password");
if (password_verify($_POST["password"], $_POST["user_password"])) res(200, "Password correct", $_POST);
else res(401, "Invalid password");
