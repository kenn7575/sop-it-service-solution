<script lang="ts">
  import EditLayout from "@layouts/edit.svelte";
  import { zodSchema, fields } from "./util";

  export let id: number;
</script>

<EditLayout table="cables" page_name="Kabler" UUID={id} {fields} {zodSchema} />
