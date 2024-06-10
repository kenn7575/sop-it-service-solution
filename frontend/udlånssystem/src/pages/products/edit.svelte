<script lang="ts">
  import EditLayout from "@layouts/edit.svelte";
  import { zodSchema, fields, LoanHistory } from "./util";
  import { onMount } from "svelte";
  import getData from "@data/getData";

  export let id: number;

  $: items = [] as any;

  onMount(async () => {
    items = await getData("items", id);
  });

  let show = false;
</script>

<EditLayout table="items" page_name="Produkter" UUID={id} {fields} {zodSchema}>
  <div
    slot="edit-panel"
    class="flex flex-col items-center gap-3 overflow-hidden"
  >
    <h1>Lånehistorik:</h1>
    {#if items?.items_in_loan?.length > 0}
      <ul class="loanHistoryList">
        {#each items?.items_in_loan.reverse() as item}
          <a
            class={`${new LoanHistory(item).isActive()} loanHistoryItem`}
            href={`/udlaan/${item.loan_id}`}
          >
            <p>{new LoanHistory(item).date()}</p>
            <p>{new LoanHistory(item).time()}</p>
            <p>{new LoanHistory(item).user()}</p>
          </a>
        {/each}
      </ul>
    {:else}
      <p>Ingen lånehistorik</p>
    {/if}
  </div>
</EditLayout>

<style>
  .loanHistoryList {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    text-align: center;
  }

  .loanHistoryItem {
    width: 100%;
    min-height: 2rem;
    padding: 0.6rem;
    color: var(--text1);
    background: transparent;
    border: 3px solid var(--text1);
    border-radius: 10px;
  }

  .active {
    border-color: var(--p);
  }
</style>
