<script lang="ts">
  import validateInputs from "../../services/validateInputs.js";
  import createItem from "../../data/create";
  import { categoryGroupModel } from "../../types/categoryGroupModel.js";
  import FormNewPanel from "../../components/form-new-panel.svelte";
  import goToPath from "../../services/goToPath.js";
  import TextQuestion from "../../components/textQuestion.svelte";

  let exportData = new categoryGroupModel({ name: "", UUID: null });

  let table = "category_groups";
  let page_name = "KategoriGrupper";

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
  function handleSubmit(event) {
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
