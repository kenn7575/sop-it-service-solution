<script>
  export let id;

  import { onMount } from "svelte";
  import { currentUser } from "../../services/login";
  import { getData } from "../../data/data";
  import axios from "axios";

  let inputData = [[]];
  console.log(id)

  onMount(async () => {
    inputData = await axios.get("select_user.php", {
      params: {
        user: 'user',
        password: 'user',
        id: "717",
        username: 'udlaantest'
      },
    }).then(res => { return res.data; })
  });
</script>

<h1>Details for user</h1>
<h2>{JSON.stringify(currentUser)}</h2>
