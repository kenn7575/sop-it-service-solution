<script lang="ts">
  import EditLayout from "@layouts/edit.svelte";
  import { z } from "zod";
  import { autoGenFields } from "@services/autoGenFields";

  export let id: number;

  let zodSchema = z.object({
    UUID: z.number(),
    name: z.string({ description: "Navn" }).trim().min(1, "Navn er påkrævet"),
    amount_total: z
      .number({ description: "Antal i alt" })
      .int()
      .min(0, "Antal i alt skal være et positivt heltal"),
    amount_lent: z
      .number({ description: "Antal Lånt" })
      .int()
      .min(0, "Antal lånt skal være et positivt heltal"),
    category_id: z.number().int(),
  });

  let fields = autoGenFields(zodSchema, ["UUID", "category_id"]);

  fields.push({
    type: "select",
    binding: "category_id",
    label: "Kategori",
    options: "cable_categories",
  });
</script>

<EditLayout table="cables" page_name="Kabler" UUID={id} {fields} {zodSchema} />
