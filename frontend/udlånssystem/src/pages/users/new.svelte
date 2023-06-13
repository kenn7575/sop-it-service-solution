<script>
  import { onMount } from "svelte";
  import { getData } from "../../data/data";
  $: firstName = "";
  $: lastName = "";
  $: password = "";
  $: unilogin = "";
  $: email = "";
  $: role = "";
  $: education = "";
  $: street1 = "";
  $: street2 = "";
  $: zip = "";
  $: city = "";
  $: profilePicture = "https://img.freepik.com/free-icon/user_318-563642.jpg";

  let roles = [];
  onMount(async () => {
    roles = await getData("roles");
  });
  let educations = getData("educations");
  let errorMessages = "";

  import { currentUser, loginViaCredentials } from "../../services/login";
  $: console.log("user", $currentUser);

  async function login(e) {
    e.preventDefault();
  }
  function resetError() {
    errorMessages = "";
  }
</script>

<div class="content">
  <div class="image-upload">
    <img src={profilePicture} alt="Profile picture" />
    <div class="buttons">
      <button>Udskift</button>
      <button>Gem</button>
    </div>
  </div>
  <div class="form">
    <form id="user-form" on:submit={login}>
      <div class="question mt20">
        <input
          class:error={errorMessages}
          on:focus={resetError}
          bind:value={firstName}
          autocomplete="off"
          class="text"
          type="text"
          name="firstName"
          required
        />
        <label class:error={errorMessages}>Fornavn <span>*</span></label>
      </div>
      <div class="question" class:error={errorMessages}>
        <input
          autocomplete="off"
          class:error={errorMessages}
          on:focus={resetError}
          bind:value={lastName}
          class="text"
          type="text"
          name="lastName"
          required
        />
        <label class:error={errorMessages}>Efternavn <span>*</span></label>
      </div>
      <div class="question" class:error={errorMessages}>
        <input
          autocomplete="off"
          class:error={errorMessages}
          on:focus={resetError}
          bind:value={password}
          class="text"
          type="password"
          name="password"
          required
        />
        <label class:error={errorMessages}>Adgangskode <span>*</span></label>
      </div>
      <div class="question" class:error={errorMessages}>
        <input
          autocomplete="off"
          class:error={errorMessages}
          on:focus={resetError}
          bind:value={unilogin}
          class="text"
          type="text"
          name="unilogin"
          required
        />
        <label class:error={errorMessages}>Uni-login <span>*</span></label>
      </div>
      <div class="question" class:error={errorMessages}>
        <input
          autocomplete="off"
          class:error={errorMessages}
          on:focus={resetError}
          bind:value={email}
          class="text"
          type="text"
          name="email"
          required
        />
        <label class:error={errorMessages}>Email <span>*</span></label>
      </div>
      <div class="question" class:error={errorMessages}>
        <input
          autocomplete="off"
          class:error={errorMessages}
          on:focus={resetError}
          bind:value={street1}
          class="text"
          type="text"
          name="streetline1"
          required
        />
        <label class:error={errorMessages}>Vejnavn <span>*</span></label>
      </div>
      <div class="question" class:error={errorMessages}>
        <input
          autocomplete="off"
          class:error={errorMessages}
          on:focus={resetError}
          bind:value={street2}
          class="text"
          type="text"
          name="streetline2"
        />
        <label class:error={errorMessages}>Etage </label>
      </div>
      <div class="question" class:error={errorMessages}>
        <input
          autocomplete="off"
          class:error={errorMessages}
          on:focus={resetError}
          bind:value={city}
          class="text"
          type="text"
          name="city"
          required
        />

        <label class:error={errorMessages}>City <span>*</span></label>
      </div>
      <div class="question" class:error={errorMessages}>
        <input
          autocomplete="off"
          class:error={errorMessages}
          on:focus={resetError}
          bind:value={zip}
          class="text"
          type="text"
          name="zip"
          required
        />
        <label class:error={errorMessages}>Postnummer <span>*</span></label>
      </div>
      <div class="center">
        <button>Opret bruger</button>
      </div>

      <select name="cars" id="cars" form="user-form" bind:value={role}>
        {#each roles as role}
          <option value={role.UUID}>{role.name}</option>
          <label>Postnummer </label>
        {/each}
      </select>
    </form>
  </div>
</div>

<style>
  .buttons {
    display: flex;
    width: 100%;
    gap: 0.5rem;
    justify-content: space-between;
  }
  select {
    width: 100%;
    background: transparent;
    color: var(--text1);
    height: 40px;
  }

  form button,
  form .question label,
  form .question input.text {
    -moz-transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
    -o-transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
    -webkit-transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
    transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
  }
  .content {
    height: 100%;
    box-sizing: border-box;
    padding: 2rem;
    display: flex;
    gap: 1rem;
  }
  img {
    max-width: 100%;
  }
  .image-upload {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  .form {
    width: 100%;
    display: flex;

    flex-direction: column;
    height: 100%;

    overflow-y: auto;
  }
  button {
    width: 100%;
    height: 2rem;
    color: var(--text1);
    background: transparent;
    border: 1px solid var(--text1);
    border-radius: 10px;
  }

  * {
    font-weight: 800;
    -webkit-font-smoothing: antialiased;
  }
  span {
    position: absolute;
    transform: translate(5px, -5px);
    color: var(--s);
    font-size: 2rem;
    font-weight: 400;
  }
  .mt20 {
    margin-top: 20px;
  }
  .center {
    width: 100%;
    display: flex;
    justify-content: center;
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
    background-color: transparent;
    border: 2px solid var(--text1);
    line-height: 0;
    font-size: 17px;
    display: inline-block;
    box-sizing: border-box;
    padding: 20px 15px;
    border-radius: 60px;
    color: var(--text1);
    font-weight: 400;
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
    color: var(--text1);
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
    background: none;
    border: 1px solid var(--text1);
    line-height: 0;
    font-size: 17px;
    width: 100%;
    display: block;
    box-sizing: border-box;
    padding: 10px 15px;
    border-radius: 10px;
    color: var(--text1);
    font-weight: 500;
    letter-spacing: 0.01em;
    position: relative;
    z-index: 1;
  }

  form .question input.text:focus {
    outline: none;
    background: var(--bg2);
    color: var(--text1);
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
