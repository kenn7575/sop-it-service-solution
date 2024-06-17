<script lang="ts">
  import EditLayout from "@layouts/edit.svelte";
  import { zodSchema, fields } from "./util";

  export let id: number;
</script>

<EditLayout
  table="items"
  page_name="Produkter"
  UUID={id}
  {fields}
  {zodSchema}
/>
