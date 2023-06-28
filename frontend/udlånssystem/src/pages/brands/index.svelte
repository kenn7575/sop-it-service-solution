<script lang="js">
  import Table from "../../components/table.svelte";
  import { onMount } from "svelte";
  import getData from "../../data/retrieve";
  import axios from "axios";

  let inputData = [{}];

  import { path } from "../../stores/pathStore";
  import { navigate } from "svelte-routing";

  $: currentPath = $path;
  function handleRowClick(event) {
    let id = event.detail.UUID;
    navigate(`${currentPath}/${id}`);
    path.update(() => {
      return `${currentPath}/${id}`;
    });
  }

  onMount(async () => {
    inputData = await axios
      .get("get_data.php", { params: { table: "brands" } })
      .then((res) => {
        console.log(res);
        return res.data;
      });
  });
</script>

{#if inputData}
  <div class="table">
    <Table
      buttonDestination={"brands/new"}
      {inputData}
      on:message={handleRowClick}
    />
  </div>
{:else}
  <p>loading</p>
{/if}

<style>
  .table {
    width: 100%;
    height: 100%;
  }
</style>
