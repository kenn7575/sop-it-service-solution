<script lang="ts">
  import DropZone from "../../components/drop-zone.svelte";
  import { onMount } from "svelte";
  import { UserModel } from "../../types/userModel";
  import { currentUser } from "../../services/login";
  import getData from "../../data/getData";
  import update from "../../data/update";
  import doesObjectsMatch from "../../services/doesObjectsMatch.js";
  import deleteItem from "../../data/delete";
  import togggleEditMode from "../../services/toggleEditMode";
  import TextQuestion from "../../components/textQuestion.svelte";
  import SelectQuestion from "../../components/selectQuestion.svelte";
  import goToPath from "../../services/goToPath";


  export let id; //this is the id of the user to be edited

  let page_name = "Brugere";
  let table = "users";

  $: user = $currentUser; // the current user - used to check if the user has the right authorization level to edit this user

  let editMode = false; //if the page is in edit mode or read only

  //the picture to be uploaded
  let picture;

  //imported Data
  let roles;
  let educations;
  let importData: UserModel;
  let exportData: UserModel;

  //get all data
  onMount(async () => {
    try {
      importDataFromDB();
    } catch (error) {
      console.log(error);
    }
  });
  
  async function importDataFromDB() {
    //get data for dropdowns
    roles = await getData("roles").then((res) => {
      res.map((role) => (role.UUID = role.UUID.toString()));
      return res;
    });

    educations = await getData("educations").then((res) => {
      res.map((edu) => (edu.UUID = edu.UUID.toString()));
      return res;
    });

    //get user data
    const userData = await getData(table, id);
    console.log("user", userData);
    if (!userData?.UUID) {
      alert("Kunne ikke finde data" + userData);
      goToPath(`/${page_name.toLowerCase()}`);
      return;
    }
    // HOT FIX - if the data is not found, redirect to the index page
    importData = new UserModel({ ...userData });
    exportData = new UserModel({ ...userData });
  }
  
  async function handleReset() {
    await importDataFromDB();
    editMode = false;
  }

  async function handleUpdate() {
    if (!exportData.validate()) {
      alert("Udfyld alle felter, bruger");
      return;
    }
    if (
      doesObjectsMatch(importData, exportData)
    ) {
      alert("Ingen ændringer");
      return;
    }
    const response: any = await update(exportData, table);
    if (response && response.success) {
      importDataFromDB();
      editMode = false;
      alert("Ændringer gemt");
    } else {
      alert("Error 500 - Ukendt fejl");
    }
  }

  function handleEditMode() {
    editMode = togggleEditMode(user, importData, editMode);
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
        <button
          id="clear-picture"
          on:click={() => {
            picture = "";
          }}><i class="fa-solid fa-trash" /></button
        >
      {/if}
      <div class="buttons">
        {#if editMode}
          <button
            on:click={() => {
              editMode = !editMode;
            }}
            disabled={!editMode}
            on:click={handleReset}>Annuller</button
          >
          <button on:click={handleUpdate}>Gem</button>
        {:else}
          <button
            on:click={() => {
              goToPath("/brugere");
            }}>Tilbage</button
          >
          <button
            on:click={() => {
              editMode = !editMode;
            }}>Rediger</button
          >
        {/if}
      </div>
    </div>
    <div class="form">
      <form on:submit={handleSubmit} id="user-form">
        <TextQuestion bind:binding={exportData.name} label="Navn" {editMode} />
        <TextQuestion
          bind:binding={exportData.username}
          label="Uni-login"
          {editMode}
        />
        <TextQuestion
          bind:binding={exportData.mail}
          label="E-mail"
          {editMode}
        />

        <SelectQuestion
          bind:binding={exportData.role_id}
          options={roles}
          match={{ UUID: importData.role_id }}
          label="Bruger rolle"
          {editMode}
        />

        <SelectQuestion
          bind:binding={exportData.education_id}
          options={educations}
          match={{ UUID: importData.education_id }}
          label="Uddannelse"
          {editMode}
        />
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
