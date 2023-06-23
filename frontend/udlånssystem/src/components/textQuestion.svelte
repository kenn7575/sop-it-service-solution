<script>
  export let editMode = false;
  export let label;
  export let type = "text";
  export let binding;
  $: console.log(binding);
</script>

<div class="question">
  <label
    >{label} <span class="required-tag" class:hidden={!editMode}>*</span></label
  >
  {#if type === "text"}
    <input
      autocomplete="off"
      disabled={!editMode}
      bind:value={binding}
      class="text"
      type="text"
      required
    />
  {:else if type === "number"}
    <input
      autocomplete="off"
      disabled={!editMode}
      bind:value={binding}
      class="text"
      type="number"
      required
    />
  {:else if type === "password"}
    <input
      autocomplete="off"
      disabled={!editMode}
      bind:value={binding}
      class="text"
      type="password"
      required
    />
  {/if}
</div>
