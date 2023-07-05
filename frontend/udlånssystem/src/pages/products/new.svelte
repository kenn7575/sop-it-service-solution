<script lang="ts">
  import { onMount } from "svelte";
  import { itemModel } from "../../types/itemModel.js";
  import validateInputs from "../../services/validateInputs.js";
  import TextQuestion from "../../components/textQuestion.svelte";
  import SelectQuestion from "../../components/selectQuestion.svelte";
  import goToPath from "../../services/goToPath.js";
  import getData from "../../data/getData.js";
  import type { productStatusModel } from "../../types/productStatusModel.js";
  import type { productModel } from "../../types/productModel.js";
  import createItem from "../../data/create";
  import FormNewPanel from "../../components/form-new-panel.svelte";
  
  let exportData: itemModel = new itemModel({});

  let table = "items";
  let page_name = "Produkter";

  let product_status: productStatusModel[] = []
  let products: productModel[] = []

  onMount(async () => {
    product_status = await getData("product_status");
    product_status.map(product => {return product.name = product.status_name});

    products = await getData("products");
  });

  async function handleCreate() {
    if (!validateInputs()) {
      alert("Udfyld alle felter");
      return;
    }
    console.log(exportData);
    const response: any = await createItem(
      table,
      { ...exportData }
    );
    if (response && response.success) {
      alert("Gemt");
      goToPath(`/${page_name.toLowerCase()}/${response.id}`);
    } else {
      alert("Error 500 - Ukendt fejl");
    }
  }
  function handleSubmit(event: Event) {
    event.preventDefault();
    handleCreate();
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
    <form on:submit={handleSubmit} id="user-form">
      <SelectQuestion
      bind:binding={exportData.product_status_id}
      label="Produkt status"
      options={product_status}
    />
      <SelectQuestion
      bind:binding={exportData.product_id}
      label="Produkt"
      options={products}
    />
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
