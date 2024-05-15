<script lang="ts">
  import EditLayout from "@layouts/edit.svelte";
  import { fields, zodSchema } from "./util";

  export let id: number;
</script>

<EditLayout table="brands" page_name="Brands" UUID={id} {fields} {zodSchema} />
