<script lang="js">
  //General
  import Table from "../../components/table.svelte";
  import TableSimplified from "../../components/table-simplified.svelte";
  import getData from "../../data/getData";
  import { onMount } from "svelte";

  let user = {};
  let products = [];
  let returnDate = new Date();
  let loanType;
  let locationOfUseId;
  let employee;

  //data
  let inputDataUser = [{}]; //get data onMount
  let inputDataProducts = [{}]; //get data onMount
  let zones = [{}]; //get data onMount
  onMount(async () => {
    inputDataUser = await getData("users_view");
    inputDataProducts = await getData("available_products_view");
    inputDataProducts = inputDataProducts.slice(0, 10); // for testing
    zones = await getData("zones");
    console.log(zones);
  });

  //same page navigation
  export let page = 1;

  //Users
  function handleUserSelection(event) {
    user = event.detail;
    page++;
  }
  function userIsValid() {
    if (!user.UUID) return false;
    return true;
  }

  //Products
  function validateProducts() {
    if (products.length == 0) {
      return false;
    }
    return true;
  }

  function handleAddProduct(event) {
    //move product from inputDataProducts to products
    let product = event.detail;
    if (inputDataProducts.length == 0) return;

    products.push(inputDataProducts.splice(inputDataProducts.indexOf(product), 1)[0]);
    products = products; inputDataProducts = inputDataProducts
  }
  function handleRemoveProduct(event) {
    //move product from products to inputDataProducts
    let product = event.detail;
    inputDataProducts.push(products.splice(products.indexOf(product), 1)[0]);
    products = products; inputDataProducts = inputDataProducts
  }

  //info

  //now

  //default date
  returnDate.setMonth(returnDate.getMonth() + 1);
  //create max date on 6 months
  let minDate = new Date();
  let maxDate = new Date();
  maxDate.setMonth(minDate.getMonth() + 6);

  import { DateInput } from "date-picker-svelte";
  function validateInfo() {
    if (!returnDate || !locationOfUseId || !loanType || !employee) {
      return false;
    }
  }
</script>

<div class="content">
  <div class="navigation-bar">
    <button
      on:click={() => {
        page = 1;
      }}
      class:current={1 === page}
      class:invalid={page > 1 && !userIsValid()}
      class:valid={page > 1 && userIsValid()}
      class="page-nav-btn"
    >
      <i class="fa-solid fa-user" />
      <p>Bruger</p>
      {#if user.Brugernavn}
        <span>|</span>
        <span>{user.Brugernavn} </span>
      {/if}
    </button>
    <i class="fa-solid fa-angles-right" />
    <button
      on:click={() => {
        page = 2;
      }}
      class:current={2 === page}
      class:invalid={page > 2 && !validateProducts()}
      class:valid={page > 2 && validateProducts()}
      class="page-nav-btn"
    >
      <i class="fa-solid fa-cart-shopping" />
      <p>Produkter</p>
      {#if products.length > 0}
        <span>|</span>
        <span>{products.length}</span>
      {/if}
    </button>
    <i class="fa-solid fa-angles-right" />
    <button
      on:click={() => {
        page = 3;
      }}
      class:current={3 === page}
      class:invalid={page > 3 && !validateInfo()}
      class:valid={page > 3 && validateInfo()}
      class="page-nav-btn"
    >
      <i class="fa-solid fa-info" />
      <p>Info</p>
    </button>
    <i class="fa-solid fa-angles-right" />
    <button
      on:click={() => {
        page = 4;
      }}
      class:current={4 === page}
      class="page-nav-btn"
    >
      <i class="fa-solid fa-file-signature" />
      <p>Gemmense</p>
    </button>
  </div>

  {#if page === 1}
    <!-- ! User -->
    <div class="table">
      <Table
        inputData={inputDataUser}
        on:message={handleUserSelection}
        buttonDestination="/brugere/new"
      />
    </div>
  {:else if page === 2}
    <!-- ! Products -->
    <div class="tables">
      <div class="splitscreen">
        <Table on:message={handleAddProduct} inputData={inputDataProducts} />
      </div>
      {#if products.length > 0}
        <TableSimplified
          on:message={handleRemoveProduct}
          inputData={products}
        />
      {:else}
        <div class="center">
          <p>Tryk for at tilføje produkter</p>
        </div>
      {/if}
    </div>
  {:else if page === 3}
    <!-- ! Info -->
    <div class="grid">
      <div class="grid-item g1">
        <h4>Retur dato</h4>
        <hr />
        <DateInput
          visible={true}
          bind:value={returnDate}
          max={maxDate}
          format={"yyyy-MM-dd"}
          min={minDate}
        />
      </div>
      <div class="grid-item g2">
        <h4>Låner typpe</h4>
        <hr />
        <div class="options">
          <div class="option">
            <input
              type="radio"
              bind:group={loanType}
              name="loantype"
              value="1"
            />
            <label for="loantype">Til et lokale</label>
          </div>
          <div class="option">
            <input
              type="radio"
              bind:group={loanType}
              name="loantype"
              value="2"
            />
            <label for="loantype">Til én person</label>
          </div>
        </div>
      </div>
      <div class="grid-item g3">
        <h4>Lokaitet</h4>
        <hr />
        <select bind:value={locationOfUseId}>
          {#each zones as zone}
            <option value={zone.UUID}>{zone.name}</option>
          {/each}
        </select>
      </div>
    </div>
  {:else if page === 4}
    <h1>Checkout</h1>
  {/if}
</div>

<style>
  input[type="radio"] {
    width: 1rem;
    height: 1rem;
    margin: 0 0.5rem;
  }
  select {
    min-width: 10rem;
    background: transparent;
    color: var(--text1);
    height: 40px;
    border: var(--text1) 1px solid;
    border-radius: 10px;
    font-size: 1rem;
    padding: 10px 15px;
  }
  .options {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 1fr);
    gap: 2rem 3rem;
    height: 100%;
    padding: 1rem;
  }
  hr {
    max-width: 30rem;
  }
  .grid-item {
    /* background: #f002; */
  }
  .g1 {
    grid-column: 1/2;
    grid-row: 1/2;
  }
  .g2 {
    grid-column: 1/2;
    grid-row: 2/3;
  }
  .navigation-bar {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;
  }
  .content {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 56px 1fr;
  }
  .table {
    overflow: auto;
  }
  .page-nav-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    background: var(--bg1);
    border: var(--text1) solid 1px;
    width: 100%;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    text-align: start;
  }
  .page-nav-btn:hover {
    color: var(--p);
  }
  .page-nav-btn:focus {
    outline: solid 3px var(--p);
  }
  .fa-angles-right {
    color: var(--text2);
    font-size: 1rem;
  }
  .invalid {
    border: var(--s) solid 3px;
  }
  .current {
    border: var(--i) solid 3px;
  }
  .valid {
    border: none;
    background: var(--bg2);
  }

  .center {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .tables {
    display: flex;

    gap: 1rem;
    width: 100%;
    overflow: auto;
  }
  .splitscreen {
    width: 100%;
    height: 100%;
  }
  hr {
    margin: 0.5rem 0;
    border: solid 1px var(--text2);
  }
  span {
    color: var(--text2);
  }
</style>
