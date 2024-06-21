<script lang="ts">
  import NewLayout from "@layouts/new.svelte";
  import { fields, zodSchema } from "./util";
</script>

<NewLayout table="product_status" page_name="ProduktStatusser" {fields} {zodSchema} />
