<script lang="ts">
  import { onMount } from "svelte";
  import axios from "axios";
  import { categoryModel } from "../../types/categoryModel.js";
  import deleteItem from "../../data/delete.js";
  import update from "../../data/update.js";
  import TextQuestion from "../../components/textQuestion.svelte";
  import FormEditPanel from "../../components/form-edit-panel.svelte";
  import SelectQuestion from "../../components/selectQuestion.svelte";
  import type { categoryGroupModel } from "../../types/categoryGroupModel.js";
  import getData from "../../data/getData.js";
  import goToPath from "../../services/goToPath.js";
  import doesObjectsMatch from "../../services/doesObjectsMatch.js";
  import type { productModel } from "../../types/productModel.js";

  //this is the id of the brand to be edited
  export let id;

  //Define data for this page
  let importData: categoryModel;
  let exportData: categoryModel;
  let categoryGroups: categoryGroupModel[] = [];
  let products: productModel[] = [];

  //if the page is in edit mode or read only
  let editMode = false;
  let table = "categories";
  let page_name = "Kategorier";

  onMount(async () => {
    try {
      importDataFromDB();
    } catch (error) {
      console.log(error);
    }
  });

  async function importDataFromDB() {
    //get product data to see if the category is used
    products = await getData("products");

    //get category data
    const data = await getData(table, id);

    //if the data is not found, redirect to the index page
    if (!data?.UUID) {
      alert("Kunne ikke finde data");
      goToPath(`/${page_name.toLowerCase()}`);
      return;
    }
    //asign data
    exportData = new categoryModel(JSON.parse(JSON.stringify(data)));
    importData = new categoryModel(JSON.parse(JSON.stringify(data)));
    categoryGroups = await getData("category_groups");
  }

  async function handleUpdate() {
    if (doesObjectsMatch(importData, exportData)) {
      alert("Ingen ændringer");
      return;
    }
    if (typeof exportData.category_group_id == "object") {
      exportData.category_group_id = exportData.category_group_id.UUID;
    }
    if (!exportData.validate()) {
      alert("Udfyld alle felter");
      return;
    }
    const response: any = await update(exportData, table);
    console.log("test", response);
    if (response && response.success) {
      importDataFromDB();
      editMode = false;
      alert("Changes saved");
    } else {
      alert("Error 500 - Ukendt fejl");
    }
  }

  async function handleDelete() {
    if (!confirm("Er du sikker på du vil slette?")) {
      return;
    }
    if (products.some((product) => product.category_id == exportData.UUID)) {
      //get count of products with this category
      const count = products.filter(
        (product) => product.category_id == exportData.UUID
      ).length;
      alert(
        `Fejl! \nKan ikke slette denne kategori, fordi den bruges i ${count} ${
          count > 1 ? "produkter" : "produkt"
        }`
      );
      return;
    }
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

{#if importData && categoryGroups}
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
        <SelectQuestion
          bind:binding={exportData.category_group_id}
          label="Kategori"
          {editMode}
          options={categoryGroups}
          match={{ UUID: exportData.category_group_id }}
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
