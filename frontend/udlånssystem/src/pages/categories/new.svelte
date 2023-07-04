<script lang="ts">
  import validateInputs from "../../services/validateInputs";
  import createItem from "../../data/create";
  import FormNewPanel from "../../components/form-new-panel.svelte";
  import goToPath from "../../services/goToPath";
  import TextQuestion from "../../components/textQuestion.svelte";
  import SelectQuestion from "../../components/selectQuestion.svelte";
  import { categoryModel } from "../../types/categoryModel.js";
  import type { categoryGroupModel } from "../../types/categoryGroupModel";
  import { onMount } from "svelte";
  import getData from "../../data/getData.js";
  
  let exportData: categoryModel = new categoryModel({});

  let table = "categories";
  let page_name = "Kategorier";

  let categoryGroups: categoryGroupModel[] = [];

  onMount(async () => {
    try {
      importDataFromDB();
    } catch (error) {
      console.log(error);
    }
  });

  async function importDataFromDB() {
    categoryGroups = await getData("category_groups");
  }

  async function handleCreate() {
    if (!validateInputs()) {
      alert("Udfyld alle felter");
      return;
    }
    console.log(exportData);
    const response: any = await createItem(
      table,
      { ...exportData },
      `/${page_name.toLowerCase()}`
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
      <TextQuestion bind:binding={exportData.name} label="Navn" required />
      <SelectQuestion
        bind:binding={exportData.category_group_id}
        label="Kategori"
        options={categoryGroups}
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
