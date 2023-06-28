<script lang="ts">
  import { onMount } from "svelte";
  import axios from "axios";
  import validateInputs from "../../services/validateInputs.js";
  import doesObjectsMatch from "../../services/doesObjectsMatch.js";
  import type { productModel } from "../../types/productModel.js";
  import deleteItem from "../../data/delete.js";
  import createDataInDB from "../../data/create.js";

  //this is the id of the product to be edited
  export let id;

  //if the page is in edit mode or read only
  let editMode = false;

  //imported Data
  let importData: productModel;

  let name;
  let new_name;

  //get all data
  onMount(async () => {
    try {
      importDataFromDB();
    } catch (error) {
      console.log(error);
    }
  });
  async function importDataFromDB() {
    importData = await axios
      .get("get_data.php", { params: { UUID: id, table: "products" } })
      .then((res) => {
        return res.data;
      });

    asignValuesToUser(importData);
    asignValueToNewUser();
  }

  function asignValuesToUser(importUser) {
    name = importUser.name;
  }

  function asignValueToNewUser() {
    new_name = name;
  }

  function handleUpdate() {
    if (!validateInputs()) {
      alert("Udfyld alle felter");
      return;
    }
    if (doesObjectsMatch({ name }, { name: new_name })) {
      alert("Ingen ændringer");
      return;
    }
    let DataToBeUpdated: productModel = {
      UUID: id,
      name: new_name,
      brand_id: null,
      category_id: null,
      date_created: null,
      date_updated: null,
      image_name: null,
      validateImport: function (): boolean { throw new Error("Function not implemented.") },
      validateExport: function (): boolean { throw new Error("Function not implemented.") }
    };
    delete DataToBeUpdated.validateImport;
    delete DataToBeUpdated.validateExport;
    console.log(DataToBeUpdated);
    createDataInDB("products", DataToBeUpdated, "/produkttyper");
  }

  function toggleEditMode() {
    editMode = !editMode;
  }

  function resetPage() {
    new_name = name;
  }

  window.addEventListener("keydown", function (e) {
    if (e.key == "Escape") {
      resetPage();
      toggleEditMode();
    }
  });

  function handleDelete() {
    deleteItem(
      "delete_data.php",
      {
        UUID: importData.UUID,
        table: "products",
      },
      "/produkttyper"
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
        <button id="delete" on:click={handleDelete}>Slet produkt</button>
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
