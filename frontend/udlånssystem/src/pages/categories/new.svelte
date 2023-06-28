<script lang="ts">
  import validateInputs from "../../services/validateInputs.js";
  import createItem from "../../data/create.js";
  import type { categoryModel } from "../../types/categoryModel.js";
  import { onMount } from "svelte";
  import getData from "../../data/retrieve.js";

  let categoryGroups;

  let new_name;
  let new_category_group_id;

  onMount(async () => {
    try {
      categoryGroups = await getData("category_groups").then((res) => {
        new_category_group_id = res[0].UUID;

        return res;
      });
    } catch (error) {
      console.log(error);
    }
  });
  function handleCreate() {
    if (!validateInputs()) {
      alert("Udfyld alle felter");
      return;
    }
    let itemToBeUpdated: categoryModel = {
      UUID: null,
      name: new_name,
      category_group_id: new_category_group_id,
    };
    createItem("categories", itemToBeUpdated, "/kategorier");
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
    {#if categoryGroups}
      <form on:submit={handleSubmit} id="user-form">
        <div class="question">
          <label for="a2">Navn<span class="requred-tag">*</span></label>
          <input
            id="a2"
            autocomplete="off"
            bind:value={new_name}
            class="text"
            type="text"
            required
          />
        </div>
        <div class="question">
          <label class="requred-tag" for="a11"
            >Kategorigruppe<span class="requred-tag">*</span></label
          >

          <select
            id="a11"
            required
            form="user-form"
            bind:value={new_category_group_id}
          >
            {#each categoryGroups as categoryGroup}
              <option value={categoryGroup.UUID}>{categoryGroup.name}</option>
            {/each}
          </select>
        </div>
      </form>
    {/if}
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
