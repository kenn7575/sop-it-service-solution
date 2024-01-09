<?php
include 'components/headers.php';

$ldap = ldap_connect($env['LDAP_HOST'], $env['LDAP_PORT']);

function ldap_auth($username = null, $password = null, $group = 'USERS') {
    global $ldap, $env;

    if (empty($username) || empty($password)) return null;
    
    ldap_bind($ldap, $env['LDAP_USERNAME'], $env['LDAP_PASSWORD']);

    $user = ldap_get_entries($ldap,@ldap_search($ldap, $env['LDAP_'.$group], "(sAMAccountName=$username)", array("cn")));

    if (empty($user) || empty($user[0]) || empty($user[0]['cn'])) return null;

    $user_cn = $user[0]['cn'][0];

    if ($group == 'USERS') $role_id = 2;
    if ($group == 'ADMINS') $role_id = 5;

    if (@ldap_bind($ldap, $user_cn, $password)) return mb_convert_encoding([
        'username' => "$username",
        'name' => "$user_cn",
        'role_id' => "$role_id",
        'mail' => "$username" . '@uni-login.dk',
        'is_ad_user' => true,
     ], 'UTF-8', 'ISO-8859-1');
    else return null;
}

function get_admins() {
    global $ldap, $env;

    $ldap_admins = mb_convert_encoding(ldap_get_entries($ldap,
    @ldap_search($ldap, $env['LDAP_ADMINS'], "objectclass=person")), 'UTF-8', 'ISO-8859-1');

    foreach ($ldap_admins as $admin) {
        if (empty($admin['cn'][0])) continue;
        $admins[] = array(
            'username' => $admin['samaccountname'][0] ?? null,
            'name' => $admin['name'][0] ?? null,
            'role_id' => 5,
            'date_created' => $admin['whencreated'][0] ?? null,
            'date_updated' => $admin['whenchanged'][0] ?? null,
        );
    }

    return $admins;
}

function get_users() {
    global $ldap, $env;

    ldap_bind($ldap, $env['LDAP_USERNAME'], $env['LDAP_PASSWORD']);

    $unilogin = $_GET['unilogin'] ?? "*";

    $filter = "(&(objectClass=person)(|(sAMAccountName=$unilogin)))";
    $attr = array("name", "mail", "sAMAccountName", "whencreated", "whenchanged");
    $result = @ldap_search($ldap, $env['LDAP_USERS'], $filter, $attr ?? "*")
    or res(500, 'LDAP search failed');

    $ldap_users = mb_convert_encoding(ldap_get_entries($ldap, $result), 'UTF-8', 'ISO-8859-1');

    foreach($ldap_users as $user) {
        if (empty($user['samaccountname'][0])) continue;
        $users[] = array(
            'username' => $user['samaccountname'][0] ?? null,
            'name' => $user['name'][0] ?? null,
            'role_id' => 2,
            'date_created' => $user['whencreated'][0] ?? null,
            'date_updated' => $user['whenchanged'][0] ?? null,
        );
    }

    $users = array_merge($users, get_admins());

    return $users;
}

function mergeUsers() {
    global $conn;

    $ldap_users = get_users();

    foreach($ldap_users as $value) {
        $upsertManyList[] = "('{$value['username']}', '{$value['name']}', '{$value['username']}@uni-login.dk', '1', {$value['role_id']})";
    }

    $upsertManyString = implode(", ", $upsertManyList);

    $conn->query("START TRANSACTION");

    $conn->query("INSERT INTO `users` (`username`, `name`, `mail`, `is_ad_user`, `role_id`)
    VALUES $upsertManyString
    ON DUPLICATE KEY UPDATE `is_ad_user` = '1', `role_id` = VALUES(`role_id`);");

    $affected_rows = $conn->affected_rows;

    $conn->query("COMMIT");
  
    // return amount of affected rows
    return res(200, "Users merged", $affected_rows);
}