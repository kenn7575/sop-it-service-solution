<script lang="ts">
  import EditLayout from "@layouts/edit.svelte";
  import { autoGenFields } from "@services/autoGenFields";
  import { zodSchema } from "./util";

  export let id: number;
</script>

<EditLayout
  table="cable_categories"
  page_name="Kabelgrupper"
  UUID={id}
  fields={autoGenFields(zodSchema)}
  {zodSchema}
/>
