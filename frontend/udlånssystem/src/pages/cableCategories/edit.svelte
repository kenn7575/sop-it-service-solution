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
  ] as Field[];

  let zodSchema = z.object({
    UUID: z.number(),
    name: z.string().trim().min(1, "Navn er påkrævet"),
  });
</script>

<EditLayout
  table="cable_categories"
  page_name="Kabelgrupper"
  UUID={id}
  {fields}
  {zodSchema}
/>
