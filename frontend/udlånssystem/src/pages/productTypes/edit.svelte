<script lang="ts">
  import EditLayout from "@layouts/edit.svelte";
  import { itemModel } from "types/itemModel";
  import createItem from "@data/create";
  import goToPath from "@services/goToPath";
  import { zodSchema, fields } from "./util";

  export let id: number;

  async function handleCreateNewProduct(product_id: number) {
    const item = new itemModel({ product_id });

    const response: any = await createItem("items", item);
    if (response && response.success) {
      alert("Gemt");
      goToPath(`/produkter/${response.id}`);
    }
  }
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
