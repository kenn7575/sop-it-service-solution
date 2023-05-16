<script>
  import { navigate } from "svelte-routing";
  import { path } from "../stores/pathStore";
  export let destination = "/";
  export let text = "Home";
  export let icon = "fa-solid fa-house";
  export let buttons = [{ text: "test", icon: "", destination: "/" }];

  $: currentPath = $path;
  function handleClick(dest) {
    navigate(dest, { replace: true });
    path.update(() => {
      return destination;
    });
  }
  function handleMenuClick() {
    open = !open;
  }

  let open = false;
</script>

{#if currentPath == destination}
  <button class="outer selected">
    <div class="flex">
      <i class={icon} />
      <p>{text}</p>
    </div>
  </button>
{:else}
  <button class="outer">
    <div class="flex">
      <i class={icon} />
      <p>{text}</p>
    </div>
    <div class="space">
      {#each buttons as button}
        <button class="inner">
          <div class="flex">
            <i class={button.icon} />
            <p>{button.text}</p>
          </div>
        </button>
      {/each}
    </div>
  </button>
{/if}

<style>
  button {
    background: none;
    color: red;
    width: 100%;
    border: none;
    border-radius: 10px;
    transition: background-color 100ms ease-in-out;
  }
  button.outer {
    padding: 0;
  }
  .flex {
    padding: 0.7rem 1rem;
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
  button {
    background-color: #f005;
  }
</style>
