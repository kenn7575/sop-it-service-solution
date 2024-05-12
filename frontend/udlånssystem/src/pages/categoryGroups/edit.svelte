<script lang="ts">
  import EditLayout from "@layouts/edit.svelte";
  import { fields, zodSchema } from "./util";

  export let id: number;
</script>

<EditLayout
  table="category_groups"
  page_name="Kategorigrupper"
  UUID={id}
  {fields}
  {zodSchema}
/>
