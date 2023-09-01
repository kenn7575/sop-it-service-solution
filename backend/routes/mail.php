<?php
include 'components/admin_db_conn.php';
include 'components/functions.php';

if ($_SERVER['REQUEST_METHOD'] != 'POST') res(405, 'Method not allowed');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php'; // Path to autoload.php

// Create a new PHPMailer instance
$mail = new PHPMailer(true); // 'true' enables exceptions

try {
    // Server settings
    $mail->isSMTP(); // Use SMTP
    $mail->Host = $env['MAIL_HOST']; // SMTP server
    $mail->SMTPAuth = true; // Enable SMTP authentication
    $mail->Username = $env['MAIL_USERNAME']; // SMTP username
    $mail->Password = $env['MAIL_PASSWORD']; // SMTP password
    $mail->SMTPSecure = $env['MAIL_ENCRYPTION']; // Encryption (tls or ssl)
    $mail->Port = $env['MAIL_PORT']; // SMTP port

    $result = $conn->query(("SELECT * FROM `loans` WHERE `mail_sent` = '0'"))->fetch_all(MYSQLI_ASSOC);

    $users_to_mailed = [];

    foreach ($result as $loan) {
        $date_to_be_returned = date('Y-m-d', strtotime($loan['date_created'] . ' + ' . $loan['loan_length'] . ' days'));
        $loan['date_to_be_returned'] = $date_to_be_returned;

        $days_before_notice = $_POST['days_before_notice'] ?? 3;

        if (date('Y-m-d', strtotime($date_to_be_returned . ' - ' . $days_before_notice . ' days')) == date('Y-m-d')) {
            $user = $conn->query("SELECT * FROM `users` WHERE `UUID` = {$loan['user_id']}")->fetch_object();
            $users_to_mailed[] = $user;

            $conn->query("UPDATE `loans` SET `mail_sent` = 1 WHERE `UUID` = {$loan['UUID']}");
        }
    }

    foreach ($users_to_mailed as $user) {

        $mail_to = $user->mail;
        $recipient_name = $user->name;
    
        $subject = 'Lån er tæt på udløbsdato';
        $body = '<p>Kære elev <br> Et af dine lån er ved at løbe ud</p>';

        // Recipients
        $mail->setFrom($env['MAIL_FROM_ADDRESS'], $env['MAIL_FROM_NAME']);
        $mail->addAddress($mail_to, $recipient_name);
        
        // Content
        $mail->CharSet = 'UTF-8'; // Set character encoding
        $mail->Encoding = 'base64'; // Use base64 encoding for content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = $body;
        $mail->AltBody = 'Mailen kunne ikke vises da HTML ikke er aktiveret.';

        $mail->send();
    }

    res(200, count($users_to_mailed) . ' brugere har fået en mail om at deres lån er ved at udløbe');
} catch (Exception $e) {
    echo "Email sending failed. Error: {$mail->ErrorInfo}";
}
?>
