<script lang="ts">
  export let id;
  import { loanModel } from "../../types/loanModel";
  import type { itemModel } from "../../types/itemModel";
  import getData from "../../data/getData";
  import goToPath from "../../services/goToPath";
  import update from "../../data/update";
  import FormEditPanel from "../../components/form-edit-panel.svelte";
  import TextQuestion from "../../components/textQuestion.svelte";
  import { onMount } from "svelte";
  import doseObjectsMatch from "../../services/doesObjectsMatch";
  import NumberQuestion from "../../components/numberQuestion.svelte";

  let importLoan: loanModel;
  let exportData: loanModel;
  let itemsInLoan: itemModel[];
  let loan_view: any;
  let editMode = false;

  let table = "loans";
  let page_name = "Udlaan";

  onMount(async () => {
    try {
      importDataFromDB();
    } catch (error) {
      console.log(error);
    }
  });

  async function importDataFromDB() {
    const data = await getData(table, id);
    exportData = new loanModel({ ...data });
    importLoan = new loanModel({ ...data });

    let itemsInLoan = await getData("items_in_loan");
    loan_view = await getData("loans_view_extended", id);

    // HOT FIX - if the data is not found, redirect to the index page
    if (!importLoan?.UUID) {
      alert("Kunne ikke finde data" + importLoan);
      goToPath(`/${page_name.toLowerCase()}`);
      return;
    }
  }

  async function handleUpdate(): Promise<any> {
    if (!exportData.validate()) {
      alert("Udfyld alle felter");
      return;
    }
    if (doseObjectsMatch(importLoan, exportData)) {
      alert("Ingen ændringer");
      return;
    }
    const response: any = await update(exportData, table);
    if (response && response.success) {
      importDataFromDB();
      editMode = false;
      alert("Changes saved");
    } else {
      alert("Error 500 - Ukendt fejl");
    }
  }

  async function handleReturn() {
    goToPath(`/udlaan/${id}/returner`);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleUpdate();
  }

  function loanDateFormatter() {
    let startDate = new Date(exportData?.date_created);
    let endDate = new Date(exportData?.date_created);
    endDate.setDate(endDate.getDate() + exportData?.loan_length);

    return `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`;
  }

  $: loaner_textbox = loan_view?.loaner_name + " | " + loan_view?.loaner_id;
  $: personel_textbox =
    loan_view?.personel_name + " | " + loan_view?.personel_id;
</script>

<div class="container">
  <FormEditPanel
    loanReturnDate={exportData?.date_of_return
      ? exportData?.date_of_return
      : null}
    loanMode={true}
    on:cancel={() => {
      goToPath(`/${page_name.toLowerCase()}`);
    }}
    on:reset={importDataFromDB}
    on:delete={handleReturn}
    on:update={handleUpdate}
    bind:editMode
  />
  {#if exportData && loan_view}
    <div class="content">
      <form action="" id="loan-form">
        <TextQuestion
          bind:binding={exportData.UUID}
          label="ID"
          editMode={false}
        />
        <NumberQuestion
          bind:binding={exportData.loan_length}
          label={`Lånetid | [${loanDateFormatter()}]`}
          {editMode}
        />
        <TextQuestion
          bind:binding={loaner_textbox}
          label={`Låner | [UUID]`}
          editMode={false}
        />
        <TextQuestion
          bind:binding={personel_textbox}
          label={`Personel | [UUID]`}
          editMode={false}
        />
      </form>
    </div>
  {:else}
    loading...
  {/if}
</div>

<style>
  .container {
    height: 100%;
    box-sizing: border-box;
    padding: 2rem;
    display: flex;
    gap: 1rem;
  }
  .content {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  #loan-form {
    width: 100%;
    max-width: 700px;
  }
</style>
