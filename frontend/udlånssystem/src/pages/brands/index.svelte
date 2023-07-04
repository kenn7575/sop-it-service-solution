<script lang="js">
  import Table from "../../components/table.svelte";
  import axios from "axios";
  import { onMount } from "svelte";
  import { path } from "../../stores/pathStore";
  import { navigate } from "svelte-routing";
  import setPageTitle from "../../services/setPageTitle.js";
  import getData from "../../data/getData";

  let page_name = "Brands";
  let table = "brands";

  setPageTitle.index(page_name);

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
    inputData = await getData("category_groups");
  });
</script>

{#if inputData}
  <div class="table">
    <Table
      buttonDestination={`/${table}/new`}
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
