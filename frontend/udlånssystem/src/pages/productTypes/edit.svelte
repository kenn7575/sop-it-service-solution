<script lang="ts">
  import { onMount } from "svelte";
  import axios from "axios";
  import validateInputs from "../../services/validateInputs.js";
  import doseObjectsMach from "../../services/doseObjectsMach.js";
  import type { productModel } from "../../types/productModel.js";
  import deleteItem from "../../services/deleteItemFromDB.js";
  import createDataInDB from "../../services/createDataInDB.js";

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
    if (doseObjectsMach({ name }, { name: new_name })) {
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
      product_id_prefix: null,
    };
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
      "/producttypes"
    );
  }
  function handleSubmit(event) {
    event.preventDefault();
    handleUpdate();
  }
</script>

{#if importData}
  <div class="content">
    <div class="image-upload">
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

  .content {
    height: 100%;
    box-sizing: border-box;
    padding: 2rem;
    display: flex;
    gap: 1rem;
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
</style>
