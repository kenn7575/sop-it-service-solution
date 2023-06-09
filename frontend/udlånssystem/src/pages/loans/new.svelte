<script lang="js">
  //General
  import Table from "../../components/table.svelte";
  import { getData } from "../../data/data";
  import { onMount } from "svelte";

  //Data to be sent
  let user = { id: "", unilogin: "" };
  let products = [];
  let info = {
    returnDate: "",
    department: "",
    loanType: "",
    location: "",
    employee: "",
  };

  //data
  onMount(async () => {
    inputDataUser = await getData("users_view");
    inputDataProducts = await getData("available_products_view");
  });

  //same page navigation
  export let page = 1;

  //Users
  function handleUserSelection(event) {
    let keys = event.detail.id;
    let values = event.detail.value;
    console.log(keys, values);
    page++;
  }

  let inputDataUser = [[]];

  function validateUser() {
    if (!user) {
      return false;
    }
    return true;
  }

  //Products
  let inputDataProducts = [[]];
  function validateProducts() {
    if (products.length == 0) {
      return false;
    }
    return true;
  }
  function handleAddProduct(event) {
    console.log("clicked");

    let id = event.detail.id;
    console.log(id);
    products.push([1, 1, 1, 1]);
    products = products;
    //remove from inputdataProducts
    inputDataProducts = inputDataProducts.filter((row) => {
      return row[0] != id;
    });
  }

  //info

  //now
  let date = new Date();
  //default date
  let defaultDate = new Date();
  date.setMonth(date.getMonth() + 1);
  //create max date on 6 months
  let maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 6);

  import { DateInput } from "date-picker-svelte";
  function validateInfo() {
    if (
      !info.returnDate ||
      !info.department ||
      !info.loanType ||
      !info.location ||
      !info.employee
    ) {
      return false;
    }
  }
</script>

<div class="navigation-bar">
  <button
    on:click={() => {
      page = 1;
    }}
    class:current={1 === page}
    class:invalid={page > 1 && !validateUser()}
    class:valid={page > 1 && validateUser()}
    class="page-nav-btn"
  >
    <i class="fa-solid fa-user" />
    <p>Bruger</p>
    {#if user.unilogin}
      <span>|</span>
      <span>{user.unilogin} </span>
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
    <!-- {#if products.length > 0}
      <span>|</span>
      <span>{products.length} gendstande</span>
    {/if} -->
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
    <Table inputData={inputDataUser} on:message={handleUserSelection} />
  </div>
{:else if page === 2}
  <!-- ! Products -->
  <div class="tables">
    <Table on:message={handleAddProduct} inputData={inputDataProducts} />
    <Table inputData={[["UUID", "Navn", "Producent", "Antal"], ...products]} />
  </div>
{:else if page === 3}
  <DateInput
    bind:value={defaultDate}
    max={maxDate}
    format={"yyyy-MM-dd"}
    min={date}
  />
{/if}

<style>
  .navigation-bar {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;
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
  .table {
    width: 100%;
    height: 100%;
  }
  .tables {
    display: flex;
    gap: 1rem;
    width: 100%;
    height: calc(100% - 4rem);
  }
  span {
    color: var(--text2);
  }
</style>
