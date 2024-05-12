<script lang="ts">
  import NewLayout from "@layouts/new.svelte";
  import { autoGenFields } from "@services/autoGenFields";
  import { zodSchema } from "./util";
</script>

<NewLayout
  table="brands"
  page_name="Brands"
  fields={autoGenFields(zodSchema)}
  {zodSchema}
/>
