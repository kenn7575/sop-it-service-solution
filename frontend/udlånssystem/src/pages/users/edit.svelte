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
  function handleSubmit(event) {
    event.preventDefault();
    handleUpdate();
  }
</script>

{#if importData}
  <div class="content">
    <div class="control-panel">
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
      <form on:submit={handleSubmit} id="user-form">
        <div class="question">
          <label for="a2"
            >Navn <span class="required-tag" class:hidden={!editMode}>*</span
            ></label
          >
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
            >Uni-login <span class="required-tag" class:hidden={!editMode}
              >*</span
            ></label
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
          <label for="a5"
            >E-mail <span class="required-tag" class:hidden={!editMode}>*</span
            ></label
          >
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
          <label for="a6"
            >Vejnavn <span class="required-tag" class:hidden={!editMode}>*</span
            ></label
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
          <label for="a8"
            >By <span class="required-tag" class:hidden={!editMode}>*</span
            ></label
          >
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
            >Postnummer <span class="required-tag" class:hidden={!editMode}
              >*</span
            ></label
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
            >Bruger rolle <span class="required-tag" class:hidden={!editMode}
              >*</span
            ></label
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
            >Uddannelse<span class="required-tag" class:hidden={!editMode}
              >*</span
            ></label
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
  .content {
    height: 100%;
    box-sizing: border-box;
    padding: 2rem;
    display: flex;
    gap: 1rem;
  }
</style>
