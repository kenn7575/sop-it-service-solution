<script>
  import { onMount } from "svelte";

  let selectedFile;
  $: console.log(selectedFile);

  function handleFileSelect(event) {
    selectedFile = event.target.files[0];
  }

  onMount(() => {
    function handleFileDrop(event) {
      event.preventDefault();
      selectedFile = event.dataTransfer.files[0];
    }

    function highlightDropZone(event) {
      event.preventDefault();
      event.currentTarget.classList.add("highlight");
    }

    function unhighlightDropZone(event) {
      event.preventDefault();
      event.currentTarget.classList.remove("highlight");
    }

    const dropZone = document.querySelector(".drop-zone");

    dropZone.addEventListener("dragover", highlightDropZone);
    dropZone.addEventListener("dragleave", unhighlightDropZone);
    dropZone.addEventListener("drop", handleFileDrop);

    return () => {
      dropZone.removeEventListener("dragover", highlightDropZone);
      dropZone.removeEventListener("dragleave", unhighlightDropZone);
      dropZone.removeEventListener("drop", handleFileDrop);
    };
  });

  function handleSubmit() {
    if (selectedFile) {
      // Perform the file upload or any other desired action
      console.log("Selected file:", selectedFile);
    }
  }

  function handleCancel() {
    // Handle cancel action
  }
</script>

<div class="drop-zone">
  <span class="drop-zone__prompt">Drop file here or click to upload</span>
  <input
    type="file"
    name="myFile"
    class="drop-zone__input"
    on:change={handleFileSelect}
  />
</div>

<button on:click={handleSubmit}>Save & Submit</button>
<button on:click={handleCancel}>Cancel</button>

<style>
  .drop-zone {
    max-width: 200px;
    height: 200px;
    padding: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: "Quicksand", sans-serif;
    font-weight: 500;
    font-size: 20px;
    cursor: pointer;
    color: #cccccc;
    border: 4px dashed #009578;
    border-radius: 10px;
  }

  .drop-zone__input {
    display: none;
  }
</style>
