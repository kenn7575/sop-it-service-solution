<?php

// header("Content-Type: application/json; charset=UTF-8");
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: *");

$users = [
    "admin" => password_hash("test_pw1", PASSWORD_DEFAULT),
    "user" => password_hash("test_pw2", PASSWORD_DEFAULT)
];

$username = $_POST['username'] ?? "";
$password = $_POST['password'] ?? "";

if (array_key_exists($username, $users)) {
    if (password_verify($password, $users[$username])) {
        echo 'Password is valid!';
    } else {
        echo 'Invalid password.';
    }
}

?>

<html>
<head>
    <title>Test</title>
</head>
<body>
    <div>
        <form action="test.php" method="post">
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <input type="submit" value="Login" />
        </form>
    </div>
</body>
</html>