<script>
  import Login from "./Login.svelte";
  import Register from "./Register.svelte";

  let newUser = false;
</script>

<div class="login">
  <div class="cont">
    <div class="login-options">
      <button
        on:click={() => {
          newUser = false;
        }}
        disabled={newUser === false}
        class:selected={newUser === false}
        class="mode left"
      >
        Login
      </button>
      <button
        on:click={() => {
          newUser = true;
        }}
        disabled={newUser === true}
        class:selected={newUser === true}
        class="mode right"
      >
        Opret bruger
      </button>
    </div>

    {#if newUser}
      <Register />
    {:else}
      <Login />
    {/if}
  </div>
</div>

<style>
  * {
    transition: background 0s;
  }
  .mode {
    width: 50%;
    background: #fff;
    color: #333;
    height: 2rem;
    border: none;
    border-radius: 15px 15px 0 0;
    cursor: pointer;
    position: relative;
  }
  .mode:focus {
    outline: solid 3px var(--p);
  }

  .mode::before {
    content: "";
    position: absolute;

    width: 10px;
    height: 10px;
    background: var(--p);
    bottom: 3px;
    z-index: 10;
  }
  .mode::after {
    content: "";
    position: absolute;

    width: 20px;
    height: 20px;
    background: var(--p);
    bottom: 3px;
    border-radius: 50%;
    z-index: 10;
  }
  .left::after {
    right: -20px;
    left: auto;
  }
  .left::before {
    right: -10px;
    left: auto;
  }
  .right::after {
    left: -20px;
    right: auto;
  }
  .right::before {
    left: -10px;
    right: auto;
  }
  .login-options {
    display: flex;
    border-width: 0 0 4px 0;
    border-color: var(-text2);
    width: 100%;
    position: relative;
  }
  .login-options:after {
    content: "";
    width: 100%;
    height: 3px;
    background: var(--p);
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 11;
  }
  .selected::after {
    background-color: #fff;
  }
  .mode:focus {
    transform: translateY(-3px);
  }

  .login {
    padding: 2rem 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: 100vh;
    width: 100%;
    background: #f5f5f5;
    /* background: radial-gradient(
      circle,
      rgba(0, 193, 110, 1) 15%,
      rgba(255, 255, 255, 1) 100%
    ); */
  }
  .cont {
    max-width: 700px;
    max-height: 100%;
    height: fit-content;
    width: min(50%, 500px);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: #fff;
    border-radius: 20px;
    padding: 2rem;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  }
  .selected {
    background: var(--p);
    color: #fff;
    cursor: default;
    outline: none;
    pointer-events: none;
  }
</style>
