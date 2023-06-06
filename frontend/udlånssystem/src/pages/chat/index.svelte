<script>
  import axios from "axios";
  import Pusher from "pusher-js";

  let database_chat = null;

  $: live_chat = database_chat ?? [];

  var pusher = new Pusher("336d7719fc56a9588783", {
    cluster: "eu",
  });

  function message(data) {
    live_chat.push(data.message);
    live_chat = live_chat;
  }

  var channel = pusher.subscribe("chat-channel");
  channel.bind("chat-event", message);

  function userMessage() {
    let message = document.getElementById("test").value;
    document.getElementById("test").value = "";
    axios.post("/test.php", {message})
  };

  //   $: console.log(test)
</script>

<div>
  <b>Chat</b>
  {#each live_chat as item}
    <p>{item}</p>
  {/each}
  <br />
  <input id="test" type="text" />
  <button on:click={() => userMessage()}>Send</button>
</div>
