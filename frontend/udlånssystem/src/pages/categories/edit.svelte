<script lang="ts">
  import EditLayout from "@layouts/edit.svelte";
  import { z } from "zod";
  import type { Field } from "types/field";

  export let id: number;

  $: fields = [
    {
      type: "text",
      binding: "name",
      label: "Navn",
    },
    {
      type: "select",
      binding: "category_group_id",
      label: "Kategorigruppe",
      options: "category_groups",
    },
  ] as Field[];

  let zodSchema = z.object({
    UUID: z.number(),
    name: z.string().trim().min(1, "Navn er påkrævet"),
    category_group_id: z.number().int(),
  });
</script>

<EditLayout
  table="categories"
  page_name="Kategorier"
  UUID={id}
  {fields}
  {zodSchema}
/>
