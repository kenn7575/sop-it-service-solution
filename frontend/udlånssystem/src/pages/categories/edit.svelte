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
  import setPageTitle from "../../services/setPageTitle.js";

  //this is the id of the brand to be edited
  export let id;

  //if the page is in edit mode or read only
  let editMode = false;

  //imported Data
  let importData: categoryModel;
  let exportData: categoryModel;

  let categoryGroups: categoryGroupModel[] = [];

  let table = "categories"
  let page_name = "Kategorier"

  setPageTitle.edit(page_name, id)

  onMount(async () => {
    try { importDataFromDB() }
    catch (error) { console.log(error) }
  });

  async function importDataFromDB() {
    const { data } = await axios.get("get_data.php", { params: { UUID: id, table: table } });
    
    exportData = new categoryModel(JSON.parse(JSON.stringify(data) ));
    importData = new categoryModel(JSON.parse(JSON.stringify(data) ));
    
    categoryGroups = await getData("category_groups");
  }

  async function handleUpdate() {
    update(importData, exportData, table).then((res) => {
      console.log(res);
      if (res) {
        importDataFromDB();
        editMode = false;
      }
    });
  }

  function handleDelete() {
    deleteItem("delete_data.php", { UUID: importData.UUID, table: table}, `/${page_name.toLowerCase()}`);
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
        bind:binding={exportData.category_group_id} label="Kategori" {editMode}
        options={categoryGroups}
        match={exportData.category_group_id}
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
