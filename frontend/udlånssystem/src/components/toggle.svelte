<script>
  function toggleTheme(darkmode) {
    if (darkmode) {
      document.documentElement.className = "dark";
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.className = "light";
      localStorage.setItem("theme", "light");
    }
  }
  let darkmode = true;
  if (localStorage.getItem("theme") === "dark") {
    darkmode = true;
  } else {
    darkmode = false;
  }
  $: toggleTheme(darkmode);
</script>

<input type="checkbox" id="switch" bind:checked={darkmode} /><label for="switch"
  >Toggle</label
>

<style>
  input[type="checkbox"] {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 50px;
    height: 25px;
    background: var(--s);
    display: block;
    border-radius: 100px;
    position: relative;
  }

  label:after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 21px;
    height: 21px;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
  }

  input:checked + label {
    background: var(--p);
  }

  input:checked + label:after {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  label:active:after {
    width: 30px;
  }
</style>
