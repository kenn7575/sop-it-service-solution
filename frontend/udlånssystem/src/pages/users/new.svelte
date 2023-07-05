<script lang="ts">
  import DropZone from "../../components/drop-zone.svelte";
  import { onMount } from "svelte";
  import { UserModel } from "../../types/userModel";
  import validateInputs from "../../services/validateInputs.js";
  import getData from "../../data/getData";
  import axios from "axios";
  import { path } from "../../stores/pathStore";
  import { navigate } from "svelte-routing";
  import createItem from "../../data/create";
  import TextQuestion from "../../components/textQuestion.svelte";
  import SelectQuestion from "../../components/selectQuestion.svelte";
  import { AddressModel } from "../../types/addressModel";
  import goToPath from "../../services/goToPath";

  let editMode = true; //if the page is in edit mode or read only

  let page_name = "Brugere";
  let table = "users";

  //the picture to be uploaded
  let picture;

  //imported Data
  let roles = [];
  let educations = [];

  let exportData: UserModel = new UserModel({});
  let exportAddress: AddressModel = new AddressModel({});
  
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

    } catch (error) {
      console.log(error);
    }
  });

  async function handleCreate() {
    if (!validateInputs()) {
      alert("Udfyld alle felter");
      return;
    }
    console.log(exportData);
    const address_id = await createItem("addresses", { ...exportAddress })
    exportData.address_id = address_id.id;
    const response: any = await createItem("users", { ...exportData })
    if (response && response.success) {
      alert("Gemt");
      goToPath(`/${page_name.toLowerCase()}/${response.id}`);
    } else {
      alert("Error 500 - Ukendt fejl");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleCreate();
  }
</script>

<div class="content">
  <div class="control-panel">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img
      src={picture
        ? picture
        : "https://img.freepik.com/free-icon/user_318-563642.jpg"}
      alt="Profile picture"
    />
    {#if picture}
      <button id="clear-picture" on:click={() => {picture = ""}}
        ><i class="fa-solid fa-trash" /></button
      >
    {/if}

    <div class="buttons">
      <button
        on:click={() => {
          console.log("Annuler!");
        }}>Annuller</button
      >

      <button on:click={handleCreate}>Opret</button>
    </div>

    <DropZone on:message={(event) => {picture = event.detail}} />
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
        bind:binding={exportAddress.address_line_1}
        label="Vejnavn"
        {editMode}
      />
      <TextQuestion
        bind:binding={exportAddress.address_line_2}
        label="Etage mm."
        {editMode}
        required={false}
      />
      <TextQuestion
        bind:binding={exportAddress.city}
        label="By"
        {editMode}
      />
      <TextQuestion
        bind:binding={exportAddress.postal_code}
        label="Postnummer"
        type="number"
        {editMode}
      />
      <SelectQuestion
        bind:binding={exportData.role_id}
        options={roles}
        label="Bruger rolle"
        {editMode}
      />

      <SelectQuestion
        bind:binding={exportData.education_id}
        options={educations}
        label="Uddannelse"
        {editMode}
      />
    </form>
  </div>
</div>

<style>
  .content {
    height: 100%;
    box-sizing: border-box;
    padding: 2rem;
    display: flex;
    gap: 1rem;
  }
</style>
