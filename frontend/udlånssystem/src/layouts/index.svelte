<script lang="js">
  import { onMount } from "svelte";
  import Table from "@components/table.svelte";
  import getData from "@data/getData";
  import { path } from "@stores/pathStore";
  import { navigate } from "svelte-routing";

  export let table;
  export let page_name;
  
  export let defaultFilterKey = "Navn";

  let inputData;

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
      headers={inputData.headers}
      values={inputData.data}
      on:message={handleRowClick}
      filterKey={defaultFilterKey}
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
