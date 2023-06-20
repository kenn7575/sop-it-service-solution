<script lang="ts">
  import DropZone from "../../components/drop-zone.svelte";
  import { onMount } from "svelte";
  import axios from "axios";
  import type { UserModel } from "../../types/userModel";

  import { currentUser } from "../../services/login";
  //this is the id of the user to be edited

  $: user = $currentUser;

  //the picture to be uploaded
  let picture;

  //imported Data
  let roles = [];
  let educations = [];

  let new_name;
  let new_username;
  let new_mail;
  let new_address_line_1;
  let new_address_line_2;
  let new_city;
  let new_postal_code;
  let new_role_id;
  let new_education_id;

  function doseMach(ojb1, ojb2) {
    //find out if two objects are the same
    let keys1 = Object.keys(ojb1);
    let keys2 = Object.keys(ojb2);
    if (keys1.length !== keys2.length) return false;
    for (let key of keys1) {
      if (ojb1[key] !== ojb2[key]) return false;
    }
    return true;
  }
  //get all data
  onMount(async () => {
    try {
      roles = await axios
        .post("roles.php", { role_id: user.role_id })
        .then((res) => {
          return res.data;
        });

      educations = await axios.get("educations.php").then((res) => {
        return res.data;
      });
    } catch (error) {
      console.log(error);
    }
  });

  function handleCreateUser() {
    let userToBeUpdated: UserModel = {
      UUID: null,
      name: new_name,
      username: new_username,
      mail: new_mail,
      img_name: picture,
      address_id: {
        UUID: null,
        address_line_1: new_address_line_1,
        address_line_2: new_address_line_2,
        city: new_city,
        postal_code: new_postal_code,
      },
      role_id: new_role_id,
      education_id: new_education_id,
    };
    console.log(userToBeUpdated);
    axios
      .post("update_userV2.php", userToBeUpdated)
      .then((res) => {
        console.log(res);
        //tell the user that the user was updated
      })
      .catch((err) => {
        alert("Felf! " + err);
      });
  }

  function clearPicture() {
    picture = "";
  }
  function handleFileDrop(event) {
    picture = event.detail;
  }
</script>

<div class="content">
  <div class="image-upload">
    <img
      src={picture
        ? picture
        : "https://img.freepik.com/free-icon/user_318-563642.jpg"}
      alt="Profile picture"
    />
    {#if picture}
      <button id="clear-picture" on:click={clearPicture}
        ><i class="fa-solid fa-trash" /></button
      >
    {/if}

    <div class="buttons">
      <button
        on:click={() => {
          console.log("Annuler!");
        }}>Annuller</button
      >

      <button on:click={handleCreateUser}>Opret</button>
    </div>

    <DropZone on:message={handleFileDrop} />
  </div>

  <div class="form">
    <form id="user-form">
      <div class="question">
        <label for="a2">Navn <span>*</span></label>
        <input
          id="a2"
          autocomplete="off"
          bind:value={new_name}
          class="text"
          type="text"
          required
        />
      </div>

      <div class="question">
        <label for="a4">Uni-login <span>*</span></label>
        <input
          id="a4"
          autocomplete="off"
          bind:value={new_username}
          class="text"
          type="text"
          required
        />
      </div>
      <div class="question">
        <label for="a5">E-mail <span>*</span></label>
        <input
          id="a5"
          autocomplete="off"
          bind:value={new_mail}
          class="text"
          type="text"
          required
        />
      </div>

      <div class="question">
        <label for="a6">Vejnavn <span>*</span></label>
        <input
          id="a6"
          autocomplete="off"
          bind:value={new_address_line_1}
          class="text"
          type="text"
          required
        />
      </div>
      <div class="question">
        <label for="a7">Etage mm.</label>
        <input
          id="a7"
          autocomplete="off"
          bind:value={new_address_line_2}
          class="text"
          type="text"
        />
      </div>
      <div class="question">
        <label for="a8">By <span>*</span></label>
        <input
          id="a8"
          autocomplete="off"
          bind:value={new_city}
          class="text"
          type="text"
          required
        />
      </div>
      <div class="question">
        <label for="a9">Postnummer <span>*</span></label>
        <input
          autocomplete="off"
          bind:value={new_postal_code}
          class="text"
          id="a9"
          type="number"
          required
        />
      </div>
      <div class="question">
        <label for="a10">Bruger rolle <span>*</span></label>
        {#if roles}
          <select id="a10" required form="user-form" bind:value={new_role_id}>
            {#each roles as role}
              <option value={role.UUID}>{role.name}</option>
            {/each}
          </select>
        {/if}
      </div>

      <div class="question">
        <label for="a11">Uddannelse<span>*</span></label>

        <select
          id="a11"
          required
          form="user-form"
          bind:value={new_education_id}
        >
          {#each educations as education}
            <option value={education.UUID}>{education.name}</option>
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
    cursor: pointer;
    outline: 4px solid var(--bg2);
  }
  #clear-picture:focus {
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
  .question {
    margin-bottom: 1rem;
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
