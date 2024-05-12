<script lang="ts">
  import NewLayout from "@layouts/new.svelte";
  import { autoGenFields } from "@services/autoGenFields";
  import { zodSchema } from "./util";
</script>

<NewLayout
  table="category_groups"
  page_name="Kategorigrupper"
  fields={autoGenFields(zodSchema)}
  {zodSchema}
/>
