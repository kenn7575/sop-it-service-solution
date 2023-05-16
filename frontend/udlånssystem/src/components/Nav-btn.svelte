<script>
  import { navigate } from "svelte-routing";
  export let destination = "/";
  export let text = "Home";
  export let icon = "fa-solid fa-house";

  let path = window.location;

  function handleClick() {
    navigate(destination, { replace: true });
  }
</script>

<button on:click={handleClick}>
  <div class="flex">
    <i class={icon} />
    <p>{text}</p>
  </div>
</button>

<style>
  button {
    background: none;
    border: 1px solid var(--text1);

    cursor: pointer;
    width: 100%;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    transition: background-color 0.3s ease-in-out;
  }
  button:hover {
    background-color: var(--nav);
  }
  .flex {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .fa-house {
    font-size: 1.5rem;
  }
  i {
    font-size: 2rem !important;
  }
  p {
    font-size: 1.375rem;
    text-decoration-line: blink;
  }
</style>
