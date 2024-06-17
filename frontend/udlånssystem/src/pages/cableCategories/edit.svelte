<script lang="ts">
  import EditLayout from "@layouts/edit.svelte";
  import { fields, zodSchema } from "./util";

  export let id: number;
</script>

<EditLayout
  table="cable_categories"
  page_name="Kabelgrupper"
  UUID={id}
  {fields}
  {zodSchema}
/>
