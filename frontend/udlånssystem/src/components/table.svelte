<script>
  import { onMount } from "svelte";

  //import data
  export let inputData = [];

  //split data into tableData and tableHeadings
  let tableData = inputData.slice(1);
  let tableHeadings = inputData[0];

  let sortAscending = true; //used to determine if the table should be sorted ascending or descending
  let sortColumn = -1; //used to determine which column the table should be sorted by
  let searchPromt = ""; //used to determine what the user is searching for
  let tableDataFiltered = tableData; //used to determine what data should be displayed in the table after filtering
  let filterIndex = 0; //used to determine which column the user is searching in
  let page = 1; //used to determine which page the user is on and which data should be displayed

  let dropdownOpen = false; //used to determine if the dropdown is open

  //log all state variables
  $: filterIndex && filterData();

  function toggleDropdown() {
    dropdownOpen = !dropdownOpen;
  }

  //sortTable
  function sortTable(data, columnIndex) {
    if (columnIndex === sortColumn) {
      sortAscending = !sortAscending;
    } else {
      sortAscending = true;
      sortColumn = columnIndex;
    }
    const sortKey = tableHeadings[columnIndex];
    const sortedData = data.sort((a, b) => {
      const valueA = a[columnIndex];
      const valueB = b[columnIndex];
      return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
    });
    if (!sortAscending) {
      tableDataFiltered = sortedData.reverse();
    } else {
      tableDataFiltered = sortedData;
    }
  }

  onMount(() => {
    sortTable(tableDataFiltered, 0);
  });

  //filter Data
  function filterData() {
    const filteredData = tableData.filter((row) => {
      let value = row[filterIndex];
      value = value.toString().toLowerCase();
      console.log("expects", value, "to includes", searchPromt.toLowerCase());
      return value.includes(searchPromt.toLowerCase());
    });

    tableDataFiltered = filteredData;
  }
  //change page
  function PageChangeUp() {
    if (page < tableDataFiltered.length / 20) {
      page += 1;
    }
  }
  function PageChangeDown() {
    if (page > 1) {
      page -= 1;
    }
  }
  function PageChangeTo(pageNumber) {
    page = pageNumber;
  }
</script>

