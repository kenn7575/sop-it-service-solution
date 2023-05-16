<script>
  export let placeholder = "Search";
</script>

<div class="search-wrapper">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    class="feather feather-search"
    viewBox="0 0 24 24"
  >
    <defs />
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
  <input class="search-input" type="text" {placeholder} />
</div>

<style>
  .search-wrapper {
    border-radius: 10px;
    background-color: var(--bg2);

    padding-left: 12px;
    height: 2.813rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 480px;
    color: var(--text1);
    box-shadow: 0 2px 6px 0 rgba(136, 148, 171, 0.2),
      0 24px 20px -24px rgba(71, 82, 107, 0.1);
    overflow: hidden;
    border: 1px solid var(--text1);
  }
  .search-wrapper {
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
