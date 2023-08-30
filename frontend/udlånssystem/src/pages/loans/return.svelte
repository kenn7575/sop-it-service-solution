<script lang="ts">
  export let id;
  import { onMount } from "svelte";
  import getData from "../../data/getData";
  import { itemsFromLoan } from "../../types/itemsFromLoan";
  import goToPath from "../../services/goToPath";
  import TableSimplified from "../../components/table-simplified.svelte";
  import { cableFromLoan } from "../../types/cableFromLoan";

  let importItemsInLoanLent: itemsFromLoan[] = [];
  let importItemsInLoanAvailable: itemsFromLoan[] = [];
  let ItemsInLoanToReturn: itemsFromLoan[] = [];

  let importCablesInLoanLent: cableFromLoan[] = [];
  let importCablesInLoanAvailable: cableFromLoan[] = [];
  let CablesInLoanToReturn: cableFromLoan[] = [];

  $: console.log("importItemsInLoanLent", importItemsInLoanLent);

  let table = "items_from_loans";
  let page_name = "Udlaan/returner";

  onMount(async () => {
    try {
      importDataFromDB();
    } catch (error) {
      console.log(error);
    }
  });

  import { barcodeStore, controlStore } from "../../stores/barcodeStore";
  import axios from "axios";
  function handleBarcode(code) {
    if (!$barcodeStore) return;

    //check if barcode is being added or removed
    if (!$controlStore) {
      console.log("adding");
      const product = importItemsInLoanLent.find((o) => o.UUID == code);
      //add
      if (ItemsInLoanToReturn.find((o) => o.UUID == code)) {
        alert("Produktet er allerede tilføjet");
        return;
      }
      if (!product) {
        alert("Produktet findes ikke");
        return;
      }
      handleAddProduct({ detail: product });
    } else {
      console.log("removing");
      //remove
      const product = ItemsInLoanToReturn.find((o) => o.UUID == code);
      if (!product) {
        return;
      }
      if (importItemsInLoanLent.find((o) => o.UUID == code)) {
        return;
      }
      handleRemoveProduct({ detail: product });
    }
  }
  $: handleBarcode($barcodeStore);

  async function importDataFromDB() {
    const dataItems = await getData(table);
    const dataCables = await getData("cables_from_loans");

    const items: itemsFromLoan[] = [];
    const cables: cableFromLoan[] = [];

    dataItems.map((element, index) => {
      if (element.loan_id == id) {
        items.push(new itemsFromLoan({ ...dataItems[index] }));
      }
    });
    dataCables.map((element, index) => {
      if (element.loan_id == id) {
        cables.push(new cableFromLoan({ ...dataCables[index] }));
      }
    });
    importItemsInLoanLent = items.filter((o) => !o.Returneret);
    importItemsInLoanAvailable = items.filter((o) => o.Returneret);

    importCablesInLoanLent = cables.filter((o) => o["Mængde lånt"] > 0);
    importCablesInLoanAvailable = cables.filter((o) => !(o["Mængde lånt"] > 0));
  }
  function handleAddProduct(event) {
    //move product from inputDataProducts to products
    let product = event.detail;
    console.log("product", product);
    console.log("importItemsInLoanLent", importItemsInLoanLent);
    console.log("ItemsInLoanToReturn", ItemsInLoanToReturn);
    if (importItemsInLoanLent.length == 0) return;

    ItemsInLoanToReturn.push(
      importItemsInLoanLent.splice(importItemsInLoanLent.indexOf(product), 1)[0]
    );
    ItemsInLoanToReturn = ItemsInLoanToReturn;
    importItemsInLoanLent = importItemsInLoanLent;
  }

  function handleRemoveProduct(event) {
    //move product from products to inputDataProducts
    let product = event.detail;
    importItemsInLoanLent.push(
      ItemsInLoanToReturn.splice(ItemsInLoanToReturn.indexOf(product), 1)[0]
    );
    ItemsInLoanToReturn = ItemsInLoanToReturn;
    importItemsInLoanLent = importItemsInLoanLent;
  }

  function handleAddCable(event) {
    //move product from importProducts to products'
    let cable = event.detail;
    if (importCablesInLoanLent.length == 0) return;

    cable["Mængde lånt"]--;
    cable["Mængde returneret"]++;

    const thisCable = CablesInLoanToReturn.find((c) => c.UUID == cable.UUID);
    var indexCable = CablesInLoanToReturn.find((c) => c.UUID > cable.UUID);

    if (thisCable) {
      if (cable["Mængde lånt"] == 0)
        importCablesInLoanLent.splice(
          importCablesInLoanLent.indexOf(cable),
          1
        )[0];
    } else {
      if (cable["Mængde lånt"] == 0)
        CablesInLoanToReturn.splice(
          CablesInLoanToReturn.indexOf(indexCable),
          0,
          importCablesInLoanLent.splice(
            importCablesInLoanLent.indexOf(cable),
            1
          )[0]
        );
      if (cable["Mængde lånt"] >= 1)
        CablesInLoanToReturn.splice(
          CablesInLoanToReturn.indexOf(indexCable),
          0,
          cable
        );
    }

    CablesInLoanToReturn = CablesInLoanToReturn;
    importCablesInLoanLent = importCablesInLoanLent;
  }
  function handleRemoveCable(event) {
    //move product from products to importProducts
    let cable = event.detail;
    if (CablesInLoanToReturn.length == 0) return;

    cable["Mængde lånt"]++;
    cable["Mængde returneret"]--;

    const thisCable = importCablesInLoanLent.find((c) => c.UUID == cable.UUID);
    var indexCable = importCablesInLoanLent.find((c) => c.UUID > cable.UUID);

    if (thisCable) {
      if (cable["Mængde returneret"] == 0)
        CablesInLoanToReturn.splice(CablesInLoanToReturn.indexOf(cable), 1)[0];
    } else {
      if (cable["Mængde returneret"] == 0)
        importCablesInLoanLent.splice(
          importCablesInLoanLent.indexOf(indexCable),
          0,
          CablesInLoanToReturn.splice(CablesInLoanToReturn.indexOf(cable), 1)[0]
        );
      if (cable["Mængde returneret"] >= 1)
        importCablesInLoanLent.splice(
          importCablesInLoanLent.indexOf(indexCable),
          0,
          cable
        );
    }

    CablesInLoanToReturn = CablesInLoanToReturn;
    importCablesInLoanLent = importCablesInLoanLent;
  }

  function handleReturn() {
    const ids = ItemsInLoanToReturn.map((i) => i.UUID);

    if (ids.length > 0) {
      axios
        .delete("/return_item.php", {
          params: { ids },
        })
        .then((res) => {
          console.log(res);
          if (res.data?.success) {
            alert("Produkterne er returneret");
            goToPath(`/udlaan`);
          } else {
            alert("Der skete en fejl");
          }
        });
    }

    if (CablesInLoanToReturn.length > 0) {
      const cables = CablesInLoanToReturn.map((c) => {
        return {
          UUID: c.UUID,
          amount: c["Mængde returneret"],
        };
      });
      axios
        .delete("/return_cable.php", {
          params: {
            cables,
          },
        })
        .then((res) => {
          console.log(res);
          if (res.data?.success) {
            alert("Kablerne er returneret");
            goToPath(`/udlaan`);
          } else {
            alert("Der skete en fejl");
          }
        });
    }
  }
  function handleAddAll() {
    ItemsInLoanToReturn = importItemsInLoanLent;
    importItemsInLoanLent = [];
  }
