<script lang="ts">
  import { onMount } from "svelte";
  import { productModel } from "../../types/productModel.js";
  import TextQuestion from "../../components/textQuestion.svelte";
  import SelectQuestion from "../../components/selectQuestion.svelte";
  import deleteItem from "../../data/delete.js";
  import update from "../../data/update.js";
  import FormEditPanel from "../../components/form-edit-panel.svelte";
  import goToPath from "../../services/goToPath.js";
  import doesObjectsMatch from "../../services/doesObjectsMatch.js";
  import getData from "../../data/getData.js";
  import createItem from "../../data/create";
  import { itemModel } from "../../types/itemModel.js";


  //this is the id of the item to be edited
  export let id;

  //if the page is in edit mode or read only
  let editMode = false;

  //imported Data
  let importData: productModel;
  let exportData: productModel;

  let table = "products";
  let page_name = "Produkttyper";

  async function importDataFromDB() {
    let data = await getData(table, id)

      // HOT FIX - if the data is not found, redirect to the index page
      if (!data?.UUID) {
      alert("Kunne ikke finde data" + data);
      goToPath(`/${page_name.toLowerCase()}`);
      return;
    }
    exportData = new productModel({ ...data });
    importData = new productModel({ ...data });
  }

  //get all data
  onMount(async () => {
    try {
      importDataFromDB();
    } catch (error) {
      console.log(error);
    }
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
    const response: any = await deleteItem({ UUID: importData.UUID, table: table });
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

  async function handleCreateNewProduct(product_id: number) {
    const item = new itemModel({ product_id: product_id })
    
    const response: any = await createItem( "items", item );
    if (response && response.success) {
      alert("Gemt");
      goToPath(`/produkter/${response.id}`);
    }
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
        <TextQuestion bind:binding={exportData.name} label="Navn" {editMode} />
        <button
          id="new_product"
          type="button"
          on:click={() => { handleCreateNewProduct( exportData.UUID) }}>
          Tilføj nyt produkt ud fra produkttype
      </button>
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

  #new_product {
    width: 100%;
    min-height: 2rem;
    height: 2rem;
    color: var(--text1);
    background: transparent;
    border: 1px solid var(--text1);
    border-radius: 10px;
  }
</style>
