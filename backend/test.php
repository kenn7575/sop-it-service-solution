<?php
  require __DIR__ . '/vendor/autoload.php';
  include "headers.php";

  $options = array(
    'cluster' => 'eu',
    'useTLS' => true
  );
  $pusher = new Pusher\Pusher(
    '336d7719fc56a9588783',
    '8f0aa0b85f421dca024b',
    '1611437',
    $options
  );

  if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    die(json_encode(['message'=>'ok'], JSON_PRETTY_PRINT));
  }
$data['message'] = $_POST['message'] ?? "data";
$pusher->trigger('chat-channel', 'chat-event', $data);

?>