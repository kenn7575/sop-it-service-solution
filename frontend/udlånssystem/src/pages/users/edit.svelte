<script lang="ts">
  import DropZone from "../../components/drop-zone.svelte";
  import { onMount } from "svelte";
  import axios from "axios";
  import type { UserModel } from "../../types/userModel";
  import { currentUser } from "../../services/login";
  import { getData } from "../../data/data";
  import validateInputs from "../../services/validateInputs.js";
  import doseObjectsMach from "../../services/doseObjectsMach.js";
  import deleteItem from "../../services/deleteItemFromDB";

  //this is the id of the user to be edited
  export let id;
  $: user = $currentUser;

  //if the page is in edit mode or read only
  let editMode = false;

  //the picture to be uploaded
  let picture;

  //imported Data
  let roles = [];
  let educations = [];

  let importData: UserModel;

  let name;
  let username;
  let mail;
  let address_line_1;
  let address_line_2;
  let city;
  let postal_code;
  let role_id;
  let education_id;

  let new_name;
  let new_username;
  let new_mail;
  let new_address_line_1;
  let new_address_line_2;
  let new_city;
  let new_postal_code;
  let new_role_id;
  let new_education_id;

  //get all data
  onMount(async () => {
    try {
      roles = await getData("roles_view").then((res) => {
        res.map((role) => (role.UUID = role.UUID.toString()));

        return res;
      });

      educations = await getData("educations").then((res) => {
        res.map((edu) => (edu.UUID = edu.UUID.toString()));
        return res;
      });

      getUser();
    } catch (error) {
      console.log(error);
    }
  });
  async function getUser() {
    importData = await axios
      .get("get_data.php", { params: { UUID: id, table: "users" } })
      .then((res) => {
        return res.data;
      });

    if (importData.address_id === null)
      importData.address_id = {
        UUID: null,
        address_line_1: null,
        address_line_2: null,
        city: null,
        postal_code: null,
      };

    asignValuesToUser(importData);
    asignValueToNewUser();
  }

  function asignValuesToUser(importUser) {
    name = importUser.name;
    username = importUser.username;
    mail = importUser.mail;
    address_line_1 = importUser.address_id.address_line_1;
    address_line_2 = importUser.address_id.address_line_2;
    city = importUser.address_id.city;
    postal_code = importUser.address_id.postal_code;
    role_id = importUser.role_id.UUID;
    education_id = importUser.education_id.UUID;
  }

  function asignValueToNewUser() {
    new_name = name;
    new_username = username;
    new_mail = mail;
    new_address_line_1 = address_line_1;
    new_address_line_2 = address_line_2;
    new_city = city;
    new_postal_code = postal_code;
    new_role_id = role_id;
    new_education_id = education_id;
  }
  function resetPage() {
    new_name = name;
    new_username = username;
    new_mail = mail;
    new_address_line_1 = address_line_1;
    new_address_line_2 = address_line_2;
    new_city = city;
    new_postal_code = postal_code;
    new_role_id = role_id;
    new_education_id = education_id;
    picture = "";
  }
  function handleUpdate() {
    if (!validateInputs()) {
      alert("Udfyld alle felter");
      return;
    }

    if (
      doseObjectsMach(
        {
          name,
          username,
          mail,
          address_line_1,
          address_line_2,
          city,
          postal_code,
          role_id,
          education_id,
        },
        {
          name: new_name,
          username: new_username,
          mail: new_mail,
          address_line_1: new_address_line_1,
          address_line_2: new_address_line_2,
          city: new_city,
          postal_code: new_postal_code,
          role_id: new_role_id,
          education_id: new_education_id,
        }
      )
    ) {
      alert("Ingen ændringer");
      return;
    }

    let DataToBeUpdated: UserModel = {
      UUID: importData.UUID,
      name: new_name,
      username: new_username,
      mail: new_mail,
      img_name: picture,
      password: "",
      address_id: {
        UUID: importData.address_id.UUID,
        address_line_1: new_address_line_1,
        address_line_2: new_address_line_2,
        city: new_city,
        postal_code: new_postal_code,
      },
      role_id: new_role_id,
      education_id: new_education_id,
    };
    console.log(DataToBeUpdated);
    axios
      .post("upsert_user.php", DataToBeUpdated)
      .then((res) => {
        editMode = false;
        if ((res.data = true)) {
          alert("Bruger opdateret");
          getUser();
        } else {
          alert("Ukendt fejl! Bruger ikke opdateret");
        }
      })
      .catch((err) => {
        alert("Fejl! " + err);
      });
  }

  function toggleEditMode() {
    //check if user has the right authorization level to edit this user
    if (
      user.role_id.authorization_level_id <=
      importData.role_id.authorization_level_id
    ) {
      alert(
        `Du skal have højre rettighedder for at redigere denne bruger. Du har level ${user.role_id.authorization_level_id} rettighedder og brugeren har level ${importData.role_id.authorization_level_id}.`
      );
      return;
    }
    editMode = !editMode;
  }

  function clearPicture() {
    picture = "";
  }
  function handleFileDrop(event) {
    picture = event.detail;
  }
  function handleDelete() {
    deleteItem(
      "delete_user.php",
      {
        UUID: importData.UUID,
        address_id: importData.address_id.UUID,
      },
      "/brugere"
    );
  }