<div class="content">
  <div class="controls">
    <div class="search">
      <div class="search-input">
        <div class="search-wrapper">
          <i class="fa-solid fa-magnifying-glass" />
          <input
            bind:value={searchPromt}
            class="search-input"
            type="text"
            placeholder="Søg"
            on:input={() => {
              filterData();
            }}
          />
        </div>
      </div>
      <strong> efter </strong>
      <div class="dropdown">
        <button class="dropdown-btn" on:click={toggleDropdown}>
          <p>{tableHeadings[filterIndex]}</p>
          <i class="fa-solid fa-angle-down" />
        </button>
        <div class="options" class:hidden={!dropdownOpen}>
          {#each tableHeadings as option, index}
            <button
              class="option-btn"
              on:click={() => {
                filterIndex = index;
                toggleDropdown();
              }}
            >
              <p>{option}</p>
            </button>
          {/each}
        </div>
      </div>
    </div>
    <button class="add-user">
      <i class="fa-solid fa-plus" />
      <p>Tilføj</p>
    </button>
  </div>

  <!-- ! table -->
  <div class="table">
    <table>
      <thead>
        <tr>
          {#each tableHeadings as heading, index}
            <th on:click={() => sortTable(tableDataFiltered, index)}
              >{heading}</th
            >
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each tableDataFiltered.slice((page - 1) * 20, page * 20 - 1) as row, rowIndex}
          <tr
            class:row-even={rowIndex % 2 === 0}
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
  </div>

  <!-- ! pagination -->
  <div class="koedsovs">
    <div class="pagination">
      <button id="one" on:click={PageChangeDown}
        ><i class="fa-solid fa-angle-left" /></button
      >
      {#if page >= 3}
        <button
          id="two"
          on:click={() => {
            PageChangeTo(1);
          }}>1</button
        >
      {/if}
      {#if page === 1}
        <button id="four" class="currentPage">{page}</button>
        <button
          id="five"
          on:click={() => {
            PageChangeTo(page + 1);
          }}>{page + 1}</button
        >
        <button
          id="six"
          on:click={() => {
            PageChangeTo(page + 2);
          }}>{page + 2}</button
        >
      {:else if page > 1 && page < Math.ceil(tableDataFiltered.length / 20)}
        <button
          id="four"
          on:click={() => {
            PageChangeTo(page - 1);
          }}>{page - 1}</button
        >
        <button id="five" class="currentPage">{page}</button>
        <button
          id="six"
          on:click={() => {
            PageChangeTo(page + 1);
          }}>{page + 1}</button
        >
      {:else}
        <button
          id="four"
          on:click={() => {
            PageChangeTo(page - 2);
          }}>{page - 2}</button
        >
        <button
          id="five"
          on:click={() => {
            PageChangeTo(page - 1);
          }}>{page - 1}</button
        >
        <button id="six" class="currentPage">{page}</button>
      {/if}

      {#if page <= Math.ceil(tableDataFiltered.length / 20) - 2}
        <button
          id="eight"
          on:click={() => {
            PageChangeTo(page + 2);
          }}>{Math.ceil(tableDataFiltered.length / 20)}</button
        >
      {/if}
      <button id="nine" on:click={PageChangeUp}
        ><i class="fa-solid fa-angle-right" /></button
      >
    </div>
  </div>
</div>

<style>
  /* pegination */
  .pagination button {
    width: 2.5rem;
    height: 2.5rem;
  }
  #five {
    grid-column-start: 5;
  }
  #four {
    grid-column-start: 4;
  }
  #six {
    grid-column-start: 6;
  }
  #three {
    grid-column-start: 3;
  }
  #seven {
    grid-column-start: 7;
  }
  #eight {
    grid-column-start: 8;
  }
  #nine {
    grid-column-start: 9;
  }
  #one {
    grid-column-start: 1;
  }
  #two {
    grid-column-start: 2;
  }
  .pagination {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    gap: 0.5rem;
    align-items: center;
    width: fit-content;
  }
  .currentPage {
    background-color: var(--p);
    color: #fff;
  }
  .koedsovs {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  /* main */

  .content {
    padding: 1rem 1rem;
    display: grid;
    grid-template-rows: 40px auto 2.5rem;
    gap: 0.5rem;
    width: 100%;
    overflow-y: hidden;
    height: 100%;
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
  /* controls */
  .controls {
    width: 100%;

    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
  /* button */
  .add-user {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    background: var(--p);
    border: none;
    transition: background-color 100ms ease-in-out;
    cursor: pointer;
  }

  .add-user > * {
    color: #fff;
  }
  /* dropdown */
  .hidden {
    display: none;
  }
  .dropdown {
    position: relative;
    width: 8rem;
    border-radius: 10px;

    background-color: var(--bg2);
  }
  .dropdown-btn {
    border: solid 1px var(--text1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;

    font-size: 1rem;
    height: 2.2rem;

    padding: 0 12px;
    width: 100%;
  }
  .dropdown-btn:focus {
    outline: none;
    border: 3px solid var(--p);
  }
  .options {
    position: absolute;
    left: 0;
    top: 3rem;
    width: 100%;
    border-radius: 10px;
    background: var(--bg2);
    padding: 0.1rem;
    border: solid 1px var(--text1);
  }
  .option-btn {
    width: 100%;
    padding: 0.5rem;
    margin: 0.1rem;
    border: none;
    border-radius: 10px;
  }
  /* search */
  .search {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .search-wrapper:focus-within {
    outline: 3px solid var(--p);
    border: none;
  }
  .search-wrapper {
    border-radius: 10px;
    background-color: var(--bg2);

    padding-left: 12px;
    height: 2.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 480px;
    color: var(--text1);
    box-shadow: 0 2px 6px 0 rgba(136, 148, 171, 0.2),
      0 24px 20px -24px rgba(71, 82, 107, 0.1);
    overflow: hidden;
    outline: 1px solid var(--text1);
  }
  .search-wrapper * {
    box-shadow: none;
  }
  .search-input {
    border: none;
    flex: 1;

    outline: none;
    height: 100%;
    font-size: 16px;
    background-color: var(--search-area-bg);
    color: var(--text1);
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: var(--text2);
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: var(--text2);
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: var(--text2);
  }
</style>
