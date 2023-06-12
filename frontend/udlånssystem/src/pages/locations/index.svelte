<script lang="js">
  import Table from "../../components/table.svelte";
  import axios from "axios";
  import { onMount } from "svelte";
  import { getData } from "../../data/data";

  let inputData = [[]];

  onMount(async () => {
    inputData = await getData("storage_locations");
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

<div class="table">
  <Table {inputData} on:message={handleRowClick} />
</div>

<style>
  .table {
    width: 100%;
    height: 100%;
  }
</style>
