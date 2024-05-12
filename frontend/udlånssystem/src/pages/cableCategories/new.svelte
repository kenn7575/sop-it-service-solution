<script lang="ts">
  import NewLayout from "@layouts/new.svelte";
  import { autoGenFields } from "@services/autoGenFields";
  import { zodSchema } from "./util";
</script>

<NewLayout
  table="cable_categories"
  page_name="Kabelgrupper"
  fields={autoGenFields(zodSchema)}
  {zodSchema}
/>
