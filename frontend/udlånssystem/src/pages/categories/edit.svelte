<script lang="ts">
  import EditLayout from "@layouts/edit.svelte";
  import { z } from "zod";
  import { autoGenFields } from "@services/autoGenFields";

  export let id: number;

  let zodSchema = z.object({
    UUID: z.number(),
    name: z.string({ description: "Navn" }).trim().min(1, "Navn er påkrævet"),
    category_group_id: z.number().int(),
  });

  let fields = autoGenFields(zodSchema, ["UUID", "category_group_id"]);

  fields.push({
    type: "select",
    binding: "category_group_id",
    label: "Kategorigruppe",
    options: "category_groups",
  });
</script>

<EditLayout
  table="categories"
  page_name="Kategorier"
  UUID={id}
  {fields}
  {zodSchema}
/>