</script>

<div class="overflow-y-scroll relative max-h-full pb-16">
  {#if ItemsInLoanToReturn.length != 0 || importItemsInLoanLent.length != 0}
    <div class="grid grid-cols-2 gap-4 max-h-half relative pt-16 mt-8 h-max">
      <div
        class="h-full border-r-2 seperation seperation-1 absolute left-1/2"
      />
      {#if importItemsInLoanLent?.length > 0}
        <div class="col-start-1">
          <TableSimplified
            on:message={handleAddProduct}
            inputData={importItemsInLoanLent}
            title=""
            exclude={["date_returned", "loan_id"]}
          />
        </div>
      {/if}
      <div class="col-start-2">
        {#if ItemsInLoanToReturn?.length > 0}
          <TableSimplified
            on:message={handleRemoveProduct}
            inputData={ItemsInLoanToReturn}
            title=""
            exclude={["date_returned", "loan_id"]}
          />
        {:else}
          <p class="text-center">Tryk på at vælge prokuter</p>
        {/if}
      </div>
    </div>
  {/if}
  {#if CablesInLoanToReturn.length != 0 || importCablesInLoanLent.length != 0}
    <div class="grid grid-cols-2 gap-4 max-h-half relative pt-16 mt-8 h-max">
      <div
        class="h-full border-r-2 seperation seperation-2 absolute left-1/2"
      />
      {#if importCablesInLoanLent?.length > 0}
        <div class="col-start-1">
          <TableSimplified
            on:message={handleAddCable}
            inputData={importCablesInLoanLent}
            title=""
            exclude={["date_returned", "loan_id"]}
          />
        </div>
      {/if}
      <div class="col-start-2">
        {#if CablesInLoanToReturn?.length > 0}
          <TableSimplified
            on:message={handleRemoveCable}
            inputData={CablesInLoanToReturn}
            title=""
            exclude={["date_returned", "loan_id"]}
          />
        {:else}
          <p class="text-center">Tryk på at vælge prokuter</p>
        {/if}
      </div>
    </div>
  {/if}

  <div class="flex justify-center mt-16 flex-col items-center gap-2">
    {#if ItemsInLoanToReturn.length != 0 || importItemsInLoanLent.length != 0}
      <button
        on:click={handleAddAll}
        id="add-all"
        disabled={importItemsInLoanLent.length < 1}
      >
        Tilføj alle
      </button>
      <button
        on:click={handleReturn}
        id="return"
        disabled={!ItemsInLoanToReturn.length && !CablesInLoanToReturn.length}
      >
        returner valgte
      </button>
    {/if}
    {#if importItemsInLoanAvailable.length > 0}
      <h1 class="mt-16 text-xl">Returnerede produkter</h1>
      <hr class="w-full" />
      <TableSimplified
        on:message={handleAddProduct}
        inputData={importItemsInLoanAvailable}
        title=""
        disabled={true}
      />
    {/if}
    {#if importCablesInLoanAvailable.length > 0}
      <h1 class="mt-16 text-xl">Returnerede kabler</h1>
      <hr class="w-full" />
      <TableSimplified
        on:message={handleAddProduct}
        inputData={importCablesInLoanAvailable}
        title=""
        disabled={true}
      />
    {/if}
  </div>
</div>

<style>
  /* .max-h-half {
    max-height: 50vh;
  } */
  button {
    width: 100%;
    max-width: 400px;
    min-height: 2rem;
    height: 2rem;
    color: var(--text1);
    border: 1px solid var(--text1);
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
  }
  button#return:hover {
    color: var(--s);
    border-color: var(--s);
    outline: none;
  }
  button#return {
    background: var(--text1);
    color: var(--bg1);
  }

  button:focus {
    outline: none;
  }
  button:disabled {
    color: var(--text1);
    border-color: var(--text1);
    cursor: not-allowed;
    opacity: 0.5;
  }
  .seperation {
    border-color: var(--text1);
  }
  .seperation-1::after {
    content: "Til retunering";
    position: absolute;
    width: max-content;
    top: 0;
    left: 20px;
    z-index: 2;
  }
  .seperation-1::before {
    content: "Udlånte produkter";
    position: absolute;
    top: 0;
    width: max-content;
    right: 20px;
    z-index: 2;
  }
  .seperation-2::before {
    content: "Udlånte kabler";
    position: absolute;
    top: 0;
    width: max-content;
    right: 20px;
    z-index: 2;
  }
  .seperation-2::after {
    content: "Til retunering";
    position: absolute;
    width: max-content;
    top: 0;
    left: 20px;
    z-index: 2;
  }
</style>
