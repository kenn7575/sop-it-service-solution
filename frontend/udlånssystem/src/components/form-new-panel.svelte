<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  //create reset event
  function handleCreate() {
    dispatch("create");
  }
  function handleCancel() {
    dispatch("cancel");
  }
</script>

<div class="control-panel">
  <div class="buttons">
    <button on:click={handleCancel}>Tilbage</button>

    <button on:click={handleCreate}>Opret</button>
  </div>
</div>

<style>
  .control-panel .buttons {
    display: flex;
    width: 100%;
    gap: 0.5rem;
    justify-content: space-between;
  }

  .control-panel {
    width: max(35%, 400px);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    background-color: var(--bg2);
    border-radius: 10px;
    padding: 1rem;
    position: relative;
  }

  .control-panel button {
    width: 100%;
    min-height: 2rem;
    height: 2rem;
    color: var(--text1);
    background: transparent;
    border: 1px solid var(--text1);
    border-radius: 10px;
  }
  .control-panel button:disabled {
    opacity: 0.5;
  }
</style>
