<script>
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";

  //import data
  export let inputData = [];

  //split data into tableData and tableHeadings
  $: tableHeadings = Object.keys(inputData[0]);
  $: tableData = Object.values(inputData);

  let sortAscending = true; //used to determine if the table should be sorted ascending or descending
  let sortColumn = -1; //used to determine which column the table should be sorted by

  //create event dispatcher
  const dispatch = createEventDispatcher();
  function forwardId(object) {
    dispatch("message", object);
  }

  //sortTable
  function sortTable(data, columnKey) {
    if (columnKey === sortColumn) {
      sortAscending = !sortAscending;
    } else {
      sortAscending = true;
      sortColumn = columnKey;
    }
    const sortedData = data.sort((a, b) => {
      const valueA = a[columnKey];
      const valueB = b[columnKey];
      return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
    });
    if (!sortAscending) {
      tableData = sortedData.reverse();
    } else {
      tableData = sortedData;
    }
  }

  onMount(() => {
    sortTable(tableData, tableHeadings[0]);
  });
</script>

<div class="content">
  <!-- ! table -->
  <div class="table">
    <table>
      <thead>
        <tr>
          {#each tableHeadings as heading}
            <th on:click={() => sortTable(tableData, heading)}>{heading}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each tableData as row, rowIndex}
          <tr
            class:row-even={rowIndex % 2 === 0}
            on:click={() => {
              forwardId(row);
            }}
          >
            {#each Object.values(row) as cell}
              <td>{cell}</td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>

<style>
  .content {
    padding: 1rem 1rem;
    display: grid;
    grid-template-rows: 40px auto 2.5rem;
    gap: 0.5rem;
    width: 100%;
    overflow-y: hidden;
    height: 100%;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  .table {
    width: 100%;
    overflow-y: auto;
  }
  thead tr {
    cursor: pointer;
    position: sticky;
    top: 0;
    background: var(--bg1);
  }
  tbody tr {
    background: var(--bg2);
    cursor: pointer;
  }
  td {
    padding: 0.5rem;
  }
  tr.row-even {
    background: var(--bg3);
  }
  th {
    text-align: left;
    padding: 0.5rem;
  }
  tr {
    height: 3rem;
  }
</style>
