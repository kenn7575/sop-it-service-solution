<script lang="ts">
  import validateInputs from "../../services/validateInputs.js";
  import createItem from "../../data/create";
  import { categoryGroupModel } from "../../types/categoryGroupModel.js";
  import FormNewPanel from "../../components/form-new-panel.svelte";
  import TextQuestion from "../../components/textQuestion.svelte";
  import goToPath from "../../services/goToPath.js";

  let exportData = new categoryGroupModel({ name: "", UUID: null });

  function handleCreate() {
    if (!validateInputs()) {
      alert("Udfyld alle felter");
      return;
    }

    createItem("category_groups", exportData, "/kategorigrupper");
  }
  function handleSubmit(event) {
    event.preventDefault();
    handleCreate();
  }
</script>

<div class="content">
  <FormNewPanel
    on:cancel={() => {
      goToPath("/kategorigrupper");
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
