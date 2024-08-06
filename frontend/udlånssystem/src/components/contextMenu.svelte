<script>
  export let menuItems;
  export let elementId;
  export let itemId;
  export let onContextMenu = (e) => {};

  let pos = { x: 0, y: 0 };
  let menu = { h: 0, w: 0 };
  let browser = { h: 0, w: 0 };
  let showMenu = false;

  function rightClickContextMenu(e) {
    const contextArea = document.getElementById(elementId);
    if (!contextArea.contains(e.target)) return (showMenu = false);

    e.preventDefault();
    onContextMenu(itemId);

    showMenu = true;

    browser = {
      w: window.innerWidth,
      h: window.innerHeight,
    };

    pos = {
      x: e.clientX,
      y: e.clientY,
    };

    if (browser.h - pos.y < menu.h) pos.y = pos.y - menu.h;
    if (browser.w - pos.x < menu.w) pos.x = pos.x - menu.w;
  }

  function onPageClick() {
    showMenu = false;
  }

  function getContextMenuDimension(node) {
    let height = node.offsetHeight;
    let width = node.offsetWidth;

    menu = {
      h: height,
      w: width,
    };
  }
</script>

{#if showMenu}
  <nav
    use:getContextMenuDimension
    style="position: absolute; top:{pos.y}px; left:calc({pos.x}px - 20rem);"
  >
    <div class="navbar" id="navbar">
      <ul>
        {#if itemId}
          <p>{itemId}</p>
          <hr />
        {/if}
        {#each menuItems as item}
          {#if item.name == "hr"}
            <hr />
          {:else if !item.onClick}
            <p class={item.class}>{item.displayText}</p>
          {:else}
            <li>
              <button on:click={(e) => item.onClick(e, itemId)}>
                <i class={item.class} />{item.displayText}
              </button>
            </li>
          {/if}
        {/each}
      </ul>
    </div>
  </nav>
{/if}

<svelte:window on:contextmenu={rightClickContextMenu} on:click={onPageClick} />

<style>
  * {
    padding: 0;
    margin: 0;
  }
  .navbar {
    display: inline-flex;
    border: 1px var(--text2) solid;
    width: 170px;
    background-color: var(--bg1);
    border-radius: 10px;
    overflow: hidden;
    flex-direction: column;
  }
  .navbar ul {
    margin: 6px;
  }
  ul li {
    display: block;
    list-style-type: none;
    width: 1fr;
  }
  ul li button {
    font-size: 1rem;
    color: var(--text1);
    width: 100%;
    height: 30px;
    text-align: left;
    border: 0px;
    background-color: var(--bg1);
  }
  ul li button:hover {
    color: var(--text2);
    text-align: left;
    border-radius: 5px;
    background-color: var(--bg2);
  }
  ul li button i {
    padding: 0px 15px 0px 10px;
  }
  ul li button i.fa-square {
    background-color: var(--bg1);
  }
  ul li button:hover > i.fa-square {
    background-color: var(--bg2);
  }
  ul li button:hover > i.warning {
    color: var(--s);
  }
  hr {
    border: none;
    border-bottom: 1px solid var(--text2);
    margin: 5px 0px;
  }
</style>
