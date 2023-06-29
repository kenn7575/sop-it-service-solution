<script>
  export let editMode = false;
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  //create reset event
  function handleReset() {
    dispatch("reset");
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
      <button
        on:click={() => {
          editMode = !editMode;
        }}
        disabled={!editMode}
        on:click={handleReset}>Annuller</button
      >
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
  {#if editMode}
    <button id="delete" on:click={handleDelete}>Slet</button>
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
