<script lang="ts">
  import NewLayout from "@layouts/new.svelte";
  import { fields, zodSchema } from "./util";
</script>

<NewLayout table="brands" page_name="Brands" {fields} {zodSchema} />
