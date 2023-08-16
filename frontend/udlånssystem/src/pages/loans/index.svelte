<script lang="js">
// @ts-nocheck

  import Table from "../../components/table.svelte";
  import axios from "axios";
  import { onMount } from "svelte";
  import getData from "../../data/getData";

  let inputData = [[]];
  let constData = [[]];

  let page_name = "udlaan";

  async function filterLoans(returned) { 
      if (returned) { inputData = constData.filter(loan => loan.Returneret) }
      else { inputData = constData.filter(loan => !loan.Returneret) }
  }

  onMount(async () => {
    constData = await getData("loans_view");
    inputData = [...constData];
    filterLoans(false)
  });

  import goToPath from "../../services/goToPath";
  function handleRowClick(event) {
    let id = event.detail.UUID;
    goToPath(`${page_name.toLowerCase()}/${id}`);
  }
</script>

<div class="table">
  <input id="checkbox" type="checkbox" on:change={(e) => filterLoans(e.target.checked)} />
  <Table
    {inputData}
    buttonDestination={`${page_name}/new`}
    on:message={handleRowClick}
  />
</div>

<style>
  .table {
    width: 100%;
    height: 100%;
  }
</style>
