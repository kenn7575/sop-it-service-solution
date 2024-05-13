<script lang="ts">
  import createItem from "@data/create";
  import goToPath from "@services/goToPath";
  import getData from "@data/getData";
  import FormNewPanel from "@components/form-new-panel.svelte";
  import TextQuestion from "@components/textQuestion.svelte";
  import NumberQuestion from "@components/numberQuestion.svelte";
  import SelectQuestion from "@components/selectQuestion.svelte";
  import type { z } from "zod";
  import type { Field } from "types/field";

  export let table: string;
  export let page_name: string;

  export let zodSchema: z.ZodObject<any>;
  export let fields: Field[];

  let exportData = {};

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

  async function handleCreate() {
    const { data, error } = zodSchema.safeParse(exportData);

    if (error) {
      alert(error.errors.map((e) => e.message).join("\n"));

      return;
    }

    const response: any = await createItem(table, data);
    if (response && response.success) {
      alert("Gemt");
      goToPath(`/${page_name.toLowerCase()}/${response.id}`);
    } else {
      alert("Error 500 - Ukendt fejl");
    }
  }

  function handleSubmit(event: Event) {
    event.preventDefault();
    handleCreate();
  }
</script>

<div class="content">
  <FormNewPanel
    on:cancel={() => {
      goToPath(`/${page_name.toLowerCase()}`);
    }}
    on:create={handleCreate}
  />

  <div class="form">
    <form on:submit={handleSubmit} id="new-form">
      {#each fields as field}
        {#if field.type == "text" || field.type == "number"}
          <TextQuestion
            bind:binding={exportData[field.binding]}
            label={field.label}
            required={field.required}
            type={field.type}
          />
        {:else if field.type == "select" && typeof field.options == "object"}
          <SelectQuestion
            bind:binding={exportData[field.binding]}
            label={field.label}
            options={field?.options}
            match={{ UUID: exportData[field.binding] }}
          />
        {/if}
      {/each}
    </form>
  </div>
</div>

<style>
  .content {
    height: 100%;
    box-sizing: border-box;
    padding: 2rem;
    display: flex;
    gap: 1rem;
  }
</style>
