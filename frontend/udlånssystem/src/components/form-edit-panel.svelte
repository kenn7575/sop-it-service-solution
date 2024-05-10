<script>
  export let editMode = false;
  export let loanMode = false;
  export let loanReturnDate = null;
  export let loanId = null;
  export let item = null;
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  //create reset event
  function handleReset() {
    dispatch("reset");
    editMode = !editMode;
  }
  //create update event
  function handleUpdate() {
    dispatch("update");
  }
  //create delete event
  function handleDelete() {
    dispatch("delete");
  }
  function handleCancel() {
    dispatch("cancel");
  }
</script>

<div class="control-panel">
  <div class="buttons">
    {#if editMode}
      <button disabled={!editMode} on:click={handleReset}>Annuller</button>
      <button on:click={handleUpdate}>Gem</button>
    {:else}
      <button on:click={handleCancel}>Tilbage</button>
      <button
        on:click={() => {
          editMode = !editMode;
        }}>Rediger</button
      >
    {/if}
  </div>
  {#if editMode && !loanMode}
    <button id="delete" on:click={handleDelete}>Slet</button>
  {/if}
  {#if loanMode}
    {#if !loanReturnDate}
      <button id="" on:click={handleDelete}>Returner</button>
    {:else}
      <p>Returneret ✅</p>
      <p>{loanReturnDate}</p>
      <button id="" on:click={handleDelete}>Se detaljer </button>
    {/if}
  {/if}
  {#if loanId}
    <a href={`/udlaan/${loanId}`}>Gå til lån</a>
  {:else if item?.product_status_id == 1}
    <a href={`/udlaan/new?item=${item?.UUID}`}>Opret lån</a>
  {/if}
</div>

<style>
  button:hover {
    background-color: #5b596e;
    scale: 0.98;
  }
  #delete {
    color: white;
    background: #f85a40dd;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 2rem;
    height: 2rem;
    color: var(--text1);
    background: transparent;
    border: 1px solid var(--text1);
    border-radius: 10px;
  }
</style>
