<script lang="ts">
  import NewLayout from "@layouts/new.svelte";
  import { fields, zodSchema } from "./util";
</script>

<NewLayout
  table="category_groups"
  page_name="Kategorigrupper"
  {fields}
  {zodSchema}
/>
