<script lang="ts">
  //Barcode
  import { barcodeStore, controlStore } from "../../stores/barcodeStore";
  async function handleBarcode(code) {
    if (!$barcodeStore) return; //if barcode is empty
    //check if barcode is being added or removed
    if (!$controlStore) {
      //add

      if (importProducts.length == 0)
        importProducts = (await getData("available_products_view")).data;

      var product = importProducts.find(
        (o: productModel & { Barcode: string }) => o.Barcode == code
      );

      if (products.find((o) => o.Barcode == code))
        return alert("Produktet er allerede tilføjet");

      if (!product) {
        [product] = (await getData("items_from_loans?Barcode=" + code)).data;

        if (product) return alert("Produktet er allerede lånt ud");
      }

      if (!product) return alert("Produktet findes ikke");

      handleAddProduct({ detail: product });
    } else {
      //remove
      const product = products.find(({ UUID }) => UUID == code);
      if (!product) return;

      if (importProducts.find(({ UUID }) => UUID == code)) return;

      handleRemoveProduct({ detail: product });
    }
  }
  $: handleBarcode($barcodeStore);

  //General
  import { currentUser } from "../../services/login";
  import translateMonth from "../../services/translateMonth.json";
  import Table from "../../components/table.svelte";
  import TableSimplified from "../../components/table-simplified.svelte";
  import getData from "../../data/getData";
  import { onMount } from "svelte";
  import axios from "axios";
  import goToPath from "../../services/goToPath";
  const page_name = "udlaan";

  //data to be exported
  let user: any = {};
  let products = [] as (itemsView & { withBag: boolean; withLock: boolean })[];
  let cables = [];
  let returnDate = new Date();
  let loanType = 2;
  let locationOfUseId = 1;
  let employee;
  let password;
  $: loanLength = Math.round(
    (returnDate?.getTime() - new Date().getTime()) / (1000 * 3600 * 24)
  );
  //import data
  let loanTypes = [
    { name: "Til person", id: 2 },
    { name: "Til lokale", id: 1 },
  ]; //get data onMount
  let importUsers: userModel[] = []; //get data onMount
  let userHeaders: string[] = []; //get data onMount
  let importProducts: productModel[] = []; //get data onMount
  let productHeaders: string[] = []; //get data onMount
  let importZones: zoneModel[] = []; //get data onMount
  let importCables: cableView[] = []; //get data onMount
  let cableHeaders: string[] = []; //get data onMount
  let importCablesAvailable: cableView[] = []; //get data onMount
  onMount(async () => {
    const users = await getData("users_view");
    importUsers = users.data;
    userHeaders = users.headers;
    const products = await getData("available_products_view");
    importProducts = products.data;
    productHeaders = products.headers;
    importZones = (await getData("zones")).data;
    const cables = await getData("available_cables");
    importCables = cables.data;
    cableHeaders = cables.headers;
    importCablesAvailable = [...importCables] as cableView[];
    importCablesAvailable.map((c) => {
      return (c.Lånt = 0);
    });
  });

  //same page navigation
  export let page = 1;
  let showDatePicker = false;

  //Users
  //--------------------------------------------------------------------------------
  function handleUserSelection(event) {
    user = event.detail;
    page++;
  }
  function validateUser() {
    if (!user.UUID) return false;
    return true;
  }

  //Products
  //--------------------------------------------------------------------------------
  function validateProducts() {
    if (products.length == 0) return false;

    return true;
  }
  function handleAddProduct(event) {
    //move product from importProducts to products
    let product = event.detail;
    if (importProducts.length == 0) return;

    products.push(
      importProducts.splice(importProducts.indexOf(product), 1)[0] as any
    );
    products = products;
    importProducts = importProducts;
  }
  function handleRemoveProduct(event) {
    //move product from products to importProducts
    let product = event.detail;
    importProducts.push(
      products.splice(products.indexOf(product), 1)[0] as any
    );
    products = products;
    importProducts = importProducts;
  }

  //cabels
  //--------------------------------------------------------------------------------
  function validateCables() {
    if (cables.length <= 0) return false;

    return true;
  }
  function sum(list: number[]): number {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
      sum += list[i];
    }
    return sum;
  }

  function handleAddCable(event) {
    //move product from importProducts to products
    let cable: cableView = event.detail;
    if (importCables.length == 0) return;

    cable.Tilgaengelige--;
    cable.Lånt++;

    const thisCable = cables.find((c) => c.UUID == cable.UUID);
    var indexCable = cables.find((c) => c.UUID > cable.UUID);

    if (thisCable) {
      if (cable.Tilgaengelige == 0)
        importCables.splice(importCables.indexOf(cable), 1)[0];
    } else {
      if (cable.Tilgaengelige == 0)
        cables.splice(
          cables.indexOf(indexCable),
          0,
          importCables.splice(importCables.indexOf(cable), 1)[0]
        );
      if (cable.Tilgaengelige >= 1)
        cables.splice(cables.indexOf(indexCable), 0, cable);
    }

    cables = cables;
    importCables = importCables;
  }
  function handleRemoveCable(event) {
    //move product from products to importProducts
    let cable = event.detail;
    if (cables.length == 0) return;

    cable.Tilgaengelige++;
    cable.Lånt--;

    const thisCable = importCables.find((c) => c.UUID == cable.UUID);
    var indexCable = importCables.find((c) => c.UUID > cable.UUID);

    if (thisCable) {
      if (cable.Lånt == 0) cables.splice(cables.indexOf(cable), 1)[0];
    } else {
      if (cable.Lånt == 0)
        importCables.splice(
          importCables.indexOf(indexCable),
          0,
          cables.splice(cables.indexOf(cable), 1)[0]
        );
      if (cable.Lånt >= 1)
        importCables.splice(importCables.indexOf(indexCable), 0, cable);
    }

    cables = cables;
    importCables = importCables;
  }

  //info
  //--------------------------------------------------------------------------------
  returnDate.setMonth(returnDate.getMonth() + 1); //default date is 1 month
  let minDate = new Date(); //min date is today
  let maxDate = new Date(); //max date is 6 months from now
  maxDate.setMonth(minDate.getMonth() + 6);

  import { DateInput } from "date-picker-svelte";
  import TextQuestion from "../../components/textQuestion.svelte";
  import Index from "../login/index.svelte";
  function validateInfo() {
    if (returnDate === undefined) return false;

    if (!locationOfUseId) return false;

    if (!loanType) return false;

    return true;
  }

  //checkout
  //--------------------------------------------------------------------------------
  async function createLoan() {
    const loan = {
      user_id: user.UUID,
      loan_length: loanLength,
      recipient_type_id: loanType,
      location_of_use_id: locationOfUseId,
      helpdesk_personel_id: $currentUser.UUID,
    };

    const { data, status } = await axios.post("loans", {
      loan,
      products,
      cables,
      personel_username: $currentUser.username,
      personel_password: password,
    });
    if (status === 200) {
      alert("Gemt");

      goToPath(`/${page_name.toLowerCase()}/${data.loanId}`);
    } else {
      alert("Error 500 - " + data?.error);
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
      class:invalid={page > 2 && (!validateProducts() || !validateCables())}
      class:valid={(page > 2 && validateProducts()) || validateCables()}
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
      class:invalid={page > 3 && (!validateProducts() || !validateCables())}
      class:valid={(page > 3 && validateProducts()) || validateCables()}
      class="page-nav-btn"
    >
      <i class="fa-solid fa-cart-shopping" />
      <p>Kabler</p>
      {#if cables.length > 0}
        <span>|</span>
        <span>{sum(cables.map((c) => c.Lånt))}</span>
      {/if}
    </button>
    <i class="fa-solid fa-angles-right" />
    <button
      on:click={() => {
        page = 4;
      }}
      class:current={4 === page}
      class:invalid={page > 4 && !validateInfo()}
      class:valid={page > 4 && validateInfo()}
      class="page-nav-btn"
    >
      <i class="fa-solid fa-info" />
      <p>Info</p>
    </button>
    <i class="fa-solid fa-angles-right" />
    <button
      on:click={() => {
        if (
          validateInfo() &&
          (validateProducts() || validateCables()) &&
          validateUser()
        ) {
          page = 5;
        } else {
          alert("Du kan ikke gå videre før alle felter er udfyldt");
        }
      }}
      class:current={5 === page}
      class="page-nav-btn"
    >
      <i class="fa-solid fa-file-signature" />
      <p>Gennemse</p>
    </button>
  </div>
  <div class="main-content">
    {#if page === 1}
      <!-- ! User -->
      <div class="table-container">
        <Table
          headers={userHeaders}
          values={importUsers}
          on:message={handleUserSelection}
          filterKey="Brugernavn"
        />
      </div>
    {:else if page === 2}
      <!-- ! Products -->
      <div class="tables">
        <div class="splitscreen">
          <Table
            on:message={handleAddProduct}
            headers={productHeaders}
            values={importProducts}
            filterKey="Navn"
          />
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
      <!-- ! Cables -->
      <div class="tables">
        <div class="splitscreen">
          <Table
            on:message={handleAddCable}
            headers={cableHeaders}
            values={importCables}
            exclude={["Lånt"]}
            filterKey="Navn"
          />
        </div>
        <div class="table-group">
          {#if $controlStore}
            <p style="color: var(--s)">Scanning mode: Fravælg</p>
          {:else}
            <p>Scanning mode: Tilføj</p>
          {/if}
          {#if cables.length > 0}
            <TableSimplified
              on:message={handleRemoveCable}
              inputData={cables}
              exclude={["Total", "Tilgaengelige"]}
            />
          {:else}
            <div class="center">
              <p>Tryk for at tilføje produkter</p>
            </div>
          {/if}
        </div>
      </div>
    {:else if page === 4}
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
              disabled={returnDate === null}
            />
            <button
              on:click={() => {
                returnDate = maxDate;
                showDatePicker = false;
              }}
              class="max-time-btn"
              class:is-max={returnDate === maxDate}
              disabled={returnDate === null}
            >
              max
            </button>
            <button
              class="max-time-btn"
              class:is-max={returnDate === null}
              on:click={() => {
                if (returnDate) returnDate = null;
                else returnDate = new Date();
              }}>Uendeligt</button
            >
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
            {#each importZones as zone}
              <option class="dropdown-menu" value={zone.UUID}
                >{zone.name}</option
              >
            {/each}
          </select>
        </div>
        {#if products.some((p) => p.Kategori_Gruppe == "Laptop")}
          <table class="grid-item g4 w-2/3">
            <tr class="">
              <th class="w-3/4 text-left"><h4>Ekstra info</h4></th>
              <th><h4>Taske</h4></th>
              <th><h4>Lås</h4></th>
            </tr>

            <hr />
            {#each products.filter((p) => p.Kategori_Gruppe == "Laptop") as laptop}
              <tr>
                <td><p>{laptop.Navn} [#{laptop.UUID}]</p></td>

                <td>
                  <input
                    id="taske"
                    bind:checked={laptop.withBag}
                    type="checkbox"
                  />
                </td>
                <td>
                  <input
                    id="laas"
                    bind:checked={laptop.withLock}
                    type="checkbox"
                  />
                </td>
              </tr>
            {/each}
          </table>
        {/if}
      </div>
    {:else if page === 5}
      <div class="wrapper">
        <div class="chechout-container">
          <div class="info-container">
            <ul>
              <li>Bruger: {user?.Navn || user.Brugernavn}</li>
              <li>Produkter: {products.length}</li>
              <li>Kabler: {sum(cables.map(({ Lånt }) => Lånt))}</li>
              {#if returnDate}
                <li>
                  Retur dato: {returnDate.getFullYear()}
                  {translateMonth[returnDate.getMonth()]}
                  {returnDate.getDate()}
                </li>
              {:else}
                <li>Retur dato: Ingen</li>
              {/if}
              <li>
                Låner type: {loanTypes.find(({ id }) => id === loanType).name ??
                  "Ikke sat"}
              </li>
              <li>
                Lokalitet: {importZones.find(
                  ({ UUID }) => UUID === locationOfUseId
                ).name}
              </li>
              <li>
                Medarbejder: {$currentUser.fullName}
              </li>
            </ul>
          </div>
          {#if products.length > 0}
            <div class="table-container">
              <TableSimplified
                inputData={products}
                title="Produkter"
                disabled={true}
                exclude={["Stor. Loc. ID", "withBag", "withLock"]}
              />
            </div>
          {/if}
          {#if cables.length > 0}
            <div class="table-container">
              <TableSimplified
                inputData={cables}
                title="Kabler"
                disabled={true}
                exclude={["Total", "Tilgaengelige"]}
              />
            </div>
          {/if}
        </div>
        <div class="button-container">
          <form
            on:submit={(e) => {
              e.preventDefault();
              createLoan();
            }}
          >
            <TextQuestion
              label="Skriv adgangskoden til dit login"
              type="password"
              bind:binding={password}
              editMode={true}
            />
          </form>
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
</div>

<style>
  .tables {
    display: flex;
    gap: 1rem;
    width: 100%;
    height: 100%;
  }
  .splitscreen {
    width: 100%;
    max-height: 100%;
  }
  .main-content {
    max-height: calc(100vh - 8rem);
  }
  .wrapper {
    display: block;
  }
  .button-container {
    display: flex;
    flex-direction: column;
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
  .table-container {
    overflow: auto;
    width: 100%;
    height: 100%;
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

  .max-time-btn {
    background: transparent;
    border: 1px solid var(--text1);
    border-radius: 5px;
    padding: 0 1rem;
    color: var(--text1);
    font-size: 1rem;
    cursor: pointer;

    transition: all 0.2s ease-in-out;
  }
  .max-time-btn:hover {
    background: var(--bg2);
  }
  .max-time-btn:disabled {
    cursor: default;
    opacity: 0.5;
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

  option {
    background-color: var(--bg1);
    color: var(--text1);
  }
</style>
