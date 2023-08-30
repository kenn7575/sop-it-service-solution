<?php
include 'components/headers.php';
include 'components/functions.php';

$ldap = ldap_connect($env['LDAP_HOST'], $env['LDAP_PORT']);

if (!$ldap) { res(500, 'LDAP connection failed');
} else {
    ldap_bind($ldap, $env['LDAP_USERNAME'], $env['LDAP_PASSWORD']);
    
    $username = $_GET['username'] ?? "";
    $password = $_GET['password'] ?? "";

    if (empty($username) || empty($password)) res(400, 'Username or password is empty');

    $filter = "(sAMAccountName=$username)";
    $attr = array("cn");
    $result = @ldap_search($ldap, $env['LDAP_USERS'], $filter, $attr)
    or die(res(500, 'LDAP search failed'));

    $user = ldap_get_entries($ldap, $result);

    if (empty($user) || empty($user[0]) || empty($user[0]['cn'])) res(400, 'User not found');

    $user_cn = $user[0]['cn'][0];

    if (@ldap_bind($ldap, $user_cn, $password)) res(200, 'Login successful');
    else res(400, 'Invalid username or password');

    ldap_unbind($ldap);
}
