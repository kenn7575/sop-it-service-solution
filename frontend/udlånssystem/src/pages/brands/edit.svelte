<script lang="ts">
  import { onMount } from "svelte";
  import axios from "axios";
  import { brandModel } from "../../types/brandModel.js";
  import deleteItem from "../../data/delete.js";
  import update from "../../data/update.js";
  import TextQuestion from "../../components/textQuestion.svelte";
  import FormEditPanel from "../../components/form-edit-panel.svelte";

  //this is the id of the brand to be edited
  export let id;

  //if the page is in edit mode or read only
  let editMode = false;

  //imported Data
  let importData: brandModel;
  let exportData: brandModel;

  onMount(async () => {
    try {
      importDataFromDB();
    } catch (error) {
      console.log(error);
    }
  });
  async function importDataFromDB() {
    const { data } = await axios.get("get_data.php", {
      params: { UUID: id, table: "brands" },
    });
    exportData = new brandModel({ ...data });
    importData = new brandModel({ ...data });
  }
  async function handleUpdate() {
    update(importData, exportData, "brands").then((res) => {
      console.log(res);
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
        table: "brands",
      },
      "/brands"
    );
  }
</script>

{#if importData}
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
