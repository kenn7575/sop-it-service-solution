<script>
  import getData from "../data/getData";
  import { cheatCode } from "../services/cheatCode";

  let cheatActive = false;
  window.addEventListener(
    "cheatCode",
    (e) => {
      if (!cheatActive) {
        cheatActive = true;
      }
      //remove event listener
    },
    { once: true }
  );
  cheatCode();
  import goToPath from "../services/goToPath";
  import { barcodeStore, barcodeBuilderTimeOut } from "../stores/barcodeStore";
  async function handleBarcodeScan(value) {
    if (!value) return;
    if (Date.now() - $barcodeBuilderTimeOut > 100) {
      return;
    }

    const [scannedProduct] = await getData("items_view?Barcode=" + value);

    if (!scannedProduct) return alert("Produktet kunne ikke findes");

    if (scannedProduct.Status == "Available") {
      goToPath(`/udlaan/new?item=${scannedProduct.UUID}`);
      return;
    }

    if (scannedProduct.Status == "Lent") {
      const item_from_loan = await getData(
        `items_from_loans?UUID=${scannedProduct.UUID}&Returneret=null`
      );

      barcodeStore.set(value);

      return goToPath(`/udlaan/${item_from_loan.loan_id}/returner`);
    }

    goToPath(`/produkter/${scannedProduct.UUID}`);
  }
  $: handleBarcodeScan($barcodeStore);
</script>

{#if cheatActive}
  <img src="/nyanCat.gif" alt="nyan cat" />
{:else}
  <div class="content">
    <h1>Velkommen til helpdesk'en</h1>
    <p>Hvordan kan vi hjælpe dig i dag?</p>
    <img class="svg" src="svg/welcome.svg" alt="Welcome" />
  </div>
{/if}

<style>
  .svg {
    width: 60%;
  }
  .content {
    padding-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    max-height: 100vh;
  }
  p {
    color: var(--text2);
    font-size: 1.2rem;
  }
  h1 {
    font-size: 3rem;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
