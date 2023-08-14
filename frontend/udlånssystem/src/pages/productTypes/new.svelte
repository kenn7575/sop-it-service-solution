<script lang="ts">
  import { onMount } from "svelte";
  import { productModel } from "../../types/productModel";
  import createItem from "../../data/create";
  import FormNewPanel from "../../components/form-new-panel.svelte";
  import goToPath from "../../services/goToPath";
  import TextQuestion from "../../components/textQuestion.svelte";
  import type { categoryModel } from "../../types/categoryModel";
  import type { brandModel } from "../../types/brandModel";
  import getData from "../../data/getData";
  import SelectQuestion from "../../components/selectQuestion.svelte";

  let exportData: productModel = new productModel({});

  let table = "products";
  let page_name = "Produkttyper";

  let categories: categoryModel[] = []
  let brands: brandModel[] = []

  onMount(async () => {
    categories = await getData("categories");
    brands = await getData("brands");
  });

  async function handleCreate() {
    if (!exportData.validate()) {
      alert("Udfyld alle felter");
      return;
    }
    console.log(exportData);
    const response: any = await createItem(table, { ...exportData });
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
      <TextQuestion bind:binding={exportData.name} label="Navn" required />
      <SelectQuestion
      bind:binding={exportData.category_id}
      label="Kategori"
      options={categories}
    />
    <SelectQuestion
    bind:binding={exportData.brand_id}
    label="Brand"
    options={brands}
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
