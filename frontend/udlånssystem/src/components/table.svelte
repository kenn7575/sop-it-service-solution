<script>
  import { onMount } from "svelte";
  export let tableData = [
    ["ID", "Name", "Age"],
    [2, "John", 25],
    [1, "Alice", 30],
    [3, "Bob", 20],
  ];

  let sortAscending = true;
  let sortColumn = -1;

  function sortTable(data, columnIndex) {
    if (columnIndex === sortColumn) {
      sortAscending = !sortAscending;
    } else {
      sortAscending = true;
      sortColumn = columnIndex;
    }
    const sortKey = data[0][columnIndex];
    const sortedData = data.slice(1).sort((a, b) => {
      const valueA = a[columnIndex];
      const valueB = b[columnIndex];
      return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
    });
    if (!sortAscending) {
      tableData = [data[0], ...sortedData.reverse()];
    } else {
      tableData = [data[0], ...sortedData];
    }
  }
  function isEven(index) {
    return index % 2 === 0;
  }
  onMount(() => {
    sortTable(tableData, 0);
  });
</script>

<table>
  <thead>
    <tr>
      {#each tableData[0] as heading, index}
        <th on:click={() => sortTable(tableData, index)}>{heading}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each tableData.slice(1) as row, rowIndex}
      <tr
        class:row-even={isEven(rowIndex)}
        on:click={() => {
          console.log(row[0] + " cliked");
        }}
      >
        {#each row as cell}
          <td>{cell}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  thead tr {
    cursor: pointer;
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
</style>
