<script lang="ts">
  import NewLayout from "@layouts/new.svelte";
  import { fields, zodSchema } from "./util";
</script>

<NewLayout table="cables" page_name="Kabler" {fields} {zodSchema} />
