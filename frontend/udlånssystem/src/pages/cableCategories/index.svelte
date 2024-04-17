<script lang="js">
  import Table from "../../components/table.svelte";
  import axios from "axios";
  import { onMount } from "svelte";
  import getData from "../../data/getData";

  let table = "cable_categories_view";
  let page_name = "Kabelgrupper";

  let inputData = [{}];

  onMount(async () => {
    inputData = await getData(table);
  });

  import goToPath from "../../services/goToPath";

  function handleRowClick(event) {
    let id = event.detail.UUID;
    goToPath(`/${page_name.toLowerCase()}/${id}`);
  }
</script>

{#if inputData}
  <div class="table-container">
    <Table
      buttonDestination={"kabelgrupper/new"}
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
