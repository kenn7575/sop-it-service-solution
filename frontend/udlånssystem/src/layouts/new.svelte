<script lang="ts">
  import createItem from "@data/create";
  import goToPath from "@services/goToPath";
  import getData from "@data/getData";
  import FormNewPanel from "@components/form-new-panel.svelte";
  import TextQuestion from "@components/textQuestion.svelte";
  import NumberQuestion from "@components/numberQuestion.svelte";
  import SelectQuestion from "@components/selectQuestion.svelte";
  import { toast } from "svelte-sonner";
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
      error.errors.reverse().map((e) =>
        toast.warning(e.message, {
          id: e.code + "-" + e.path.join("-"),
        })
      );
      return;
    }

    toast.promise(createItem(table, data), {
      loading: "Gemmer...",
      success: ({ id }) => {
        goToPath(`/${page_name.toLowerCase()}/${id}`);
        return "Gemt";
      },
      error: (err: any) => {
        console.log(err)
        return "Der opstod en fejl";
      },
    });
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
    <form id="new-form">
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
