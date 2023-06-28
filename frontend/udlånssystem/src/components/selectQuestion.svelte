<script>
  export let editMode = false;
  export let label;
  export let binding;
  export let match;
  export let options = [{ UUID: 0, name: "" }];
  options.forEach((element) => {
    console.log(element.UUID === match);
  });
</script>

<div class="question">
  <label for="a10"
    >{label} <span class="required-tag" class:hidden={!editMode}>*</span
    ></label
  >
  <select
    disabled={!editMode}
    id="a10"
    required
    form="user-form"
    on:change={(e) => {binding = e.target.value}}
  >
    {#each options as option}
      <!-- {#if role.level < user.role_id.authorization_level_id} -->
      <option selected={option.UUID == match} value={option}
        >{option.name}
        </option
      >
      <!-- {/if} -->
    {/each}
  </select>
</div>
