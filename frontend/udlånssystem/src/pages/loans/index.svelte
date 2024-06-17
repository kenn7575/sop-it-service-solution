<script lang="js">
  // @ts-nocheck

  import Table from "../../components/table.svelte";
  import axios from "axios";
  import { onMount } from "svelte";
  import getData from "../../data/getData";

  let inputData = {};
  let constData = {};

  let page_name = "udlaan";

  async function filterLoans(returned) {
    if (returned) {
      inputData.data = constData.data.filter((loan) => loan.Returneret);
    } else {
      inputData.data = constData.data.filter((loan) => !loan.Returneret);
    }
  }

  onMount(async () => {
    constData = await getData("loans_view");
    inputData = { ...constData };
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
  <!-- extraButton="Send mail til overskredne udlån" -->
  <Table
    headers={inputData.headers}
    values={inputData.data}
    buttonDestination={`${page_name}/new`}
    on:message={handleRowClick}
    on:action={handleSendMails}
    filterKey="Bruger"
    sortBy="Oprettet"
    sortAscending={true}
  >
    <label slot="controls" id="toggleReturned">
      <input
        id="checkbox"
        type="checkbox"
        on:change={(e) => filterLoans(e.target.checked)}
      />
      <p>Vis kun afleverede lån</p>
    </label>
  </Table>
</div>

<style>
  .table-container {
    width: 100%;
    height: 100%;
  }

  #toggleReturned {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    padding: 0.75rem 0.5rem;

    border: solid 1px var(--text1);
    border-radius: 10px;
    background: var(--bg2);

    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
  }
</style>
