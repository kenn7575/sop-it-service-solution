<script lang="ts">
  import { onMount } from "svelte";
  import { itemModel } from "../../types/itemModel.js";
  import TextQuestion from "../../components/textQuestion.svelte";
  import SelectQuestion from "../../components/selectQuestion.svelte";
  import deleteItem from "../../data/delete.js";
  import update from "../../data/update.js";
  import FormEditPanel from "../../components/form-edit-panel.svelte";
  import goToPath from "../../services/goToPath.js";
  import doesObjectsMatch from "../../services/doesObjectsMatch.js";
  import getData from "../../data/getData.js";

  import { barcodeStore } from "../../stores/barcodeStore.js";
  $barcodeStore = ""; //reset the barcode store. This is to prevent automatic redirect on load

  //this is the id of the item to be edited
  export let id;

  //if the page is in edit mode or read only
  let editMode = false;

  //imported Data
  let importData: any;
  let exportData: any;

  let table = "cable_categories";
  let page_name = "Kabelgrupper";

  let cableLoan = { loan_id: "" };
  let cableCategories = [];

  async function importDataFromDB() {
    let data = await getData(table, id);

    // HOT FIX - if the data is not found, redirect to the index page
    if (!data?.UUID) {
      if (data) alert("Kunne ikke hente data: " + data);
      goToPath(`/${page_name.toLowerCase()}`);
      return;
    }
    exportData = { ...data };
    importData = { ...data };
  }

  async function handleUpdate(): Promise<any> {
    if (doesObjectsMatch(importData, exportData)) {
      alert("Ingen ændringer");
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
      table,
    });
    console.log(response);
    if (response?.success) {
      alert("Slettet");
      goToPath(`/${page_name.toLowerCase()}`);
    } else {
      alert("Error 500 - Ukendt fejl");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleUpdate();
  }
  import { path } from "../../stores/pathStore.js";
  // $: console.log($path);

  onMount(async () => {
    cableCategories = await getData("cable_categories");
    if (id) {
      importDataFromDB();
    }
  });
</script>

{#if importData}
  <div class="content">
    <FormEditPanel
      on:cancel={() => {
        goToPath(`/${page_name.toLowerCase()}`);
      }}
      on:reset={importDataFromDB}
      on:delete={handleDelete}
      on:update={handleUpdate}
      bind:editMode
      loanId={cableLoan?.loan_id}
      item={exportData}
    />
    <div
      on:submit={(e) => {
        e.preventDefault;
        handleUpdate();
      }}
      class="form"
    >
      <form id="user-form">
        <TextQuestion
          label="Navn"
          type="text"
          bind:binding={exportData.name}
          {editMode}
          required
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
