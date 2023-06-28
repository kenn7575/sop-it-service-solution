<script lang="js">
  import Table from "../../components/table.svelte";
  import { onMount } from "svelte";
  import getData from "../../data/retrieve";
  import goToPath from "../../services/goToPath";

  let inputData = [{}];

  import { path } from "../../stores/pathStore";



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
