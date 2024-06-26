<script lang="ts">
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";
  import { path } from "../stores/pathStore";
  import { createEventDispatcher } from "svelte";

  export let buttonDestination = "";
  export let extraButton = "";
  export let filterKey = "UUID";
  export let sortBy = "UUID";

  const dispatch = createEventDispatcher();
  function forwardId(object) {
    dispatch("message", object);
  }
  function handleExtraBttonClick() {
    dispatch("action");
  }

  //import data
  export let headers = [];
  export let values = [];
  export let exclude = [];

  //resort data every time inputData changes
  // $: inputData && sortTable(inputData, sortColumn);

  $: tableData = values;

  export let sortAscending = true; //used to determine if the table should be sorted ascending or descending
  let sortColumn = -1; //used to determine which column the table should be sorted by
  let searchPromt = ""; //used to determine what the user is searching for
  $: tableDataFiltered = values; //used to determine what data should be displayed in the table after filtering
  let page = 1; //used to determine which page the user is on and which data should be displayed
  let items_per_page = 20; //used to determine how many items should be displayed per page

  let dropdownOpen = false; //used to determine if the dropdown is open

  //log all state variables
  $: filterKey && filterData(), values;

  function toggleDropdown() {
    dropdownOpen = !dropdownOpen;
  }

  //sortTable
  function sortTable(data: any, columnKey: any, disableActiveSort = false) {
    if (disableActiveSort !== true) {
      if (columnKey === sortColumn) {
        sortAscending = !sortAscending;
      } else {
        sortAscending = true;
        sortColumn = columnKey;
      }
    }

    const sortedData = data.sort((a, b) => {
      if (a[columnKey] === undefined || b[columnKey] === undefined) return 0;
      let valueA = a[columnKey];
      let valueB = b[columnKey];

      valueA =
        typeof valueA === "string" ? valueA.toString().toLowerCase() : valueA;
      valueB =
        typeof valueB === "string" ? valueB.toString().toLowerCase() : valueB;

      return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
    });

    if (!sortAscending) tableDataFiltered = sortedData.reverse();
    else tableDataFiltered = sortedData;
  }

  onMount(() => {
    sortTable(tableDataFiltered, sortBy);
  });

  // $: sortTable(tableDataFiltered, sortBy);

  //filter Data
  function filterData() {
    page = 1;

    let searchValue = searchPromt.toLowerCase();

    if (filterKey == "Barcode") {
      const barcodeSplit = searchPromt.toLowerCase().split(".");
      const barcodeId = barcodeSplit.pop();

      let addValue = "";

      if (!isNaN(Number(barcodeId)) && barcodeId) {
        addValue = ("000" + barcodeId).slice(-4);
        ("000" + barcodeId).slice(-4);
      } else {
        addValue = barcodeId;
      }

      barcodeSplit.push(addValue);

      searchValue = barcodeSplit.join(".");
    }

    const filteredData = tableData.filter((row) => {
      let value = row[filterKey];
      value = value ? value.toString().toLowerCase() : "";
      return value.includes(searchValue);
    });

    tableDataFiltered = filteredData;
  }

  $: dataToShow = tableDataFiltered.slice(
    (page - 1) * items_per_page,
    page * items_per_page
  );

  let topRow: HTMLElement;

  onMount(() => {
    topRow = document.getElementById("top-row");
  });

  //change page
  function PageChangeUp() {
    if (page < tableDataFiltered.length / items_per_page) {
      page += 1;

      topRow.scrollIntoView({ behavior: "smooth" });
    }
  }

  function PageChangeDown() {
    if (page > 1) {
      page -= 1;

      topRow.scrollIntoView({ behavior: "smooth" });
    }
  }

  function PageChangeTo(pageNumber: number) {
    page = pageNumber;

    topRow.scrollIntoView({ behavior: "smooth" });
  }

  function handleButtonClick() {
    if (buttonDestination) {
      navigate(buttonDestination);
      path.update(() => {
        return buttonDestination;
      });
    }
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
          <p>{filterKey}</p>
          <i class="fa-solid fa-angle-down" />
        </button>
        <div class="options" class:hidden={!dropdownOpen}>
          {#each headers as option}
            {#if !exclude.includes(option)}
              <button
                class="option-btn"
                on:click={() => {
                  filterKey = option;
                  toggleDropdown();
                }}
              >
                <p>{option}</p>
              </button>
            {/if}
          {/each}
        </div>
      </div>
    </div>
    {#if extraButton.length > 0}
      <button class="extra-button" on:click={handleExtraBttonClick}
        >{extraButton}</button
      >
    {/if}
    <slot name="controls" />
    {#if buttonDestination}
      <button class="add-user" on:click={handleButtonClick}>
        <i class="fa-solid fa-plus" />
        <p>Tilføj</p>
      </button>
    {/if}
  </div>

  <!-- ! table -->
  <div class="table-container">
    <table>
      <thead id="top-row">
        <tr>
          {#each headers as heading}
            {#if !exclude.includes(heading)}
              <th
                on:click={() => sortTable(tableDataFiltered, heading)}
                class="w-40"
              >
                <div class="flex gap-3 items-center">
                  <p>{heading}</p>
                  {#if sortColumn.toString() == heading}
                    <i
                      class={`fa-solid fa-arrow-${
                        sortAscending ? "down" : "up"
                      }`}
                    />
                  {/if}
                </div>
              </th>
            {/if}
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each dataToShow as row, rowIndex}
          <tr
            class:row-even={rowIndex % 2 === 0}
            on:click={() => {
              forwardId(row);
            }}
          >
            {#each Object.entries(row) as [key, value]}
              {#if !exclude.includes(key)}
                <td
                  >{typeof value == "string" &&
                  Date.parse(value) &&
                  [
                    "Oprettet",
                    "Opdateret",
                    "Returneret",
                    "Returneringsdato",
                  ].includes(key)
                    ? new Date(value).toLocaleDateString("da-DK", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                        weekday: "short",
                      })
                    : value}</td
                >
              {/if}
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <!-- ! pagination -->
  <div class="koedsovs">
    <div class="pagination">
      {#if page > 1}
        <button id="one" on:click={PageChangeDown} name="previous">
          <i class="fa-solid fa-angle-left" />
        </button>
      {/if}

      {#if page >= 2}
        <button
          id="two"
          on:click={() => {
            PageChangeTo(1);
          }}>1</button
        >
      {/if}
      {#if page >= 3}
        <p id="three">...</p>
      {/if}

      <button id="four" class="currentPage">{page}</button>
      {#if page < Math.ceil(tableDataFiltered.length / items_per_page) - 1}
        <p id="five">...</p>
      {/if}
      {#if page < Math.ceil(tableDataFiltered.length / items_per_page)}
        <button
          id="six"
          on:click={() => {
            PageChangeTo(Math.ceil(tableDataFiltered.length / items_per_page));
          }}>{Math.ceil(tableDataFiltered.length / items_per_page)}</button
        >
      {/if}

      {#if page < Math.ceil(tableDataFiltered.length / items_per_page)}
        <button id="seven" on:click={PageChangeUp} name="next">
          <i class="fa-solid fa-angle-right" />
        </button>
      {/if}
    </div>
  </div>
  <p>
    viser {page * items_per_page - (items_per_page - 1)} til {page *
      items_per_page -
      items_per_page +
      dataToShow.length}
    ud af {tableDataFiltered.length}
  </p>
</div>

<style>
  /* pegination */
  .pagination button {
    width: 2.5rem;
    height: 2.5rem;
    background: var(--bg2);
    border: 1px solid var(--text1);
    border-radius: 8px;
    font-size: 1rem;
  }
  .extra-button {
    background: var(--bg2);
    border: 1px solid var(--text1);
    border-radius: 8px;
    font-size: 1rem;
    padding: 0rem 2rem;
  }
  .pagination button:not(.currentPage):hover {
    background: var(--bg3);
    box-shadow:
      rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
      rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
      rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    cursor: pointer;
  }
  .currentPage {
    background-color: var(--p) !important;
    color: #fff !important;
  }
  .pagination p {
    text-align: center;
    width: 100%;
  }
  #five {
    grid-column-start: 5;
  }
  #four {
    grid-column-start: 4;
  }

  #three {
    grid-column-start: 3;
  }

  #one {
    grid-column-start: 1;
  }
  #two {
    grid-column-start: 2;
  }
  #six {
    grid-column-start: 6;
  }
  #seven {
    grid-column-start: 7;
  }
  .pagination {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 0.5rem;
    align-items: center;
    width: fit-content;
  }

  .pagination > button {
    transition: all 0.1s ease-in-out;
  }

  .pagination > button:active {
    transform: scale(0.9);
  }

  .koedsovs {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  /* main */

  .content {
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem;
    gap: 0.5rem;
    width: 100%;
    overflow-y: hidden;
    height: 100%;
    min-height: 35rem;
  }

  /* table */
  table {
    width: 100%;
    border-collapse: collapse;
  }
  .table-container {
    width: 100%;
    height: 100%;
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
  /* controls */
  .controls {
    width: 100%;
    height: 2.5rem;

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
    border-radius: 10px;
    height: 100%;
  }
  .dropdown-btn {
    border: solid 1px var(--text1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    background-color: var(--bg2);
    font-size: 1rem;
    padding: 0 12px;
    width: 100%;
    height: 100%;
    gap: 0.5rem;
  }
  .dropdown-btn:focus {
    border: none;
    outline: 3px solid var(--p);
  }
  .dropdown-btn:hover {
    background: var(--bg3);
    box-shadow:
      rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
      rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
      rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    cursor: pointer;
  }
  .options {
    position: absolute;
    left: 0;
    top: 3rem;
    /* width: 100%; */
    border-radius: 10px;
    background: var(--bg2);

    border: solid 1px var(--text1);
    z-index: 10;
  }
  .option-btn {
    width: 100%;

    padding: 0.75rem 0.5rem;

    border: none;
    border-radius: 10px;
    background: var(--bg2);
  }
  .option-btn:hover {
    background: var(--bg3);
    cursor: pointer;
  }
  .option-btn:focus {
    border: 3px solid var(--p);
    outline: none;
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
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 480px;
    color: var(--text1);
    box-shadow:
      0 2px 6px 0 rgba(136, 148, 171, 0.2),
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
    margin-left: 12px;
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
