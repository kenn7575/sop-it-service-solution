<script lang="ts">
  import DropZone from "../../components/drop-zone.svelte";
  import { onMount } from "svelte";
  import axios from "axios";
  import { UserModel } from "../../types/userModel";
  import { currentUser } from "../../services/login";
  import getData from "../../data/retrieve";
  import validateInputs from "../../services/validateInputs.js";
  import doesObjectsMatch from "../../services/doesObjectsMatch.js";
  import deleteItem from "../../data/delete";
  import togggleEditMode from "../../services/toggleEditMode";
  import TextQuestion from "../../components/textQuestion.svelte";
  import SelectQuestion from "../../components/selectQuestion.svelte";
  import updateItem from "./update";

  export let id; //this is the id of the user to be edited

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
      roles = await getData("roles").then((res) => {
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
    const { data } = await axios("get_data.php", {
      params: { UUID: id, table: "users" },
    });
    delete data.password;
    console.log(data, "data");
    importData = new UserModel({ ...data });
    exportData = new UserModel({ ...data });

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
    exportData = new UserModel({ ...importData });
  }
  function handleUpdate() {
    if (!validateInputs()) {
      alert("Udfyld alle felter");
      return;
    }
    //prepere data for comparison

    console.log(exportData);
    if (doesObjectsMatch(importData, exportData)) {
      alert("Ingen ændringer");
      return;
    }

    updateItem(importData, exportData, "users").then((res) => {
      console.log(res);
      if (res) {
        getUser();
      }
    });
  }
  function handleEditMode() {
    editMode = togggleEditMode(user, importData, editMode);
  }

  function clearPicture() {
    picture = "";
  }

  function handleFileDrop(event: any) {
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
        <TextQuestion
          bind:binding={exportData.address_id.address_line_1}
          label="Vejnavn"
          {editMode}
        />
        <TextQuestion
          bind:binding={exportData.address_id.address_line_2}
          label="Etage mm."
          {editMode}
          required={false}
        />
        <TextQuestion
          bind:binding={exportData.address_id.city}
          label="By"
          {editMode}
        />
        <TextQuestion
          type="number"
          bind:binding={exportData.address_id.postal_code}
          label="Postnummer"
          {editMode}
        />
        <SelectQuestion
          bind:binding={exportData.role_id}
          options={roles}
          match={importData.role_id}
          label="Bruger rolle"
          {editMode}
        />

        <SelectQuestion
          bind:binding={exportData.education_id}
          options={educations}
          match={importData.education_id}
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
