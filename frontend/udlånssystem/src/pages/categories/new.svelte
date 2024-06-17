<script lang="ts">
  import NewLayout from "@layouts/new.svelte";
  import { zodSchema, fields } from "./util";
</script>

<NewLayout table="categories" page_name="Kategorier" {fields} {zodSchema} />
