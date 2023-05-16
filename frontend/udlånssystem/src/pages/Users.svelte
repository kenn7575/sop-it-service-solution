<script lang="js">
  import axios from "axios";
  async function getData() {
    const response = await axios.get(
      "http://172.16.3.135:80/SOP-IT-System/Users"
    );
    console.log(response);
    const data = response.data;

    console.log(data);
    return data;
  }
</script>

<h1>Users</h1>
{#await getData() then data}
  {#each data as user}
    <div class="user">
      <div class="info">
        <h3>{user.username}</h3>
        <p>{user.name}</p>
      </div>
    </div>
  {/each}
{:catch error}
  <p>{error.message}</p>
{/await}
