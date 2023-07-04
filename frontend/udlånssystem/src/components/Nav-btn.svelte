<script>
  import { navigate } from "svelte-routing";
  import { path } from "../stores/pathStore";
  import { stripPath } from "../services/pathFormatter.js";
  import { currentUser } from "../services/login";

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

<button
  on:click={handleClick}
  
  class:selected={stripPath(currentPath, 1) === destination}
>
  <div class="flex">
    <i class={icon} />
    <p>{text}</p>
  </div>
</button>


<style>
  button {
    background: none;
    color: red;
    width: 100%;
    border: none;
    padding: 0.7rem 1rem;
    border-radius: 10px;
    transition: background-color 100ms ease-in-out;
    cursor: pointer;
  }
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
  }
  p {
    font-size: 1.2rem;
    color: var(--text3);
  }
</style>
