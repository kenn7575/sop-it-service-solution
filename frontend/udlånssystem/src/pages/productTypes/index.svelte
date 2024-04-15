<script lang="js">
  import Table from "../../components/table.svelte";
  import axios from "axios";
  import { onMount } from "svelte";
  import getData from "../../data/getData";

  let table = "products";
  let page_name = "Produkttyper";

  let inputData = [{}];

  onMount(async () => {
    inputData = await getData("products_view")

    inputData.map(item => {
      item.Oprettet = new Date(item.Oprettet).toUTCString()
      item.Opdateret = new Date(item.Opdateret).toUTCString()
    })
  });

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
</script>

{#if inputData}
  <div class="table-container">
    <Table
      buttonDestination={"produkttyper/new"}
      {inputData}
      on:message={handleRowClick}
      filterKey="Navn"
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
