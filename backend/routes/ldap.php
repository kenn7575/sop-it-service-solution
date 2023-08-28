<?php
include 'components/headers.php';

$ldap = ldap_connect($env['LDAP_HOST'], $env['LDAP_PORT']);

if (!$ldap) {
    echo json_encode([
        'status' => 'error',
        'message' => 'LDAP connection failed'
    ]);
    exit;
} else {
    ldap_bind($ldap, $env['LDAP_USERNAME'], $env['LDAP_PASSWORD']);
    
    $username = $_GET['username'] ?? "";
    $password = $_GET['password'] ?? "";

    if (empty($username) || empty($password)) {
        echo json_encode([
            'status' => 'error',
            'message' => 'Username or password is empty'
        ]);
        exit;
    }

    $filter = "(sAMAccountName=$username)";
    $attr = array("cn");
    $result = @ldap_search($ldap, $env['LDAP_USERS'], $filter, $attr)
    or die ("Error in search query: ".ldap_error($ldap));

    $user = ldap_get_entries($ldap, $result);

    if (empty($user) || empty($user[0]) || empty($user[0]['cn'])) {
        echo json_encode([
            'status' => 'error',
            'message' => 'User not found'
        ]);
        exit;
    }

    $user_cn = $user[0]['cn'][0];

    echo @ldap_bind($ldap, $user_cn, $password) or die("0");

    ldap_unbind($ldap);
}
