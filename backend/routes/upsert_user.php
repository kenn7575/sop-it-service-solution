<?php
include "components/admin_db_conn.php";
include "components/functions.php";

try {
$data = (object) $_POST;

$conn->query("START TRANSACTION;");

$address = $data->address_id;

if (isset($address)) {
    upsert("addresses", $address, $conn);
    
    if (isset($address["UUID"])) { $data->address_id = $address["UUID"]; }
    else { $data->address_id = $conn->insert_id; }
}

upsert("users", $data, $conn);

 $result = $conn->query("COMMIT;");

 echo json_encode($result, JSON_PRETTY_PRINT);

} catch (error $e) { echo json_encode(false); }
