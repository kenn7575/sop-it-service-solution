<script lang="js">
  import Table from "../../components/table.svelte";
  import { onMount } from "svelte";
  import { getData } from "../../data/data";

  let inputData = [[]];

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
