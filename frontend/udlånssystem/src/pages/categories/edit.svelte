<script lang="ts">
  import EditLayout from "@layouts/edit.svelte";
  import { zodSchema, fields } from "./util";

  export let id: number;
</script>

<EditLayout
  table="categories"
  page_name="Kategorier"
  UUID={id}
  {fields}
  {zodSchema}
/>
