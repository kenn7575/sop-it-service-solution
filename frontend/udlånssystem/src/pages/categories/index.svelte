<script lang="js">
  import Table from "../../components/table.svelte";
  import { onMount } from "svelte";
  import getData from "../../data/getData";
  import goToPath from "../../services/goToPath";
  import { path } from "../../stores/pathStore";

  let table = "categories";
  let page_name = "Kategorier";

  let inputData = [{}];

  function handleRowClick(event) {
    console.log(event.detail.UUID);
    let id = event.detail.UUID;
    goToPath(`${$path}/${id}`)
  }

  onMount(async () => {
    inputData = await getData("categories_view");
  });
</script>

{#if inputData}
  <div class="table">
    <Table
      buttonDestination={`${$path}/new`}
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
