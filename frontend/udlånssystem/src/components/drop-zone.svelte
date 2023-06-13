<script>
  import { createEventDispatcher } from "svelte";

  let selectedFile;

  function importData() {
    let input = document.createElement("input");
    input.type = "file";
    input.onchange = (_) => {
      // you can use this method to get file and perform respective operations
      let files = Array.from(input.files);
      console.log(files);
    };
    input.click();
  }

  const dispatch = createEventDispatcher();

  function forwardImage(object) {
    dispatch("message", object);
  }

  let heighlightDropZone = false;

  function handleFileDrop(event) {
    event.preventDefault();
    let highlightDropZone = false;
    const files = event.dataTransfer
      ? event.dataTransfer.files
      : event.target.files;
    const selectedFile = files[0];

    const reader = new FileReader();

    reader.onload = function (e) {
      const imageUrl = e.target.result;
      forwardImage(imageUrl);
    };

    reader.readAsDataURL(selectedFile);
  }

  function highlightDropZone(event) {
    event.preventDefault();
    heighlightDropZone = true;
  }

  function unhighlightDropZone(event) {
    event.preventDefault();
    heighlightDropZone = false;
  }
</script>

<button
  class:highlight={heighlightDropZone}
  on:drop={handleFileDrop}
  on:dragleave={unhighlightDropZone}
  on:dragover={highlightDropZone}
  on:click={importData}
  class="drop-zone"
>
  <span class="drop-zone__prompt">Drop file here or click to upload</span>
  <input type="file" name="myFile" class="drop-zone-input" />
</button>

<style>
  .drop-zone {
    max-width: 100%;
    height: 100%;
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
    border: 4px dashed var(--text2);
    border-radius: 10px;
    background: transparent;
  }

  .drop-zone-input {
    display: none;
  }
  .highlight {
    background: var(--bg1);
  }
</style>
