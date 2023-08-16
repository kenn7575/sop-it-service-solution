<script lang="js">
  import { barcodeStore, controlStore } from "../../stores/barcodeStore";
  import { currentUser } from "../../services/login";

  function handleBarcode(code) {
    if (!$barcodeStore) return; //if barcode is empty
    //check if barcode is being added or removed
    if (!$controlStore) {
      //add
      const product = inputDataProducts.find((o) => o.UUID == code);
      if (products.find((o) => o.UUID == code)) {
        alert("Produktet er allerede tilføjet");
        return;
      }
      if (!product) {
        alert("Produktet findes ikke");
        return;
      }
      handleAddProduct({ detail: product });
    } else {
      //remove
      const product = products.find((o) => o.UUID == code);
      if (!product) {
        return;
      }
      if (inputDataProducts.find((o) => o.UUID == code)) {
        return;
      }
      handleRemoveProduct({ detail: product });
    }
  }
  $: handleBarcode($barcodeStore);

  //General
  import { translateMonth } from "../../services/translateMonth";
  import Table from "../../components/table.svelte";
  import TableSimplified from "../../components/table-simplified.svelte";
  import getData from "../../data/getData";
  import { onMount } from "svelte";
  import axios from "axios";
  import goToPath from "../../services/goToPath";

  const page_name = "udlaan";
  const table = "loans";

  //data to be exported
  let user = {};
  let products = [];
  let returnDate = new Date();
  let loanType = 2;
  let locationOfUseId = 1;
  let employee;
  let password;
  $: loanLength = Math.round(
    (returnDate.getTime() - new Date().getTime()) / (1000 * 3600 * 24)
  );
  $: user_id = user.UUID;
  $: productIds = products.map((product) => product.UUID);
  $: console.log({
    user_id,
    products,
    returnDate,
    loanType,
    employee,
    loanLength,
    locationOfUseId,
  });

  //import data
  let loanTypes = [
    { name: "Til person", id: 2 },
    { name: "Til lokale", id: 1 },
  ]; //get data onMount
  let personel = [{}]; //get data onMount
  let inputDataUser = [{}]; //get data onMount
  let inputDataProducts = [{}]; //get data onMount
  let zones = [{}]; //get data onMount
  onMount(async () => {
    personel = await getData("personnel_users");
    inputDataUser = await getData("users_view");
    inputDataProducts = await getData("available_products_view");
    zones = await getData("zones");
  });

  //same page navigation
  export let page = 1;
  let showDatePicker = true;

  //Users
  function handleUserSelection(event) {
    user = event.detail;
    page++;
  }
  function validateUser() {
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

    products.push(
      inputDataProducts.splice(inputDataProducts.indexOf(product), 1)[0]
    );
    products = products;
    inputDataProducts = inputDataProducts;
  }
  function handleRemoveProduct(event) {
    //move product from products to inputDataProducts
    let product = event.detail;
    inputDataProducts.push(products.splice(products.indexOf(product), 1)[0]);
    products = products;
    inputDataProducts = inputDataProducts;
  }

  //info

  //default date
  returnDate.setMonth(returnDate.getMonth() + 1);
  //create max date on 6 months
  let minDate = new Date();
  let maxDate = new Date();
  maxDate.setMonth(minDate.getMonth() + 6);

  import { DateInput } from "date-picker-svelte";
  import TextQuestion from "../../components/textQuestion.svelte";
  function validateInfo() {
    if (returnDate === undefined) {
      console.log("returnDate === undefined");
      return false;
    }
    if (!locationOfUseId) {
      console.log("!locationOfUseId");
      return false;
    }
    if (!loanType) {
      console.log("!loanType");
      return false;
    }
    if (!password) {
      console.log("!password");
      console.log(password)
      return false;
    }
    return true;
  }

  //checkout
  async function createLoan() {
    const loan = {
      user_id,
      loan_length: loanLength,
      recipient_type_id: loanType,
      location_of_use_id: locationOfUseId,
      helpdesk_personel_id: $currentUser.UUID,
    };

    const validatePassword = await axios.post("validate_password.php", {
      password, user_password: $currentUser.password
    }).then(res => res.data)

    if (!validatePassword.success) {
      alert("Forkert kode");
      return;
    }

    const { data } = await axios.post("create_loan.php", { loan, products });
    if (data && data?.success && data?.id) {
      alert("Gemt");

      goToPath(`/${page_name.toLowerCase()}/${data.id}`);
    } else {
      alert("Error 500 - " + data?.data);
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
      class:invalid={page > 1 && !validateUser()}
      class:valid={page > 1 && validateUser()}
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
        console.log(validateInfo(), validateProducts(), validateUser());
        if (validateInfo() && validateProducts() && validateUser()) {
          page = 4;
        } else {
          alert("Du kan ikke gå videre før alle felter er udfyldt");
        }
      }}
      class:current={4 === page}
      class="page-nav-btn"
    >
      <i class="fa-solid fa-file-signature" />
      <p>Gennemse</p>
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
      <div class="table-group">
        {#if $controlStore}
          <p style="color: var(--s)">Scanning mode: Fravælg</p>
        {:else}
          <p>Scanning mode: Tilføj</p>
        {/if}
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
    </div>
  {:else if page === 3}
    <!-- ! Info -->
    <div class="grid">
      <div class="grid-item g1">
        <h4>Retur dato</h4>
        <hr />
        <div class="btn-group">
          <DateInput
            visible={showDatePicker}
            bind:value={returnDate}
            max={maxDate}
            format={"yyyy-MM-dd"}
            min={minDate}
          />
          <button
            on:click={() => {
              returnDate = maxDate;
              showDatePicker = false;
            }}
            class="max-time-btn"
            class:is-max={returnDate === maxDate}
          >
            max
          </button>
        </div>
      </div>
      <div class="grid-item g2">
        <h4>Låner type</h4>
        <hr />
        <select bind:value={loanType}>
          {#each loanTypes as type}
            <option value={type.id}>{type.name}</option>
          {/each}
        </select>
      </div>
      <div class="grid-item g3">
        <h4>Lokalitet</h4>
        <hr />
        <select bind:value={locationOfUseId}>
          {#each zones as zone}
            <option value={zone.UUID}>{zone.name}</option>
          {/each}
        </select>
      </div>
      <div class="grid-item g3">
        <form>
          <TextQuestion label="Kode" type="password" bind:binding={password} editMode={true}/>
        </form>
      </div>
    </div>
  {:else if page === 4}
    <div class="wrapper">
      <div class="chechout-container">
        <div class="info-container">
          <ul>
            <li>Bruger: {user.Brugernavn}</li>
            <li>Produkter: {products.length}</li>
            <li>
              Retur dato: {returnDate.getFullYear()}
              {translateMonth(returnDate.getMonth())}
              {returnDate.getDate()}
            </li>
            <li>
              Låner type: {loanTypes.find((o) => o.id === loanType).name ??
                "Ikke sat"}
            </li>
            <li>
              Lokalitet: {zones.find((o) => o.UUID === locationOfUseId).name}
            </li>
            <li>
              Medarbejder: {$currentUser.name}
            </li>
          </ul>
        </div>
        <div class="table">
          <TableSimplified inputData={products} title="" />
        </div>
      </div>
      <div class="button-container">
        <button
          class="create-btn"
          on:click={createLoan}
          disabled={!validateInfo || !validateProducts || !validateUser}
        >
          Opret
        </button>
      </div>
    </div>
  {/if}
</div>

<style>
  .wrapper {
    display: block;
  }
  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
  .create-btn {
    width: 300px;
    min-height: 2rem;
    height: 2rem;
    color: var(--text1);
    border: 1px solid var(--text1);
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
    background: var(--p);
  }
  .chechout-container {
    display: flex;
    margin-top: 2rem;
    gap: 1rem;
    height: min-content;
  }
  .info-container {
    width: 50%;
  }
  .chechout-container ul {
    list-style: none;
    padding: 0;
    margin: 0;
    border: solid 1px var(--text1);
    padding: 1rem;
    border-radius: 15px;
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
  .table-group {
    min-width: 50%;
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
  .btn-group {
    display: flex;
    gap: 1rem;
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
  .max-time-btn {
    background: transparent;
    border: 1px solid var(--text1);
    border-radius: 5px;
    padding: 0 1rem;
    color: var(--text1);
    font-size: 1rem;
    cursor: pointer;
  }
  .max-time-btn:hover {
    background: var(--bg2);
  }
  .is-max,
  .is-max:hover {
    background: var(--p);
  }
  hr {
    margin: 0.5rem 0;
    border: solid 1px var(--text2);
  }
  span {
    color: var(--text2);
  }
</style>
