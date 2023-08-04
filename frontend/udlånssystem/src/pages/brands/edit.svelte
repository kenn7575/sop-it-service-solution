<script lang="ts">
  import { onMount } from "svelte";
  import axios from "axios";
  import { brandModel } from "../../types/brandModel.js";
  import deleteItem from "../../data/delete.js";
  import update from "../../data/update.js";
  import TextQuestion from "../../components/textQuestion.svelte";
  import FormEditPanel from "../../components/form-edit-panel.svelte";
  import goToPath from "../../services/goToPath.js";
  import doesObjectsMatch from "../../services/doesObjectsMatch.js";
  import getData from "../../data/getData.js";

  //this is the id of the brand to be edited
  export let id;

  //if the page is in edit mode or read only
  let editMode = false;

  //imported Data
  let importData: brandModel;
  let exportData: brandModel;

  let table = "brands";
  let page_name = "Brands";

  onMount(async () => {
    try {
      importDataFromDB();
    } catch (error) {
      console.log(error);
    }
  });

  async function importDataFromDB() {
    const data = await getData(table, id);

    // HOT FIX - if the data is not found, redirect to the index page
    if (!data?.UUID) {
      alert("Kunne ikke finde data");
      goToPath(`/${page_name.toLowerCase()}`);
      return;
    }
    exportData = new brandModel({ ...data });
    importData = new brandModel({ ...data });
  }

  async function handleUpdate(): Promise<any> {
    if (doesObjectsMatch(importData, exportData)) {
      alert("Ingen ændringer");
      return;
    }
    if (!exportData.validate()) {
      alert("Udfyld alle felter");
      return;
    }
    const response: any = await update(exportData, table);
    if (response && response.success) {
      importDataFromDB();
      editMode = false;
      alert("Changes saved");
    } else {
      alert("Error 500 - Ukendt fejl");
    }
  }

  async function handleDelete() {
    const response: any = await deleteItem({
      UUID: importData.UUID,
      table: table,
    });
    console.log(response);
    if (response?.success) {
      alert("Slettet");
      goToPath(`/${page_name.toLowerCase()}`);
    } else {
      alert("Error 500 - Ukendt fejl");
    }
  }
</script>

{#if importData}
  <div class="content">
    <FormEditPanel
      on:reset={() => {
        importDataFromDB();
      }}
      on:cancel={() => {
        goToPath(`/${page_name.toLowerCase()}`);
      }}
      on:delete={handleDelete}
      on:update={handleUpdate}
      bind:editMode
    />
    <div
      on:submit={(e) => {
        e.preventDefault;
        handleUpdate();
      }}
      class="form"
    >
      <form id="user-form">
        <TextQuestion bind:binding={exportData.name} label="Navn" {editMode} />
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
