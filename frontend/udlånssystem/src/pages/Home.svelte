<script>
  import { cheatCode } from "../services/cheatCode.js";
  import { welcome } from "../../public/svg/welcome.js";
  import nyanCat from "../../public/nyanCat.gif";

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
  function handleBarcodeScan(value) {
    if (!value) return;
    if (Date.now() - $barcodeBuilderTimeOut > 1000) {
      return;
    }
    goToPath(`/produkter/${value}`);
  }
  $: handleBarcodeScan($barcodeStore);
  $: console.log($barcodeStore);
</script>

{#if cheatActive}
  <img src={nyanCat} alt="nyan cat" />
{:else}
  <div class="content">
    <h1>Velkommen til helpdesk'en</h1>
    <p>Hvordan kan vi hjælpe dig i dag?</p>
    <div class="svg">
      {@html welcome}
    </div>
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
