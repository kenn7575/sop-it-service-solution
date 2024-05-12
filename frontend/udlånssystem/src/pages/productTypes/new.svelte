<script lang="ts">
  import NewLayout from "@layouts/new.svelte";
  import { zodSchema, fields } from "./util";
</script>

<NewLayout table="products" page_name="Produkttyper" {fields} {zodSchema} />
