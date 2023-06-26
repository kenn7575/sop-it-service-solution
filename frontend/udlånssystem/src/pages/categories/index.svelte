<script lang="js">
  import Table from "../../components/table.svelte";
  import { onMount } from "svelte";
  import { getData } from "../../data/data";
  import goToPath from "../../services/goToPath";

  let inputData = [[]];

  import { path } from "../../stores/pathStore";


  $: currentPath = $path;
  function handleRowClick(event) {
    let id = event.detail.UUID;
    goToPath(`${currentPath}/${id}`)
  }

  onMount(async () => {
    inputData = await getData("categories_view");
  });
</script>

{#if inputData}
  <div class="table">
    <Table
      buttonDestination={"kategorier/new"}
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
