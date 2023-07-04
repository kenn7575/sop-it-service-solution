<script lang="ts">
  import validateInputs from "../../services/validateInputs.js";
  import type { productModel } from "../../types/productModel.js";
  import createDataInDB from "../../data/create";

  let new_name;

  function handleCreate() {
    if (!validateInputs()) {
      alert("Udfyld alle felter");
      return;
    }

    let itemToBeUpdated: productModel = {
      UUID: null,
      name: new_name,
      brand_id: null,
      category_id: null,
      date_created: null,
      date_updated: null,
      image_name: null,
      validate: function (): boolean {
        throw new Error("Function not implemented.");
      },
    };
    delete itemToBeUpdated.validate;
    delete itemToBeUpdated.validate;
    createDataInDB("products", itemToBeUpdated, "/produkttyper");
  }
  function handleSubmit(event) {
    event.preventDefault();
    handleCreate();
  }
</script>

<div class="content">
  <div class="control-panel">
    <div class="buttons">
      <button>Annuller</button>

      <button on:click={handleCreate}>Opret</button>
    </div>
  </div>

  <div class="form">
    <form on:submit={handleSubmit} id="user-form">
      <div class="question">
        <label for="a2">Navn <span class="required-tag">*</span></label>
        <input
          id="a2"
          autocomplete="off"
          bind:value={new_name}
          class="text"
          type="text"
          required
        />
      </div>
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
