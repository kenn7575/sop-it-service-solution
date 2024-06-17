<script lang="ts">
  import NewLayout from "@layouts/new.svelte";
  import { zodSchema, fields } from "./util";
</script>

<NewLayout table="items" page_name="Produkter" {fields} {zodSchema} />
