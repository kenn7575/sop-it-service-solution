<script>
  $: username = "";
  $: password = "";

  let errorMessages = "";

  import { currentUser } from "../../services/login";
  import axios from "axios";

  function login(e) {
    e.preventDefault();
    console.log(username);
    axios
      .post("/login.php", { username: username, password: password })

      .then((res) => {
        console.log("🚀 ~ file: Login.svelte:15 ~ .then ~ res:", res);
        if (res.data.status === 403) {
          password = "";

          errorMessages = "Forkert uni-login eller adgangskode";
        } else {
          currentUser.update(() => {
            return { username: username, password: password };
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function resetError() {
    errorMessages = "";
  }
</script>

<form on:submit={login}>
  <div class="column">
    <h1>Velkommen tilbage</h1>
    {#if errorMessages}
      <p class="errorMessage">{errorMessages}</p>
    {/if}
  </div>

  <div class="question mt20">
    <input
      class:error={errorMessages}
      on:focus={resetError}
      bind:value={username}
      class="text"
      type="text"
      name=""
      required
    />
    <label class:error={errorMessages}>Uni-login</label>
  </div>
  <div class="question" class:error={errorMessages}>
    <input
      class:error={errorMessages}
      on:focus={resetError}
      bind:value={password}
      class="text"
      type="password"
      required
    />
    <label class:error={errorMessages}>Adgangskode</label>
  </div>
  <div class="center">
    <button>Login</button>
  </div>
</form>

<style>
  form button,
  form .question label,
  form .question input.text {
    -moz-transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
    -o-transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
    -webkit-transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
    transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
  }

  * {
    font-weight: 800;
    -webkit-font-smoothing: antialiased;
  }
  .mt20 {
    margin-top: 20px;
  }
  .center {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .column {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  form {
    position: relative;
    display: inline-block;
    max-width: 700px;

    box-sizing: border-box;

    background: transparent;
    border-radius: 40px;
    margin: 20px 0;
    left: 50%;
    -moz-transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
  }
  form h1 {
    color: #303033;
    font-weight: 400;
    letter-spacing: 0.01em;
    margin-bottom: 10px;
  }
  form button {
    margin-top: 35px;
    background-color: #fff;
    border: 1px solid var(--p);
    line-height: 0;
    font-size: 17px;
    display: inline-block;
    box-sizing: border-box;
    padding: 20px 15px;
    border-radius: 60px;
    color: var(--p);
    font-weight: 300;
    letter-spacing: 0.01em;
    position: relative;
    z-index: 1;
  }
  form button:hover,
  form button:focus {
    color: #fff;
    background-color: var(--p);
  }
  form .question {
    position: relative;
    padding: 10px 0;
  }
  form .question:first-of-type {
    padding-top: 0;
  }
  form .question:last-of-type {
    padding-bottom: 0;
  }
  form .question label {
    transform-origin: left center;
    color: var(--p);
    font-weight: 300;
    letter-spacing: 0.01em;
    font-size: 17px;
    box-sizing: border-box;
    padding: 10px 15px;
    display: block;
    position: absolute;
    margin-top: -40px;
    z-index: 2;
    pointer-events: none;
  }
  form .question input.text {
    appearance: none;
    background-color: none;
    border: 1px solid var(--p);
    line-height: 0;
    font-size: 17px;
    width: 100%;
    display: block;
    box-sizing: border-box;
    padding: 10px 15px;
    border-radius: 60px;
    color: var(--p);
    font-weight: 500;
    letter-spacing: 0.01em;
    position: relative;
    z-index: 1;
  }

  form .question input.text:focus {
    outline: none;
    background: var(--p);
    color: #fff;
    margin-top: 30px;
  }
  form .question input.text:valid {
    margin-top: 30px;
  }
  form .question input.text:focus ~ label {
    -moz-transform: translate(0, -35px);
    -ms-transform: translate(0, -35px);
    -webkit-transform: translate(0, -35px);
    transform: translate(0, -35px);
  }
  form .question input.text:valid ~ label {
    text-transform: uppercase;
    font-style: italic;
    -moz-transform: translate(5px, -35px) scale(0.7);
    -ms-transform: translate(5px, -35px) scale(0.7);
    -webkit-transform: translate(5px, -35px) scale(0.7);
    transform: translate(5px, -35px) scale(0.7);
  }
  form .question .error {
    border-color: var(--s) !important;
    color: var(--s) !important;
  }
  .errorMessage {
    color: var(--s) !important;
    font-weight: 400 !important;
  }
</style>
