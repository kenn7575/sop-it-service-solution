<script>
  import { path } from "../stores/pathStore";
  import { formatPathToBreadcrumps } from "../services/pathFormatter.js";
  import { navigate } from "svelte-routing";

  function handleClick(inputpath) {
    if (currentPath === inputpath) return;
    path.update(() => {
      return inputpath;
    });
    navigate(inputpath, { replace: true });
  }

  $: currentPath = $path;
  $: console.log(currentPath);
</script>

<div class="content">
  {#each formatPathToBreadcrumps(currentPath) as path}
    <button
      on:click={() => {
        handleClick(path.fullPath);
      }}
    >
      <p>{path.path}</p>
    </button>
    <!-- seperation icon -->
    {#if path.seperator}
      <i class="fa-solid fa-angles-right" />
    {/if}
  {/each}
</div>

<style>
  .content {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    background-color: var(--bg2);
    border-radius: 10px;
    padding: 3px;
  }
  button {
    background: none;
    text-decoration: underline;
    border: none;
    color: var(--text2);
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    border-radius: 10px;
    transition: background-color 100ms ease-in-out;
    padding: 0.4rem 1rem;
  }
</style>
