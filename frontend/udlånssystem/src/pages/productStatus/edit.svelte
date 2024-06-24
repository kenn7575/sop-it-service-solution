<script lang="ts">
  import EditLayout from "@layouts/edit.svelte";
  import { fields, zodSchema } from "./util";

  export let id: number;
</script>

<EditLayout
  table="product_status"
  page_name="produktstatusser"
  UUID={id}
  {fields}
  {zodSchema}
/>
