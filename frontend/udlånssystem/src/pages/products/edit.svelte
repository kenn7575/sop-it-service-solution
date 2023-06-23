<script lang="ts">
  import { onMount } from "svelte";
  import axios from "axios";
  import validateInputs from "../../services/validateInputs.js";
  import doseObjectsMach from "../../services/doseObjectsMach.js";
  import type { itemModel } from "../../types/itemModel.js";
  import deleteItem from "../../services/deleteItemFromDB.js";
  import createDataInDB from "../../services/createDataInDB.js";

  //this is the id of the item to be edited
  export let id;

  //if the page is in edit mode or read only
  let editMode = false;

  //imported Data
  let importData: itemModel;

  let product_status_id;
  let new_product_status_id;

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
      .get("get_data.php", { params: { UUID: id, table: "items" } })
      .then((res) => {
        return res.data;
      });

    asignValuesToElement(importData);
    asignValueToNewElement();
  }

  function asignValuesToElement(importElement: itemModel) {
    product_status_id = importElement.product_status_id;
    console.log(importElement);
    
  }

  function asignValueToNewElement() {
    new_product_status_id = product_status_id.UUID;
  }

  function handleUpdate() {
    if (!validateInputs()) {
      alert("Udfyld alle felter");
      return;
    }
    if (doseObjectsMach({ product_status_id }, { product_status_id: new_product_status_id })) {
      alert("Ingen ændringer");
      return;
    }
    let DataToBeUpdated: itemModel = {
      UUID: id,
      date_created: null,
      date_updated: null,
      storage_location_id: null,
      product_status_id: null,
      product_id: null
    };
    console.log(DataToBeUpdated);
    createDataInDB("items", DataToBeUpdated, "/produkter");
  }

  function toggleEditMode() {
    editMode = !editMode;
  }

  function resetPage() {
    new_product_status_id = product_status_id;
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
        table: "items",
      },
      "/produkter"
    );
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
      <form id="user-form">
        <div class="question">
          <label for="a2">Status <span class:hidden={!editMode}>*</span></label>
          <input
            id="a2"
            disabled={!editMode}
            autocomplete="off"
            bind:value={new_product_status_id}
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
