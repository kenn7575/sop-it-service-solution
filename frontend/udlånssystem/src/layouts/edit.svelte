<script lang="ts">
  import { onMount } from "svelte";
  import { deleteItem, updateItem, getData } from "@data/index.js";
  import TextQuestion from "@components/textQuestion.svelte";
  import NumberQuestion from "@components/numberQuestion.svelte";
  import SelectQuestion from "@components/selectQuestion.svelte";
  import FormEditPanel from "@components/form-edit-panel.svelte";
  import goToPath from "@services/goToPath.js";
  import doesObjectsMatch from "@services/doesObjectsMatch.js";
  import type { z } from "zod";
  import type { Field } from "types/field";

  //this is the id of the brand to be edited
  export let UUID: number;
  export let table: string;
  export let page_name: string;

  export let zodSchema: z.ZodObject<any>;
  export let fields: Field[];

  //if the page is in edit mode or read only
  let editMode = false;

  //imported Data
  let importData;
  let exportData;

  onMount(async () => {
    try {
      importDataFromDB();
    } catch (error) {
      console.log(error);
    }
  });

  //loop to fetch select options in fields, where options is type of string
  async function fetchSelectOptions() {
    for (let field of fields) {
      if (field.type == "select") {
        if (!(typeof field.options == "string")) continue;

        const { data } = await getData(field.options);
        field.options = data;
      }
    }

    fields = [...fields];
  }

  $: fetchSelectOptions(), fields;

  async function importDataFromDB() {
    const data = await getData(table, UUID);

    if (!data?.UUID) {
      alert("Kunne ikke finde data");
      goToPath(`/${page_name.toLowerCase()}`);
      return;
    }
    exportData = { ...data };
    importData = { ...data };
  }

  async function handleUpdate(): Promise<any> {
    if (doesObjectsMatch(importData, exportData)) {
      // alert("Ingen ændringer");
      editMode = false;
      return;
    }

    const { data, error } = zodSchema.safeParse(exportData);

    if (error) {
      alert(error.errors.map((e) => e.message).join("\n"));

      return;
    }

    const response: any = await updateItem(table, UUID, data);
    if (response && response.success) {
      importDataFromDB();
      editMode = false;
      alert("Changes saved");
    } else {
      alert("Ukendt fejl");
    }
  }

  async function handleDelete() {
    const name = importData?.name || "#" + UUID;

    if (!confirm("Er du sikker på du vil slette " + name + "?")) {
      return;
    }

    const response: any = await deleteItem({ UUID, table });

    if (response?.error)
      return alert("Error: " + response?.error?.response?.data?.error);

    if (response?.success) {
      alert("Slettet");
      goToPath(`/${page_name.toLowerCase()}`);
    } else {
      alert("Error 500 - Ukendt fejl");
    }
  }
</script>

<!-- disableDelete={importData._count.products > 0} -->
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
      <form id="edit-form">
        {#each fields as field}
          {#if field.type == "text" || field.type == "number"}
            <TextQuestion
              bind:binding={exportData[field.binding]}
              label={field.label}
              {editMode}
              required={field.required}
              type={field.type}
            />
          {:else if field.type == "select" && typeof field.options == "object"}
            <SelectQuestion
              bind:binding={exportData[field.binding]}
              label={field.label}
              options={field?.options}
              match={{ UUID: exportData[field.binding] }}
              {editMode}
            />
          {/if}
        {/each}
      </form>
      <slot name="form" />
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
