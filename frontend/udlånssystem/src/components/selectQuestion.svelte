<script>
  export let editMode = false;
  export let label;
  export let binding;
  export let match;
  export let options = [{ UUID: 0, name: "" }];
  options.forEach((element) => {
    console.log(element.UUID === match.UUID);
  });
</script>

<div class="question">
  <label for="a10"
    >Bruger rolle <span class="required-tag" class:hidden={!editMode}>*</span
    ></label
  >

  <select
    disabled={!editMode}
    id="a10"
    required
    form="user-form"
    bind:value={binding}
  >
    {#each options as option}
      <!-- {#if role.level < user.role_id.authorization_level_id} -->
      <option selected={option.UUID === match.UUID} value={option.name}
        >{option.name}</option
      >
      <!-- {/if} -->
    {/each}
  </select>
</div>
