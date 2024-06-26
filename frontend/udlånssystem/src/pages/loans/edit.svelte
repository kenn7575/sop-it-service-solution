<script lang="ts">
  export let id;

  import { onMount } from "svelte";

  import FormEditPanel from "@components/form-edit-panel.svelte";
  import TextQuestion from "@components/textQuestion.svelte";
  import NumberQuestion from "@components/numberQuestion.svelte";

  import { getData, updateItem } from "@data/index";
  import goToPath from "@services/goToPath";
  import doseObjectsMatch from "@services/doesObjectsMatch";

  import Pdf from "./pdf.svelte";
  import html2pdf from "html2pdf.js";

  let importLoan: loanModel;
  let exportData: loanModel;
  let itemsFromLoans: itemsFromLoan[] = [];
  let cablesFromLoans: cableFromLoan[] = [];
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
    exportData = { ...data };
    importLoan = { ...data };

    itemsFromLoans = (await getData("items_from_loans?loan_id=" + id)).data;
    cablesFromLoans = (await getData("cables_from_loans?loan_id=" + id)).data;
    loan_view = await getData("loans_view_extended", id);

    // HOT FIX - if the data is not found, redirect to the index page
    if (!importLoan?.UUID) {
      alert("Kunne ikke finde data" + importLoan);
      goToPath(`/${page_name.toLowerCase()}`);
      return;
    }
  }

  async function handleUpdate(): Promise<any> {
    if (doseObjectsMatch(importLoan, exportData)) {
      alert("Ingen ændringer");
      return;
    }
    const response: any = await updateItem(table, id, exportData);
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

  $: loaner_textbox = loan_view?.loaner_username + " | " + loan_view?.loaner_id;
  $: personel_textbox =
    loan_view?.personel_username + " | " + loan_view?.personel_id;

  async function printPDF() {
    const pdfElement = document.getElementById("pdf");

    html2pdf(pdfElement, {
      filename: `udlaan_${id}.pdf`,
      image: { type: "png", quality: 1 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    });
  }
</script>

<div class="container">
  <div class="hidden">
    <Pdf {id} />
  </div>
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
  >
    <div class="flex flex-col self-start gap-10">
      {#if itemsFromLoans.length}
        <div class="flex flex-col gap-1">
          <h1>Produkter:</h1>
          <hr />
          <div class="flex flex-col">
            {#each itemsFromLoans as item}
              <span>{item.Produkt_navn}</span>
            {/each}
          </div>
        </div>
      {/if}

      {#if cablesFromLoans.length}
        <div class="flex flex-col gap-1">
          <h1>Kabler:</h1>
          <hr />
          <div class="flex flex-col">
            {#each cablesFromLoans as cable}
              <span>{cable.Kabel_navn} x {cable.Maengde_laant}</span>
            {/each}
          </div>
        </div>
      {/if}
    </div>
    <button on:click={printPDF} class="mt-auto">Download PDF</button>
  </FormEditPanel>
  {#if exportData && loan_view}
    <div class="content">
      <form action="" id="loan-form">
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
