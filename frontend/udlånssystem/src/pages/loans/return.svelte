<script lang="ts">
  export let id;
  import { onMount } from "svelte";
  import getData from "../../data/getData";
  import { loanModel } from "../../types/loanModel";
  import { itemsFromLoan } from "../../types/itemsFromLoan";
  import goToPath from "../../services/goToPath";
  import TableSimplified from "../../components/table-simplified.svelte";
  let importItemsInLoanLent: itemsFromLoan[] = [];
  let importItemsInLoanAvailable: itemsFromLoan[] = [];

  let ItemsInLoanToReturn: itemsFromLoan[] = [];
  let importLoan: loanModel;

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
    const data = await getData(table);
    const items: itemsFromLoan[] = [];
    data.map((element, index) => {
      if (element.loan_id == id) {
        items.push(new itemsFromLoan({ ...data[index] }));
      }
    });
    importItemsInLoanLent = items.filter((o) => !o.date_returned);
    importItemsInLoanLent.map((o) => delete o.date_returned);
    importItemsInLoanAvailable = items.filter((o) => o.date_returned);

    const importLoanData = await getData("loans", id);
    const importLoan = new loanModel({ ...importLoanData });
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
  function handleReturn() {
    const ids = ItemsInLoanToReturn.map((i) => i.UUID);
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
  function handleAddAll() {
    ItemsInLoanToReturn = importItemsInLoanLent;
    importItemsInLoanLent = [];
  }
</script>

<div class="overflow-y-scroll relative max-h-full pb-16">
  {#if ItemsInLoanToReturn.length != 0 || importItemsInLoanLent.length != 0}
    <div class="grid grid-cols-2 gap-4 max-h-half relative pt-16 mt-8 h-max">
      <div class="h-full border-r-2 seperation absolute left-1/2" />
      {#if importItemsInLoanLent?.length > 0}
        <div class="col-start-1">
          <TableSimplified
            on:message={handleAddProduct}
            inputData={importItemsInLoanLent}
            title=""
          />
        </div>
      {/if}
      <div class="col-start-2">
        {#if ItemsInLoanToReturn?.length > 0}
          <TableSimplified
            on:message={handleRemoveProduct}
            inputData={ItemsInLoanToReturn}
            title=""
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
        disabled={!ItemsInLoanToReturn.length}
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
  .seperation::after {
    content: "Til retunering";
    position: absolute;
    width: max-content;
    top: 0;
    left: 20px;
    z-index: 2;
  }
  .seperation::before {
    content: "Udlånte produkter";
    position: absolute;
    top: 0;
    width: max-content;
    right: 20px;
    z-index: 2;
  }
</style>
