<script lang="js">
  import Table from "../../components/table.svelte";
  import axios from "axios";
  import { onMount } from "svelte";
  import getData from "../../data/getData";

  let inputData = [{}];

  onMount(async () => {
    inputData = await getData("items_view")
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
  <div class="table">
    <Table
      buttonDestination={"produkttyper/new"}
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
