<script>
  import { navigate } from "svelte-routing";
  import { path } from "../stores/pathStore";
  export let placeholder = "Search";

  $: currentPath = $path;
  let searchPromt = "";

  function handleSubmit() {
    navigate(`/brugere/${searchPromt}`, { replace: true });

    path.update(() => {
      return `/brugere/${searchPromt}`;
    });
  }

  function handleInput() {
    if (searchPromt === "" || searchPromt === undefined) {
      navigate(`/brugere`);

      path.update(() => {
        return `/brugere`;
      });
    }
  }
</script>

<div class="content">
  <div class="search-wrapper">
    <i class="fa-solid fa-magnifying-glass" />
    <form on:submit|preventDefault={handleSubmit}>
      <input
        bind:value={searchPromt}
        on:input={handleInput}
        class="search-input"
        type="text"
        {placeholder}
      />
    </form>
  </div>
</div>

<style>
  /* if input is active give border to wrapper */
  .search-wrapper:focus-within {
    border: 3px solid var(--p);
  }

  .search-wrapper {
    border-radius: 10px;
    background-color: var(--bg2);

    padding-left: 12px;
    height: 2.813rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    max-width: 480px;
    color: var(--text1);
    box-shadow:
      0 2px 6px 0 rgba(136, 148, 171, 0.2),
      0 24px 20px -24px rgba(71, 82, 107, 0.1);
    overflow: hidden;
    border: 1px solid var(--text1);
  }
  .search-wrapper * {
    box-shadow: none;
  }
  .search-input {
    border: none;
    flex: 1;
    outline: none;
    height: 100%;
    padding: 0 10px;
    font-size: 16px;
    background-color: var(--search-area-bg);
    color: var(--text1);
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: var(--text2);
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: var(--text2);
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: var(--text2);
  }
</style>
