<script lang="ts">
  import validateInputs from "../../services/validateInputs";
  import { brandModel } from "../../types/brandModel";
  import createItem from "../../data/create";
  import FormNewPanel from "../../components/form-new-panel.svelte";
  import goToPath from "../../services/goToPath";
  import TextQuestion from "../../components/textQuestion.svelte";

  let exportData: brandModel = new brandModel({});

  let table = "brands";
  let page_name = "Brands";

  function handleCreate() {
    if (!validateInputs()) {
      alert("Udfyld alle felter");
      return;
    }
    console.log(exportData);
    createItem(table, { ...exportData }, `/${page_name.toLowerCase()}`);
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
