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

    $mail_to = $_POST['mail_to'] ?? "";
    $recipient = $_POST['recipient'] ?? "Elev";

    // Recipients
    $mail->setFrom($env['MAIL_FROM_ADDRESS'], $env['MAIL_FROM_NAME']);
    $mail->addAddress($mail_to, $recipient);

    // Content
    $subject = $_POST['subject'] ?? 'Test mail';
    $body = $_POST['body'] ?? '<p>Test body</p>';

    $mail->isHTML(true); // Set email format to HTML
    $mail->Subject = $subject;
    $mail->Body = $body;
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Email sent successfully';
} catch (Exception $e) {
    echo "Email sending failed. Error: {$mail->ErrorInfo}";
}
?>
