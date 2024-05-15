<script lang="ts">
  import EditLayout from "@layouts/edit.svelte";
  import { zodSchema, fields } from "./util";
  import { onMount } from "svelte";
  import getData from "@data/getData";

  export let id: number;

  $: items = [] as any;

  onMount(async () => {
    items = await getData("items", id);
  });

  function activeLoan(item: any): "active" | "" {
    if (item?.date_returned == null) return "active";
    return "";
  }

  function fDate(date: string): string {
    return new Date(date).toLocaleDateString("da-DK");
  }

  function loanDate({ date_created, date_returned }): string {
    let text = fDate(date_created);

    if (date_returned) {
      text += " - " + fDate(date_returned);
    }

    return text;
  }

  function loanUser({ loans: loan }): string {
    if (loan) {
      let { name, username } = loan.users_loans_user_idTousers;

      let nameList = name.split(" ");

      let firstName = nameList[0];
      let lastName = nameList[nameList.length - 1];

      return `${firstName} ${lastName} (${username})`;
    }

    return "";
  }
</script>

<EditLayout table="items" page_name="Produkter" UUID={id} {fields} {zodSchema}>
  <div slot="edit-panel" class="flex flex-col items-center gap-3">
    <h1>Lånehistorik</h1>
    <ul class="flex flex-col gap-5 text-center">
      {#if items?.items_in_loan?.length > 0}
        {#each items?.items_in_loan.reverse() as item}
          <a class={`${activeLoan(item)}`} href={`/udlaan/${item.loan_id}`}
            ><p>{loanDate(item)}</p>
            <p>{loanUser(item)}</p>
          </a>
        {/each}
      {:else}
        <p>Ingen lån</p>
      {/if}
    </ul>
  </div>
</EditLayout>

<style>
  .active {
    background-color: var(--p);
  }
</style>
