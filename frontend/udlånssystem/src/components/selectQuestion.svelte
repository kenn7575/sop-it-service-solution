<!-- ! good luck if this ever breaks! -->
<!-- it took almost a week to get it to work. -->
<!-- 70 201 201 - numeret til livlinien. du for brug for det. -->
<script>
// @ts-nocheck

  export let editMode = false;
  export let label;
  export let binding;
  export let match = { UUID: 0, name: "" };
  export let options = [{ UUID: 0, name: "" }];
  // $: console.log(match, options, binding);
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
        value={JSON.stringify(option)}
        >{option.name}
      </option>
    {/each}
  </select>
</div>
