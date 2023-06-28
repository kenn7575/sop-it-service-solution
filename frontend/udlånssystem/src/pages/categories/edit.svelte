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
  import getData from "../../data/retrieve.js";

  //this is the id of the brand to be edited
  export let id;

  //if the page is in edit mode or read only
  let editMode = false;

  //imported Data
  let importData: categoryModel;
  let exportData: categoryModel;

  let category_groups: categoryGroupModel[] = [];

  onMount(async () => {
    try {
      importDataFromDB();
    } catch (error) {
      console.log(error);
    }
    category_groups = await getData("category_groups");
  });

  async function importDataFromDB() {
    const { data } = await axios.get("get_data.php", {
      params: { UUID: id, table: "categories" },
    });
    
    exportData = new categoryModel(JSON.parse(JSON.stringify(data) ));
    importData = new categoryModel(JSON.parse(JSON.stringify(data) ));
  }

  async function handleUpdate() {
    update(importData, exportData, "categories").then((res) => {
      if (res) {
        importDataFromDB();
      }
    });
  }
  function handleDelete() {
    deleteItem(
      "delete_data.php",
      {
        UUID: importData.UUID,
        table: "categories",
      },
      "/kategorier"
    );
  }
</script>

{#if importData && category_groups}
  <div class="content">
    <FormEditPanel
      on:reset={() => {
        importDataFromDB();
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
      {#if category_groups && exportData}
      <form id="user-form">
        <TextQuestion bind:binding={exportData.name} label="Navn" {editMode} />
        <SelectQuestion
          bind:binding={exportData.category_group_id}
          label="Kategori"
          {editMode}
          options={category_groups}
          match={exportData.category_group_id.UUID}
        />
      </form>
      {/if}
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
