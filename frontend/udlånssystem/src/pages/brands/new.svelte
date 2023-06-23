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
        <label for="a2">Navn <span>*</span></label>
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
  button#clear-picture {
    position: absolute;
    width: 4rem;
    height: 4rem;
    right: 0;
    font-size: 2rem;
    border-radius: 50%;
    background: var(--s);
    border: none;
    transform: translateX(-40px);
    cursor: pointer;
    outline: 4px solid var(--bg2);
  }
  #clear-picture:focus {
    outline: 4px solid var(--text1);
  }
  .hidden {
    display: none;
  }
  .buttons {
    display: flex;
    width: 100%;
    gap: 0.5rem;
    justify-content: space-between;
  }
  #delete {
    min-height: 32px;
    background: var(--s);
    color: #fff;
  }
  select {
    width: 100%;
    background: transparent;
    color: var(--text1);
    height: 40px;
    border: var(--text1) 1px solid;
    border-radius: 10px;
    background: var(--bg1);
    font-size: 1rem;
    padding: 10px 15px;
  }
  input.text:disabled,
  select:disabled {
    color: var(--text2) !important;
    opacity: 1;
  }

  .content {
    height: 100%;
    box-sizing: border-box;
    padding: 2rem;
    display: flex;
    gap: 1rem;
  }
  img {
    max-width: 90%;
    object-fit: cover;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
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
  .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
  }
  button {
    width: 100%;
    height: 2rem;
    color: var(--text1);
    background: transparent;
    border: 1px solid var(--text1);
    border-radius: 10px;
  }
  button:disabled {
    opacity: 0.5;
  }

  span {
    position: absolute;
    transform: translate(5px, -5px);
    color: var(--s);
    font-size: 2rem;
    font-weight: 400;
  }

  form {
    position: relative;
    display: inline-block;
    max-width: 700px;

    box-sizing: border-box;

    background: transparent;
    border-radius: 40px;

    left: 50%;
    -moz-transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
  }

  form button {
    margin-top: 35px;
    background-color: transparent;
    border: 2px solid var(--text1);
    line-height: 0;
    font-size: 17px;
    display: inline-block;
    box-sizing: border-box;
    padding: 20px 15px;
    border-radius: 60px;
    color: var(--text1);
    font-weight: 400;
    letter-spacing: 0.01em;
    position: relative;
    z-index: 1;
  }
  form button:hover,
  form button:focus {
    color: #fff;
    background-color: var(--p);
  }

  form .question label {
    transform-origin: left center;
    color: var(--text1);
    font-weight: 300;
    letter-spacing: 0.01em;
    font-size: 1rem;
    box-sizing: border-box;
    padding: 10px 15px;
    display: block;
    z-index: 2;
    pointer-events: none;
  }
  .question {
    margin-bottom: 1rem;
  }
  form .question input.text {
    appearance: none;
    background: none;
    border: 1px solid var(--text1);
    line-height: 0;
    font-size: 17px;
    width: 100%;
    display: block;
    box-sizing: border-box;
    padding: 10px 15px;
    border-radius: 10px;
    color: var(--text1);
    font-weight: 500;
    letter-spacing: 0.01em;
    position: relative;
    z-index: 1;
  }

  form .question input.text:focus {
    outline: none;
    border: 2px solid var(--i);
    background: var(--bg2);
    color: var(--text1);
  }

  form .question .error {
    border-color: var(--s) !important;
    color: var(--s) !important;
  }
</style>
