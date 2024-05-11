<script lang="ts">
  import EditLayout from "@layouts/edit.svelte";
  import { z } from "zod";
  import { onMount } from "svelte";
  import getData from "@data/getData";
  import type { Field } from "types/field";
  import type { productStatusModel } from "types/productStatusModel";

  export let id: number;

  let product_statuses: productStatusModel[] = [];

  onMount(async () => {
    const { data } = await getData("product_status");

    product_statuses = data;
    product_statuses.map((ps) => (ps.name = ps.status_name));
  });

  $: fields = [
    {
      type: "select",
      binding: "product_id",
      label: "Produkttype",
      options: "products",
    },
    {
      type: "select",
      binding: "product_status_id",
      label: "Status",
      options: product_statuses,
    },
  ] as Field[];

  let zodSchema = z.object({
    UUID: z.number(),
    product_id: z.number().int(),
    product_status_id: z.number().int(),
  });
</script>

<EditLayout
  table="items"
  page_name="Produkter"
  UUID={id}
  {fields}
  {zodSchema}
/>
