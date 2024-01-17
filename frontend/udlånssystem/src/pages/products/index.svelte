<script lang="js">
  import Table from "../../components/table.svelte";
  import axios from "axios";
  import { onMount } from "svelte";
  import getData from "../../data/getData";
  import {
    barcodeStore,
    barcodeBuilderTimeOut,
  } from "../../stores/barcodeStore";
  function handleBarcodeScan(value) {
    if (!value) return;
    if (Date.now() - $barcodeBuilderTimeOut > 1000) {
      return;
    }
    goToPath(`/${page_name.toLowerCase()}/${value}`);
  }
  $: handleBarcodeScan($barcodeStore);
  $: console.log($barcodeStore);
  let table = "items_view";
  let page_name = "Produkter";

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
      buttonDestination={"produkter/new"}
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
