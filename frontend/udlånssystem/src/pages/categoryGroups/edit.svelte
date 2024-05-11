<script lang="ts">
  import EditLayout from "@layouts/edit.svelte";
  import { z } from "zod";
  import { autoGenFields } from "@services/autoGenFields";

  export let id: number;

  let zodSchema = z.object({
    UUID: z.number(),
    name: z.string({ description: "Navn" }).trim().min(1, "Navn er påkrævet"),
  });
</script>

<EditLayout
  table="category_groups"
  page_name="Kategorigrupper"
  UUID={id}
  fields={autoGenFields(zodSchema)}
  {zodSchema}
/>
