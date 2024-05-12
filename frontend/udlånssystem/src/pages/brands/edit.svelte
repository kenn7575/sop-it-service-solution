<script lang="ts">
  import EditLayout from "@layouts/edit.svelte";
  import { autoGenFields } from "@services/autoGenFields";
  import { zodSchema } from "./util";

  export let id: number;
</script>

<EditLayout
  table="brands"
  page_name="Brands"
  UUID={id}
  fields={autoGenFields(zodSchema)}
  {zodSchema}
/>
