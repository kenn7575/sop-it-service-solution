<script>
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";

  //import data
  export let inputData = [];
  export let title = "Indkøbskurv";
  export let disabled = false;
  export let exclude = [];

  //split data into tableData and tableHeadings
  $: tableHeadings = Object.keys(inputData[0]);
  $: tableData = Object.values(inputData);

  let sortAscending = true; //used to determine if the table should be sorted ascending or descending
  let sortColumn = -1; //used to determine which column the table should be sorted by

  $: tableDataFiltered = inputData; //used to determine what data should be displayed in the table after filtering

  //sortTable
  function sortTable(columnKey) {
    if (columnKey === sortColumn) {
      sortAscending = !sortAscending;
    } else {
      sortAscending = true;
      sortColumn = columnKey;
    }
    const sortedData = tableData.sort((a, b) => {
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

  const dispatch = createEventDispatcher();

  function forwardId(object) {
    if (disabled) return;
    dispatch("message", object);
  }
  //log all state variables

  onMount(() => {
    sortTable(tableHeadings[0]);
  });
</script>

<div class="content">
  {#if title}
    <h1>{title}</h1>
  {/if}
  <!-- ! table -->
  <div class="table">
    <table class:disabled>
      <thead>
        <tr>
          {#each tableHeadings as heading}
            {#if !exclude.includes(heading)}
              <th on:click={() => sortTable(heading)}>{heading}</th>
            {/if}
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each tableData as row, rowIndex}
          <tr
            class:not-allowed={disabled}
            class:row-even={rowIndex % 2 === 0}
            on:click={() => {
              forwardId(row);
            }}
          >
            {#each Object.entries(row) as [key, value]}
              {#if !exclude.includes(key)}
                <td>{value}</td>
              {/if}
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>

<style>
  /* pegination */

  .content {
    padding: 1rem 1rem;
    display: block;

    width: 100%;
    overflow-y: auto;
  }
  .not-allowed {
    cursor: not-allowed;
  }
  .disabled {
    opacity: 0.75;
  }

  /* table */
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
  h1 {
    height: 48px;
  }
</style>
