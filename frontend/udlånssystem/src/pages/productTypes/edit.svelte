<script lang="ts">
  import EditLayout from "@layouts/edit.svelte";
  import { z } from "zod";
  import { onMount } from "svelte";
  import getData from "@data/getData";
  import type { Field } from "types/field";
  import type { categoryModel } from "types/categoryModel";
  import type { brandModel } from "types/brandModel";
  import { itemModel } from "types/itemModel";
  import createItem from "@data/create";
  import goToPath from "@services/goToPath";

  export let id: number;

  let products: itemModel[] = [];

  onMount(async () => {
    products = (await getData("products")).data;
  });

  async function handleCreateNewProduct(product_id: number) {
    const item = new itemModel({ product_id });

    const response: any = await createItem("items", item);
    if (response && response.success) {
      alert("Gemt");
      goToPath(`/produkter/${response.id}`);
    }
  }

  $: fields = [
    {
      type: "text",
      binding: "name",
      label: "Navn",
    },
    {
      type: "select",
      binding: "brand_id",
      label: "Brand",
      options: "brands",
    },
    {
      type: "select",
      binding: "category_id",
      label: "Kategori",
      options: "categories",
    },
  ] as Field[];

  let zodSchema = z.object({
    UUID: z.number(),
    name: z.string().trim().min(1, "Navn er påkrævet"),
    brand_id: z.number().int(),
    category_id: z.number().int(),
  });
</script>

<EditLayout
  table="products"
  page_name="Produkttyper"
  UUID={id}
  {fields}
  {zodSchema}
>
  <button
    id="new_product"
    type="button"
    slot="form"
    on:click={() => {
      handleCreateNewProduct(id);
    }}
  >
    Tilføj nyt produkt ud fra produkttype
  </button>
</EditLayout>

<style>
  #new_product {
    width: 100%;
    min-height: 2rem;
    height: 2rem;
    color: var(--text1);
    background: transparent;
    border: 1px solid var(--text1);
    border-radius: 10px;
  }
</style>
