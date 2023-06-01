<script lang="js">
  import Table from "../../components/table.svelte";
  import axios from "axios";
  import { onMount } from "svelte";
  import { getData } from "../../data/data";
  import testData from "../../data/users_testData.json";

  let inputData = [[]];

  onMount(async () => {
    inputData = await getData("users");
  });
</script>

<div class="table">
  <Table {inputData} />
</div>

<style>
  .table {
    width: 100%;
    height: 100%;
  }
</style>
