<script>
  export let editMode = false;
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  $: console.log(editMode);
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
    <button id="delete" on:click={handleDelete}>Slet brand</button>
  {/if}
</div>
