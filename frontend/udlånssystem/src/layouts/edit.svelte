<script lang="ts">
  import { onMount } from "svelte";
  import { brandModel } from "types/brandModel";
  import { deleteItem, updateItem, getData } from "@data/index.js";
  import TextQuestion from "@components/textQuestion.svelte";
  import FormEditPanel from "@components/form-edit-panel.svelte";
  import goToPath from "@services/goToPath.js";
  import doesObjectsMatch from "@services/doesObjectsMatch.js";
  import { z } from "zod";

  //this is the id of the brand to be edited
  export let UUID: number;
  export let table: string;
  export let page_name: string;
  export let fields: { binding: string; label: string }[];

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
    const data = await getData(table, UUID);

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
      // alert("Ingen ændringer");
      editMode = false;
      return;
    }
    if (!exportData.validate()) {
      alert("Udfyld alle felter");
      return;
    }
    const response: any = await updateItem(exportData, table);
    if (response && response.success) {
      importDataFromDB();
      editMode = false;
      alert("Changes saved");
    } else {
      alert("Ukendt fejl");
    }
  }

  async function handleDelete() {
    if (!confirm("Er du sikker på du vil slette " + importData?.name + "?")) {
      return;
    }

    if (false) {
      alert("Kan ikke slette");
      return;
    }

    const response: any = await deleteItem({
      UUID: importData.UUID,
      table,
    });
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
      <form id="new-form">
        {#each fields as field}
          <TextQuestion
            bind:binding={exportData[field.binding]}
            label={field.label}
            {editMode}
          />
        {/each}
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
