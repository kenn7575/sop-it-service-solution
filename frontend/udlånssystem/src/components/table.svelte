<script>
  export let tableData = [
    ["ID", "Name", "Age"],
    [1, "John", 25],
    [2, "Alice", 30],
    [3, "Bob", 20],
  ];
  let sortAscending = true;
  let sortColumn = 0;

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
    {#each tableData.slice(1) as row}
      <tr>
        {#each row as cell}
          <td>{cell}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

<style>
  tr {
    cursor: pointer;
  }
</style>
