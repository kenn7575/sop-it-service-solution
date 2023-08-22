<script lang="js">
  import Table from "../../components/table.svelte";
  import { onMount } from "svelte";
  import { path } from "../../stores/pathStore";
  import { navigate } from "svelte-routing";
  import getData from "../../data/getData";

  let table = "brands_view";
  let page_name = "Brands";

  let inputData = [[]];

  $: currentPath = $path;
  function handleRowClick(event) {
    let id = event.detail.UUID;
    navigate(`${currentPath}/${id}`);
    path.update(() => {
      return `${currentPath}/${id}`;
    });
  }

  onMount(async () => {
    inputData = await getData(table);
  });
</script>

{#if inputData}
  <div class="table-container">
    <Table
      buttonDestination={`${page_name.toLowerCase()}/new`}
      {inputData}
      on:message={handleRowClick}
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
