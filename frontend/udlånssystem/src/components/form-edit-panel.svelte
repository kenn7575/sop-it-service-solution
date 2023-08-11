<script>
  export let editMode = false;
  export let loanMode = false;
  export let loanReturnDate = null;
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
      <button id="" on:click={handleDelete}>Se datailjer </button>
    {/if}
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
</style>
