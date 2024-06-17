<script>
  export let editMode = false;
  export let label;
  export let binding;
</script>

<div class="question">
  <label for="a9"
    >{label} <span class="required-tag" class:hidden={!editMode}>*</span></label
  >
  <input
    autocomplete="off"
    disabled={!editMode}
    bind:value={binding}
    class="text"
    id="a9"
    type="password"
    required
  />
</div>
