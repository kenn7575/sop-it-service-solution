<script lang="ts">
  import DropZone from "../../components/drop-zone.svelte";
  import { onMount } from "svelte";
  import axios from "axios";
  import type { UserModel } from "../../types/userModel";
  import { currentUser } from "../../services/login";
  import getData from "../../data/retrieve";
  import validateInputs from "../../services/validateInputs.js";
  import doesObjectsMatch from "../../services/doesObjectsMatch.js";
  import deleteItem from "../../data/delete";
  import togggleEditMode from "../../services/toggleEditMode";
  import TextQuestion from "../../components/textQuestion.svelte";
  import SelectQuestion from "../../components/selectQuestion.svelte";
  export let id; //this is the id of the user to be edited

  $: user = $currentUser; // the current user - used to check if the user has the right authorization level to edit this user

  let editMode = false; //if the page is in edit mode or read only

  //the picture to be uploaded
  let picture;

  //imported Data
  let roles;
  let educations;
  let importData: UserModel;

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
    resetPage();
  }
  function resetPage() {
    new_name = importData.name;
    new_username = importData.username;
    new_mail = importData.mail;
    new_address_line_1 = importData.address_id.address_line_1;
    new_address_line_2 = importData.address_id.address_line_2;
    new_city = importData.address_id.city;
    new_postal_code = importData.address_id.postal_code;
    new_role_id = importData.role_id.UUID;
    new_education_id = importData.education_id.UUID;
    picture = "";
  }
  function handleUpdate() {
    if (!validateInputs()) {
      alert("Udfyld alle felter");
      return;
    }
    //prepere data for comparison
    var oldObject: any = { ...importData };
    delete oldObject.date_created;
    delete oldObject.date_updated;
    delete oldObject.address_id.date_created;
    delete oldObject.address_id.date_updated;
    delete oldObject.is_ad_user;
    oldObject.education_id = oldObject.education_id.UUID;
    oldObject.role_id = oldObject.role_id.UUID;

    const DataToBeUpdated = {
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
    console.log(importData);
    if (doesObjectsMatch(oldObject, DataToBeUpdated)) {
      alert("Ingen ændringer");
      return;
    }
    console.log(DataToBeUpdated);
    axios
      .post("upsert_user.php", {data: DataToBeUpdated})
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
  function handleEditMode() { editMode = togggleEditMode(user, importData, editMode); }

  function clearPicture() { picture = ""; }
  
  function handleFileDrop(event: any) { picture = event.detail; }

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
  function handleSubmit(event: Event) {
    event.preventDefault();
    handleUpdate();
  }
</script>

{#if importData}
  <div class="content">
    <div class="control-panel">
      <!-- svelte-ignore a11y-img-redundant-alt -->
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
          on:click={handleEditMode}
          disabled={!editMode}
          on:click={resetPage}>Annuller</button
        >
        {#if editMode}
          <button on:click={handleUpdate}>Gem</button>
        {:else}
          <button on:click={handleEditMode}>Rediger</button>
        {/if}
      </div>
      {#if editMode}
        <button id="delete" on:click={handleDelete}>Slet bruger</button>
        <DropZone on:message={handleFileDrop} />
      {/if}
    </div>
    <div class="form">
      <form on:submit={handleSubmit} id="user-form">
        <TextQuestion bind:binding={new_name} label="Navn" {editMode} />
        <TextQuestion
          bind:binding={new_username}
          label="Uni-login"
          {editMode}
        />
        <TextQuestion bind:binding={new_mail} label="E-mail" {editMode} />
        <TextQuestion
          bind:binding={new_address_line_1}
          label="Vejnavn"
          {editMode}
        />
        <TextQuestion
          bind:binding={new_address_line_2}
          label="Etage mm."
          {editMode}
          required={false}
        />
        <TextQuestion bind:binding={new_city} label="By" {editMode} />
        <TextQuestion
          bind:binding={new_postal_code}
          label="Postnummer"
          {editMode}
        />
        <SelectQuestion
          bind:binding={new_role_id}
          options={roles}
          match={importData.role_id}
          label="Bruger rolle"
          {editMode}
        />
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
                  <option
                    selected={role.UUID === importData.role_id}
                    value={role.UUID}>{role.name}</option
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
                selected={importData.education_id === education.UUID}
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
