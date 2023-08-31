<?php
include 'components/headers.php';
include 'components/functions.php';
include 'components/admin_db_conn.php';

$ldap = ldap_connect($env['LDAP_HOST'], $env['LDAP_PORT']);

if (!$ldap) { res(500, 'LDAP connection failed');
} else {
    if ($_SERVER['REQUEST_METHOD'] == 'POST') die(ldap_auth());
    if ($_SERVER['REQUEST_METHOD'] == 'GET') die(get_users());
    if ($_SERVER['REQUEST_METHOD'] == 'PUT') die(mergeUsers());
}

function ldap_auth() {
    global $ldap, $env;

    ldap_bind($ldap, $env['LDAP_USERNAME'], $env['LDAP_PASSWORD']);
   
    $username = $_POST['username'] ?? $_GET['username'] ?? "";
    $password = $_POST['password'] ?? $_GET['password'] ?? "";

    if (empty($username) || empty($password)) res(400, 'Username or password is empty');

    $filter = "(sAMAccountName=$username)";
    $attr = array("cn");
    $result = @ldap_search($ldap, $env['LDAP_USERS'], $filter, $attr)
    or die(res(500, 'LDAP search failed'));

    $user = ldap_get_entries($ldap, $result);

    if (empty($user) || empty($user[0]) || empty($user[0]['cn'])) res(400, 'User not found');

    $user_cn = $user[0]['cn'][0];

    // if (@ldap_bind($ldap, $user_cn, $password)) res(200, 'Login successful');
    // else res(400, 'Invalid username or password');

    if (@ldap_bind($ldap, $user_cn, $password)) return json_encode(array(
        'username' => $username,
        'name' => $user_cn,
        'mail' => $username . '@uni-login.dk',
        'is_ad_user' => true,
    ));
    else return null;

    ldap_unbind($ldap);
}

function get_users() {
    global $ldap, $env;

    ldap_bind($ldap, $env['LDAP_USERNAME'], $env['LDAP_PASSWORD']);

    $unilogin = $_GET['unilogin'] ?? "*";

    $filter = "(&(objectClass=person)(|(sAMAccountName=$unilogin)))";
    $attr = array("name", "mail", "sAMAccountName", "whencreated", "whenchanged");
    $result = @ldap_search($ldap, $env['LDAP_USERS'], $filter, $attr ?? "*")
    or die(res(500, 'LDAP search failed'));

    $ldap_users = ldap_get_entries($ldap, $result);

    if (empty($ldap_users)) res(400, 'No users found');

    $ldap_users = mb_convert_encoding($ldap_users, 'UTF-8', 'ISO-8859-1');

    foreach($ldap_users as $user) {
        if (empty($user['samaccountname'][0])) continue;
        $users[] = array(
            'username' => $user['samaccountname'][0] ?? null,
            'name' => $user['name'][0] ?? null,
            'date_created' => $user['whencreated'][0] ?? null,
            'date_updated' => $user['whenchanged'][0] ?? null,
        );
    }

    return json_encode($users, JSON_PRETTY_PRINT);
}

function mergeUsers() {
    global $conn;

    $ldap_users = json_decode(get_users(), true);

    foreach($ldap_users as $value) {
        $upsertManyList[] = "('{$value['username']}', '{$value['name']}', '{$value['username']}@uni-login.dk', '1')";
    }

    $upsertManyString = implode(", ", $upsertManyList);

    $conn->query("START TRANSACTION");

    $conn->query("INSERT INTO `users` (`username`, `name`, `mail`, `is_ad_user`)
    VALUES $upsertManyString
    ON DUPLICATE KEY UPDATE `is_ad_user` = '1';");

    $affected_rows = $conn->affected_rows;

    $conn->query("COMMIT");
  
    // return amount of affected rows
    return json_encode($affected_rows);
}