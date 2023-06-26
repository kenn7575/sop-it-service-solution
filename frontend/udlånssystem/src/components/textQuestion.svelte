<script>
  export let editMode = false;
  export let label;
  export let type = "text";
  export let binding;
  export let required = true;
  $: console.log(binding);
</script>

<div class="question">
  <label for="text">
    {label} 
    {#if required}
    <span class="required-tag" class:hidden={!editMode}>*</span>
    {/if}
   </label>
  {#if type === "text"}
    <input
      autocomplete="off"
      disabled={!editMode}
      bind:value={binding}
      class="text"
      type="text"
      {required}
    />
  {:else if type === "number"}
    <input
      autocomplete="off"
      disabled={!editMode}
      bind:value={binding}
      class="text"
      type="number"
      {required}
    />
  {:else if type === "password"}
    <input
      autocomplete="off"
      disabled={!editMode}
      bind:value={binding}
      class="text"
      type="password"
      {required}
    />
  {/if}
</div>
