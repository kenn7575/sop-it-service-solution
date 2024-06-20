<script lang="ts">
  import getData from "@data/getData";
  import { onMount } from "svelte";

  export let id: number;

  let loan: loanModel = {} as loanModel;
  let itemsInLoan: itemsFromLoan[] = [];
  let cablesInLoan: cableFromLoan[] = [];

  onMount(async () => {
    loan = await getData("loans", id);
    itemsInLoan = (await getData("items_from_loans?loan_id=" + loan.UUID)).data;
    cablesInLoan = (await getData("cables_from_loans?loan_id=" + loan.UUID))
      .data;
  });
</script>

<div id="pdf" class="px-10">
  <section>
    <div class="flex w-full p-6 pt-8 justify-around">
      <img src="/sde-logotype.png" alt="SDE logo" />
      <img src="/logo.png" alt="Logo" class="scale-75" />
    </div>

    <h1 class="text-center text-2xl font-bold">Udlånskvittering</h1>
  </section>

  <div class="line" />

  <section class="grid grid-cols-2 gap-y-3">
    <div>
      <span> Låner: </span>
      <h3>{loan.user_id}</h3>
    </div>

    <div>
      <span> Udlåner: </span>
      <h3>{loan.helpdesk_personel_id || ""}</h3>
    </div>

    <div>
      <span> Udlånsdato: </span>
      <h3>{new Date(loan.date_created).toLocaleDateString("da-dk")}</h3>
    </div>

    <div>
      <span> Afleveringsdato: </span>
      <h3>{loan.date_of_return || ""}</h3>
    </div>
  </section>

  <div class="line" />

  <section class="flex">
    <div class="w-1/2">
      <h2 class="mb-2">Produkter:</h2>
      <div>
        {#each itemsInLoan as item}
          <div>
            <p>{item.Produkt_navn}</p>
          </div>
        {/each}
      </div>
    </div>

    <div class="w-1/2">
      <h2 class="mb-2">Kabler:</h2>
      <div>
        {#each cablesInLoan as cable}
          <div>
            <p>{cable.Kabel_navn} x {cable.Maengde_laant}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>
</div>

<style>
  @import url("https://fonts.googleapis.com/css?family=Inter");

  * {
    color: black;
    font-family: "Inter";
  }

  #pdf {
    height: calc(100vh - 6rem);
    aspect-ratio: 595 / 842;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
  }

  .line {
    margin: 1rem auto;
    height: 1px;
    border-radius: 100px;

    @apply bg-neutral-600;
  }

  img {
    width: auto;
    height: 6rem;
  }

  span {
    font-size: small;
  }

  h2 {
    font-size: large;
  }

  h3 {
    font-size: x-large;
  }
</style>
