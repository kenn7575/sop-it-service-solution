<script lang="js">
  import Table from "../../components/table.svelte";
  import { onMount } from "svelte";
  import getData from "../../data/getData";
  import { navigate } from "svelte-routing";
  $: currentPath = $path;

  function handleRowClick(event) {
    let id = event.detail.UUID;
    navigate(`${currentPath}/${id}`);
    path.update(() => {
      return `${currentPath}/${id}`;
    });
  }

  let inputData = [{}];

  onMount(async () => {
    inputData = await getData("users_view");
  });

  import axios from "axios";

  async function handleUpdateUsers() {
    const { data } = await axios.put("ldap.php", {params: {username: "*"}})
    alert(`${data} brugere opdateret`);
  }

  import { path } from "../../stores/pathStore";
</script>

{#if inputData.length > 0}
  <div class="table-container">
    <Table
      {inputData}
      buttonDestination={"brugere/new"}
      on:message={handleRowClick}
      extraButton="Opdater brugere fra AD"
      on:action={handleUpdateUsers}
    />
  </div>
{:else}
  <p>loading</p>
{/if}

<style>
  .table-container {
    width: 100%;
    height: 100%;
  }
</style>
