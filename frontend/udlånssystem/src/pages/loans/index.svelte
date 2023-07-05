<script lang="js">
  import Table from "../../components/table.svelte";
  import axios from "axios";
  import { onMount } from "svelte";
  import getData from "../../data/getData";

  let inputData = [[]];

  let page_name = "Udlaan";

  onMount(async () => {
    inputData = await getData("loans_view");
    console.log(inputData);
  });

  import goToPath from "../../services/goToPath";
  function handleRowClick(event) {
    let id = event.detail.UUID;
    goToPath(`${page_name.toLowerCase()}/${id}`);
  }
</script>

<div class="table">
  <Table
    {inputData}
    buttonDestination={"udlaan/new"}
    on:message={handleRowClick}
  />
</div>

<style>
  .table {
    width: 100%;
    height: 100%;
  }
</style>
