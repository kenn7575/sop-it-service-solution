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
      type: "number",
      binding: "amount_total",
      label: "Antal i alt",
    },
    {
      type: "number",
      binding: "amount_lent",
      label: "Antal lånt",
    },
    {
      type: "select",
      binding: "category_id",
      label: "Kategori",
      options: "cable_categories",
    },
  ] as Field[];

  let zodSchema = z.object({
    UUID: z.number(),
    name: z.string().trim().min(1, "Navn er påkrævet"),
    amount_total: z
      .number()
      .int()
      .min(0, "Antal i alt skal være et positivt heltal"),
    amount_lent: z
      .number()
      .int()
      .min(0, "Antal lånt skal være et positivt heltal"),
    category_id: z.number().int(),
  });
</script>

<EditLayout table="cables" page_name="Kabler" UUID={id} {fields} {zodSchema} />
