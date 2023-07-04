<script lang="ts">
  import { onMount } from "svelte";
  import axios from "axios";
  import { itemModel } from "../../types/itemModel.js";
  import deleteItem from "../../data/delete.js";
  import update from "../../data/update.js";
  import TextQuestion from "../../components/textQuestion.svelte";
  import FormEditPanel from "../../components/form-edit-panel.svelte";
  import goToPath from "../../services/goToPath.js";
  import doesObjectsMatch from "../../services/doesObjectsMatch.js";
  import getData from "../../data/getData.js";
  import type { productStatusModel } from "../../types/productStatusModel.js";
  import SelectQuestion from "../../components/selectQuestion.svelte";
  import type { storageLocationModel } from "../../types/storageLocationModel.js";
  import type { productModel } from "../../types/productModel.js";

  //this is the id of the item to be edited
  export let id;

  //if the page is in edit mode or read only
  let editMode = false;

  //imported Data
  let importData: itemModel;
  let exportData: itemModel;

  let table = "items";
  let page_name = "Produkter";

  let product_status: productStatusModel[] = []
  let products: productModel[] = []

  async function importDataFromDB() {
    let data = await getData(table, id)

      // HOT FIX - if the data is not found, redirect to the index page
      if (!data?.UUID) {
      alert("Kunne ikke finde data" + data);
      goToPath(`/${page_name.toLowerCase()}`);
      return;
    }
    exportData = new itemModel({ ...data });
    importData = new itemModel({ ...data });
  }

  //get all data
  onMount(async () => {
    try {
      importDataFromDB();
    } catch (error) {
      console.log(error);
    }

    product_status = await getData("product_status")
    product_status.map(product => {return product.name = product.status_name})

    products = await getData("products")
  });

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
    const response: any = await deleteItem(
      "delete_data.php",
      { UUID: importData.UUID, table: table },
      `/${page_name.toLowerCase()}`
    );
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
    />
    <div
      on:submit={(e) => {
        e.preventDefault;
        handleUpdate();
      }}
      class="form"
    >
      <form id="user-form">
        <SelectQuestion
        bind:binding={exportData.product_status_id}
        label="Produkt status"
        {editMode}
        options={product_status}
        match={ {UUID: exportData.product_status_id, name: ""} }
      />
        <SelectQuestion
        bind:binding={exportData.product_id}
        label="Produkt"
        {editMode}
        options={products}
        match={ {UUID: exportData.product_id, name: ""} }
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
