<?php
  require __DIR__ . '/vendor/autoload.php';

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

  $data['message'] = 'hello world';
  for ($i = 0; $i < 100; $i++) {
    $pusher->trigger('chat-channel', 'chat-event', $data);
    sleep(1);
  }
?>