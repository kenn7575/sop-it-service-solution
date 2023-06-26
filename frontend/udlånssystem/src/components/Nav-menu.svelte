<script>
  import { navigate } from "svelte-routing";
  import { path } from "../stores/pathStore";
  import { fly } from "svelte/transition";

  export let text = "Home";
  export let icon = "fa-solid fa-house";
  export let buttons = [
    {
      text: "",
      icon: "",
      destination: "/",
    },
  ];

  //subscription to path store
  $: currentPath = $path;

  //update path store and navigate to destination
  function handleNavClick(dest) {
    path.update(() => {
      return dest;
    });
    navigate(dest, { replace: true });
  }
  //toggle menu
  function handleMenuClick() {
    open = !open;

    if (open) {
      scrollIntoView(buttons[buttons.length - 1].text);
    }
  }
  let open = false;

  //scroll to element when menu is opened
  function scrollIntoView(classname) {
    console.log("scrolling to", classname);
    setTimeout(() => {
      const el = document.getElementById(classname);
      if (!el) {
        console.log("element not found");
        return;
      }
      console.log("scrolling to ", classname);

      el.scrollIntoView({
        behavior: "smooth",
      });
    }, 10);
  }
</script>

<button
  class:selected={!open &&
    buttons.some((button) => button.destination === currentPath)}
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
  <div class="buttons" transition:fly={{ y: -20, duration: 200 }}>
    {#each buttons as button}
      <button
        class:selected={currentPath === button.destination}
        class="selected"
        id={button.text}
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
    cursor: pointer;

  }
  button.outer {
    padding: 0;
    cursor: pointer;
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
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
      rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
      rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
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
