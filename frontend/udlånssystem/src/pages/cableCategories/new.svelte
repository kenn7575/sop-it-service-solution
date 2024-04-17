<script lang="ts">
  import { cableModel } from "../../types/cableModel.js";
  import validateInputs from "../../services/validateInputs.js";
  import TextQuestion from "../../components/textQuestion.svelte";
  import goToPath from "../../services/goToPath.js";

  import createItem from "../../data/create.js";
  import FormNewPanel from "../../components/form-new-panel.svelte";
  import SelectQuestion from "../../components/selectQuestion.svelte";
  import { onMount } from "svelte";
  import getData from "../../data/getData.js";

  let exportData: any = {};

  let table = "cable_categories";
  let page_name = "Kabelgrupper";

  async function handleCreate() {
    if (!validateInputs()) {
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
      <TextQuestion
        label="Navn"
        type="text"
        bind:binding={exportData.name}
        required
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
