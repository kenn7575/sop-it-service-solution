<script lang="ts">
  import EditLayout from "@layouts/edit.svelte";
  import TextQuestion from "@components/textQuestion.svelte";
  import { brandModel } from "types/brandModel";
  import { z } from "zod";

  export let id;

  let fields = [
    {
      binding: "name",
      label: "Navn",
    },
  ];

  let zodSchema = z.object({
    UUID: z.number(),
    name: z.string().trim().min(1, {
      message: "Navn er påkrævet",
    }),
  });
</script>

<EditLayout table="brands" page_name="Brands" UUID={id} {fields} {zodSchema} />
