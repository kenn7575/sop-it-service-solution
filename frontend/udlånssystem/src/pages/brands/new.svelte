<script lang="ts">
  import validateInputs from "../../services/validateInputs.js";
  import type { brandModel } from "../../types/brandModel";
  import createDataInDB from "../../services/createDataInDB.js";

  let new_name;

  function handleCreate() {
    if (!validateInputs()) {
      alert("Udfyld alle felter");
      return;
    }

    let itemToBeUpdated: brandModel = {
      UUID: null,
      name: new_name,
    };
    createDataInDB("brands", itemToBeUpdated, "/brands");
  }
  function handleSubmit(event) {
    event.preventDefault();
    handleCreate();
  }
</script>

<div class="content">
  <div class="image-upload">
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
  .buttons {
    display: flex;
    width: 100%;
    gap: 0.5rem;
    justify-content: space-between;
  }

  .content {
    height: 100%;
    box-sizing: border-box;
    padding: 2rem;
    display: flex;
    gap: 1rem;
  }
  .image-upload {
    width: max(35%, 400px);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    background-color: var(--bg2);
    border-radius: 10px;
    padding: 1rem;
    position: relative;
  }
</style>
