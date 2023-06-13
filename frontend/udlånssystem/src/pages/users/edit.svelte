<script>
  export let id;

  import { onMount } from "svelte";
  import { currentUser } from "../../services/login";
  import { getData } from "../../data/data";
  import axios from "axios";

  let inputData = [[]];
  console.log(id)
  $: user = $currentUser;

  // onMount(async () => {
  //   inputData = await axios.get("select_user.php", {
  //     params: {
  //       user: 'user',
  //       password: 'user',
  //       id: user.UUID,
  //       username: user.username,
  //     },
  //   }).then(res => { return res.data; })
  // });

  onMount(async () => {
    inputData = await getData("users_view_extended", id);
  });
</script>

<h1>Details for user</h1>
<h2>{JSON.stringify(inputData)}</h2>
