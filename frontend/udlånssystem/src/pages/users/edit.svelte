<script>
  import DropZone from "../../components/drop-zone.svelte";
  import { onMount } from "svelte";
  import { getData } from "../../data/data";

  let editMode = false;

  $: new_user = {
    firstName: "info",
    lastName: "",
    password: "",
    unilogin: "",
    email: "",
    role: "",
    education: "",
    street1: "",
    street2: "",
    zip: "",
    city: "",
    profilePicture: "",
  };

  let roles = [];
  let educations = [];
  onMount(async () => {
    roles = await getData("roles");
    educations = await getData("educations");
    new_user.education = educations[0].UUID;
    new_user.role = roles[0].UUID;
  });
  let errorMessages = "";

  function toggleEditMode() {
    editMode = !editMode;
  }
  function resetError() {
    errorMessages = "";
  }
  function clearPicture() {
    new_user.profilePicture = "";
  }
  function handleFileDrop(event) {
    new_user.profilePicture = event.detail;
  }
</script>

<div class="content">
  <div class="image-upload">
    <img
      src={new_user.profilePicture
        ? new_user.profilePicture
        : "https://img.freepik.com/free-icon/user_318-563642.jpg"}
      alt="Profile picture"
    />
    {#if editMode && new_user.profilePicture}
      <button id="clear-picture" on:click={clearPicture}
        ><i class="fa-solid fa-trash" /></button
      >
    {/if}

    <div class="buttons">
      <button
        on:click={toggleEditMode}
        disabled={!editMode}
        on:click={clearPicture}>Annuller</button
      >
      {#if editMode}
        <button>Gem</button>
      {:else}
        <button on:click={toggleEditMode}>Rediger</button>
      {/if}
    </div>
    {#if editMode}
      <DropZone on:message={handleFileDrop} />
    {/if}
  </div>
  <div class="form">
    <form id="user-form">
      <div class="question">
        <label for="a1" class:error={errorMessages}
          >Fornavn <span class:hidden={!editMode}>*</span></label
        >
        <input
          id="a1"
          disabled={!editMode}
          class:error={errorMessages}
          on:focus={resetError}
          bind:value={new_user.firstName}
          autocomplete="off"
          class="text"
          type="text"
          required
        />
      </div>
      <div class="question" class:error={errorMessages}>
        <label for="a2" class:error={errorMessages}
          >Efternavn <span class:hidden={!editMode}>*</span></label
        >
        <input
          id="a2"
          disabled={!editMode}
          autocomplete="off"
          class:error={errorMessages}
          on:focus={resetError}
          bind:value={new_user.lastName}
          class="text"
          type="text"
          required
        />
      </div>
      <div class="question" class:error={errorMessages}>
        <label for="a3" class:error={errorMessages}
          >Adgangskode <span class:hidden={!editMode}>*</span></label
        >
        <input
          id="a3"
          disabled={!editMode}
          autocomplete="off"
          class:error={errorMessages}
          on:focus={resetError}
          bind:value={new_user.password}
          class="text"
          type="password"
          required
        />
      </div>
      <div class="question" class:error={errorMessages}>
        <label for="a4" class:error={errorMessages}
          >Uni-login <span class:hidden={!editMode}>*</span></label
        >
        <input
          id="a4"
          disabled={!editMode}
          autocomplete="off"
          class:error={errorMessages}
          on:focus={resetError}
          bind:value={new_user.unilogin}
          class="text"
          type="text"
          required
        />
      </div>
      <div class="question" class:error={errorMessages}>
        <label for="a5" class:error={errorMessages}
          >E-mail <span class:hidden={!editMode}>*</span></label
        >
        <input
          id="a5"
          disabled={!editMode}
          autocomplete="off"
          class:error={errorMessages}
          on:focus={resetError}
          bind:value={new_user.email}
          class="text"
          type="text"
          required
        />
      </div>
      <div class="question" class:error={errorMessages}>
        <label for="a6" class:error={errorMessages}
          >Vejnavn <span class:hidden={!editMode}>*</span></label
        >
        <input
          id="a6"
          disabled={!editMode}
          autocomplete="off"
          class:error={errorMessages}
          on:focus={resetError}
          bind:value={new_user.street1}
          class="text"
          type="text"
          required
        />
      </div>
      <div class="question" class:error={errorMessages}>
        <label for="a7" class:error={errorMessages}>Etage </label>
        <input
          id="a7"
          disabled={!editMode}
          autocomplete="off"
          class:error={errorMessages}
          on:focus={resetError}
          bind:value={new_user.street2}
          class="text"
          type="text"
        />
      </div>
      <div class="question" class:error={errorMessages}>
        <label for="a8" class:error={errorMessages}
          >City <span class:hidden={!editMode}>*</span></label
        >
        <input
          id="a8"
          disabled={!editMode}
          autocomplete="off"
          class:error={errorMessages}
          on:focus={resetError}
          bind:value={new_user.city}
          class="text"
          type="text"
          required
        />
      </div>
      <div class="question" class:error={errorMessages}>
        <label for="a9" class:error={errorMessages}
          >Postnummer <span class:hidden={!editMode}>*</span></label
        >
        <input
          autocomplete="off"
          disabled={!editMode}
          class:error={errorMessages}
          on:focus={resetError}
          bind:value={new_user.zip}
          class="text"
          id="a9"
          type="number"
          required
        />
      </div>
      <div class="question">
        <label for="a10" class:error={errorMessages}
          >Bruger rolle <span class:hidden={!editMode}>*</span></label
        >

        <select
          disabled={!editMode}
          id="a10"
          required
          form="user-form"
          bind:value={new_user.role}
        >
          <option selected disabled>Vælg fra liste</option>
          {#each roles as role}
            <option id="role" value={role.UUID}>{role.name}</option>
          {/each}
        </select>
      </div>

      <div class="question">
        <label for="a11" class:error={errorMessages}
          >Uddannelse<span class:hidden={!editMode}>*</span></label
        >

        <select
          disabled={!editMode}
          id="a11"
          required
          form="user-form"
          bind:value={new_user.education}
        >
          <option selected disabled>Vælg fra liste</option>
          {#each educations as education}
            <option id="education" value={education.UUID}
              >{education.name}</option
            >
          {/each}
        </select>
      </div>
    </form>
  </div>
</div>

<style>
  button#clear-picture {
    position: absolute;
    width: 4rem;
    height: 4rem;
    right: 0;
    font-size: 2rem;
    border-radius: 50%;
    background: var(--s);
    border: none;
    transform: translateX(-40px);
  }
  .clear-picture:focus {
    outline: 4px solid var(--text1);
  }
  .hidden {
    display: none;
  }
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
    border: var(--text1) 1px solid;
    border-radius: 10px;
    background: var(--bg1);
    font-size: 1rem;
    padding: 10px 15px;
  }
  input.text:disabled,
  select:disabled {
    color: var(--text2) !important;
    opacity: 1;
  }

  .content {
    height: 100%;
    box-sizing: border-box;
    padding: 2rem;
    display: flex;
    gap: 1rem;
  }
  img {
    max-width: 90%;
    object-fit: cover;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
  }
  .image-upload {
    width: max(35%, 400px);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    background-color: var(--bg2);
    border-radius: 10px;
    padding: 1rem;
    position: relative;
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
  button:disabled {
    opacity: 0.5;
  }

  span {
    position: absolute;
    transform: translate(5px, -5px);
    color: var(--s);
    font-size: 2rem;
    font-weight: 400;
  }

  form {
    position: relative;
    display: inline-block;
    max-width: 700px;

    box-sizing: border-box;

    background: transparent;
    border-radius: 40px;

    left: 50%;
    -moz-transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
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

  form .question label {
    transform-origin: left center;
    color: var(--text1);
    font-weight: 300;
    letter-spacing: 0.01em;
    font-size: 1rem;
    box-sizing: border-box;
    padding: 10px 15px;
    display: block;
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
    border: 2px solid var(--i);
    background: var(--bg2);
    color: var(--text1);
  }

  form .question .error {
    border-color: var(--s) !important;
    color: var(--s) !important;
  }
</style>
