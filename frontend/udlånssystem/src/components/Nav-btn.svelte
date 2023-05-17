<script>
  import { navigate } from "svelte-routing";
  import { path } from "../stores/pathStore";

  export let destination = "/";
  export let text = "Home";
  export let icon = "fa-solid fa-house";

  $: currentPath = $path;

  function handleClick() {
    navigate(destination, { replace: true });
    path.update(() => {
      return destination;
    });
  }
</script>

{#if currentPath === destination}
  <button on:click={handleClick} class="selected">
    <div class="flex">
      <i class={icon} />
      <p>{text}</p>
    </div>
  </button>
{:else}
  <button on:click={handleClick}>
    <div class="flex">
      <i class={icon} />
      <p>{text}</p>
    </div>
  </button>
{/if}

<style>
  button {
    background: none;
    color: red;
    width: 100%;
    border: none;
    padding: 0.7rem 1rem;
    border-radius: 10px;
    transition: background-color 100ms ease-in-out;
  }
  button:hover:not(.selected) {
    background-color: var(--bg2);
    cursor: pointer;
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
  }
  .selected {
    background-color: var(--p);
    color: var(--text1) !important;
  }
  .selected p,
  .selected i {
    color: var(--text1) !important;
  }
  i {
    font-size: 1.25rem;
    width: 2rem;
    color: var(--text2);
  }
  p {
    font-size: 1.2rem;
    color: var(--text2);
  }
</style>
