<script lang="ts">
  import { onMount } from "svelte";
  import axios from "axios";
  import validateInputs from "../../services/validateInputs.js";
  import doesObjectsMatch from "../../services/doesObjectsMatch.js";
  import deleteItem from "../../data/delete.js";
  import { categoryGroupModel } from "../../types/categoryGroupModel.js";
  import TextQuestion from "../../components/textQuestion.svelte";
  import FormEditPanel from "../../components/form-edit-panel.svelte";
  import goToPath from "../../services/goToPath.js";
  import updateItem from "../../data/update.js";

  //this is the id of the brand to be edited
  export let id;

  //if the page is in edit mode or read only
  let editMode = false;

  //imported Data
  let importData: categoryGroupModel;
  let exportData: categoryGroupModel;

  //get all data
  onMount(async () => {
    try {
      importDataFromDB();
    } catch (error) {
      console.log(error);
    }
  });
  async function importDataFromDB() {
    const { data } = await axios("get_data.php", {
      params: { UUID: id, table: "category_groups" },
    });
    exportData = new categoryGroupModel({ ...data });
    importData = new categoryGroupModel({ ...data });
  }

  function handleUpdate() {
    if (!validateInputs()) {
      alert("Udfyld alle felter");
      return;
    }
    console.log(importData, exportData);
    if (doesObjectsMatch(importData, exportData)) {
      alert("Ingen ændringer");
      return;
    }

    updateItem(importData, exportData, "category_groups").then((res) => {
      if (res) {
        importDataFromDB();
        editMode = false;
      }
    });
  }

  function handleDelete() {
    deleteItem(
      "delete_data.php",
      {
        UUID: importData.UUID,
        table: "category_groups",
      },
      "/kategorigrupper"
    );
  }
  function handleSubmit(event) {
    event.preventDefault();
    handleUpdate();
  }
</script>

{#if importData}
  <div class="content">
    <FormEditPanel
      on:cancel={() => {
        goToPath("/kategorigrupper");
      }}
      on:reset={importDataFromDB}
      on:delete={handleDelete}
      on:update={handleUpdate}
      bind:editMode
    />

    <div class="form">
      <form on:submit={handleSubmit} id="user-form">
        <TextQuestion
          bind:binding={exportData.name}
          label="Navn"
          required
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
