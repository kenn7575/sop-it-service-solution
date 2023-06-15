<script lang="js">
  import Table from "../../components/table.svelte";
  import { onMount } from "svelte";
  import { getData } from "../../data/data";
  import { navigate } from "svelte-routing";
  $: currentPath = $path;

  function handleRowClick(event) {
    let id = event.detail.UUID;
    navigate(`${currentPath}/${id}`);
    path.update(() => {
      return `${currentPath}/${id}`;
    });
  }

  let inputData = [[]];

  onMount(async () => {
    inputData = await getData("users_view");
  });

  import { path } from "../../stores/pathStore";
</script>

<div class="table">
  <Table
    {inputData}
    buttonDestination={"brugere/new"}
    on:message={handleRowClick}
  />
</div>

<style>
  .table {
    width: 100%;
    height: 100%;
  }
</style>