</script>

{#if importData}
  <div class="content">
    <div class="image-upload">
      <img
        src={picture
          ? picture
          : "https://img.freepik.com/free-icon/user_318-563642.jpg"}
        alt="Profile picture"
      />
      {#if editMode && picture}
        <button id="clear-picture" on:click={clearPicture}
          ><i class="fa-solid fa-trash" /></button
        >
      {/if}

      <div class="buttons">
        <button
          on:click={toggleEditMode}
          disabled={!editMode}
          on:click={resetPage}>Annuller</button
        >
        {#if editMode}
          <button on:click={handleUpdate}>Gem</button>
        {:else}
          <button on:click={toggleEditMode}>Rediger</button>
        {/if}
      </div>
      {#if editMode}
        <button id="delete" on:click={handleDelete}>Slet bruger</button>
        <DropZone on:message={handleFileDrop} />
      {/if}
    </div>

    <div class="form">
      <form id="user-form">
        <div class="question">
          <label for="a2">Navn <span class:hidden={!editMode}>*</span></label>
          <input
            id="a2"
            disabled={!editMode}
            autocomplete="off"
            bind:value={new_name}
            class="text"
            type="text"
            required
          />
        </div>

        <div class="question">
          <label for="a4"
            >Uni-login <span class:hidden={!editMode}>*</span></label
          >
          <input
            id="a4"
            disabled={!editMode}
            autocomplete="off"
            bind:value={new_username}
            class="text"
            type="text"
            required
          />
        </div>
        <div class="question">
          <label for="a5">E-mail <span class:hidden={!editMode}>*</span></label>
          <input
            id="a5"
            disabled={!editMode}
            autocomplete="off"
            bind:value={new_mail}
            class="text"
            type="text"
            required
          />
        </div>

        <div class="question">
          <label for="a6">Vejnavn <span class:hidden={!editMode}>*</span></label
          >
          <input
            id="a6"
            disabled={!editMode}
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
            disabled={!editMode}
            autocomplete="off"
            bind:value={new_address_line_2}
            class="text"
            type="text"
          />
        </div>
        <div class="question">
          <label for="a8">By <span class:hidden={!editMode}>*</span></label>
          <input
            id="a8"
            disabled={!editMode}
            autocomplete="off"
            bind:value={new_city}
            class="text"
            type="text"
            required
          />
        </div>
        <div class="question">
          <label for="a9"
            >Postnummer <span class:hidden={!editMode}>*</span></label
          >
          <input
            autocomplete="off"
            disabled={!editMode}
            bind:value={new_postal_code}
            class="text"
            id="a9"
            type="number"
            required
          />
        </div>
        <div class="question">
          <label for="a10"
            >Bruger rolle <span class:hidden={!editMode}>*</span></label
          >
          {#if roles}
            <select
              disabled={!editMode}
              id="a10"
              required
              form="user-form"
              bind:value={new_role_id}
            >
              {#each roles as role}
                {#if role.level < user.role_id.authorization_level_id}
                  <option selected={role.UUID === role_id} value={role.UUID}
                    >{role.name}</option
                  >
                {/if}
              {/each}
            </select>
          {/if}
        </div>

        <div class="question">
          <label for="a11"
            >Uddannelse<span class:hidden={!editMode}>*</span></label
          >

          <select
            disabled={!editMode}
            id="a11"
            required
            form="user-form"
            bind:value={new_education_id}
          >
            {#each educations as education}
              <option
                selected={education_id === education.UUID}
                value={education.UUID}>{education.name}</option
              >
            {/each}
          </select>
        </div>
      </form>
    </div>
  </div>
{/if}

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
  #delete {
    min-height: 32px;
    background: var(--s);
    color: #fff;
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
