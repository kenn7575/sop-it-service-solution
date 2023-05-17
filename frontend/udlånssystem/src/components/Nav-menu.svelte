<script>
  import { navigate } from "svelte-routing";
  import { path } from "../stores/pathStore";
  import { formatPath } from "../services/pathFormatter.js";
  import { fade } from "svelte/transition";

  export let destination = "/";
  export let text = "Home";
  export let icon = "fa-solid fa-house";
  export let buttons = [
    {
      text: "",
      icon: "",
      destination: "",
    },
  ];

  //subscription to path store
  $: currentPath = $path;

  //update path store and navigate to destination
  function handleNavClick(dest) {
    dest = destination + dest;
    path.update(() => {
      return dest;
    });
    navigate(dest, { replace: true });
  }
  //toggle menu
  function handleMenuClick() {
    open = !open;
  }
  let open = false;
</script>

<button
  class:selected={!open && formatPath(currentPath, 1) === destination}
  class="outer"
  on:click={handleMenuClick}
>
  <div class="flex large between">
    <div class="flex">
      <i class={icon} />
      <p>{text}</p>
    </div>

    <i class:closed={!open} class="fa-solid fa-angle-up" />
  </div>
</button>
{#if open}
  <div class="buttons">
    {#each buttons as button}
      <button
        class:selected={currentPath === destination + button.destination}
        class="selected"
        on:click={() => {
          handleNavClick(button.destination);
        }}
      >
        <div class="flex small">
          {#if button.icon}
            <i class={button.icon} />
          {/if}
          <p>{button.text}</p>
        </div>
      </button>
    {/each}
  </div>
{/if}

<style>
  button {
    background: none;
    width: 100%;
    border: none;
    border-radius: 10px;
    transition: background-color 100ms ease-in-out;
  }
  button.outer {
    padding: 0;
  }
  .large {
    padding: 0.7rem 1rem;
  }
  .small {
    padding: 0.5rem 1rem;
  }
  .between {
    justify-content: space-between !important;
  }
  .buttons {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-left: 4rem;
  }
  .show {
    height: auto;
  }
  /* Target buttons hover if not selected */
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
  .closed {
    transform: rotate(180deg);
  }
  .selected {
    background-color: var(--p);
  }
  .selected p,
  .selected i {
    color: #fff !important;
  }
  i {
    font-size: 1.25rem;
    width: 2rem;
    color: var(--text3);
    transition: transform 150ms ease-in-out;
  }
  p {
    font-size: 1.2rem;
    color: var(--text3);
  }
</style>
