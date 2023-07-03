<!-- ! good luck if this ever breaks! -->
<!-- it took almost a week to get it to work. -->
<!-- 70 201 201 - nummeret til livlinien. du for brug for det. -->
<script>
// @ts-nocheck

  export let editMode = true;
  export let label;
  export let binding = 1;
  export let match = { UUID: 1, name: "" };
  export let options = [{ UUID: 1, name: "" }];
</script>

<div class="question">
  <label for="a10"
    >{label} <span class="required-tag" class:hidden={!editMode}>*</span></label
  >
  <select
    disabled={!editMode}
    id="a10"
    required
    form="user-form"
    on:change={(e) => {
      binding = JSON.parse(e.target.value);
    }}
  >
    {#each options as option}
      <option
        selected={option.UUID == match.UUID}
        value={JSON.stringify(option.UUID)}
        >{option.name}
      </option>
    {/each}
  </select>
</div>
