<script lang="js">
  // @ts-nocheck

  import Table from "../../components/table.svelte";
  import axios from "axios";
  import { onMount } from "svelte";
  import getData from "../../data/getData";

  let inputData = [[]];
  let constData = [[]];

  let page_name = "udlaan";

  async function filterLoans(returned) {
    if (returned) {
      inputData = constData.filter((loan) => loan.Returneret);
    } else {
      inputData = constData.filter((loan) => !loan.Returneret);
    }
  }

  onMount(async () => {
    constData = await getData("loans_view");
    inputData = [...constData];
    filterLoans(false);
  });

  import goToPath from "../../services/goToPath";
  function handleRowClick(event) {
    let id = event.detail.UUID;
    goToPath(`${page_name.toLowerCase()}/${id}`);
  }
  async function handleSendMails() {
    console.log("Sending mails");
    const { data } = await axios.post("mail.php");
    console.log(data);
    if (data?.success) alert(data.message);
  }
</script>

<div class="table-container">
  <input
    id="checkbox"
    type="checkbox"
    on:change={(e) => filterLoans(e.target.checked)}
  />
  <label for="checkbox">Vis kun afleverede lån</label>

  <!-- extraButton="Send mail til overskredne udlån" -->
  <Table
    {inputData}
    buttonDestination={`${page_name}/new`}
    on:message={handleRowClick}
    on:action={handleSendMails}
    filterKey="Bruger"
    sortBy="Oprettet"
  />
</div>

<style>
  .table-container {
    width: 100%;
    height: 100%;
  }
</style>
