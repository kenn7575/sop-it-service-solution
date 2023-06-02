    <script>
        import Pusher from 'pusher-js';

        let database_chat = null

        $: live_chat = database_chat ?? []
  
      var pusher = new Pusher('336d7719fc56a9588783', {
        cluster: 'eu'
      });
  
      var channel = pusher.subscribe('chat-channel');
      channel.bind('chat-event', function(data) {
        live_chat.push(data.message)
        live_chat = live_chat
      });

    //   $: console.log(test)
    </script>

<div>
    <b>Chat</b>
    {#each live_chat as item}
        <p>{item}</p>
    {/each}
</div>