<script lang="ts">
  import EditLayout from "@layouts/edit.svelte";
  import TextQuestion from "@components/textQuestion.svelte";
  import type { brandModel } from "types/brandModel";

  export let id;

  let fields = [
    {
      binding: "name",
      label: "Navn",
    }
  ]
</script>

<EditLayout table="brands" page_name="Brands" UUID={id} {fields}/>
