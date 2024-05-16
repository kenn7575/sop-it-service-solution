<script lang="ts">
  import Table from "@components/table.svelte";
  import axios from "axios";
  import { onMount } from "svelte";
  import getData from "@data/getData";

  let headers: string[] = [];
  let values: any[] = [];
  let constData: any[] = [];

  let page_name = "udlaan";

  let filters = {
    active: false,
    returned: false,
  };

  async function filterLoans(filter: "active" | "returned") {
    filters[filter] = !filters[filter];

    values = [];

    if (filters.active) {
      values.push(...constData.filter((loan) => loan.Returneret));
    }

    if (filters.returned) {
      values.push(...constData.filter((loan) => !loan.Returneret));
    }

    if (!filters.active && !filters.returned) {
      values = [...constData];
    }
  }

  onMount(async () => {
    const data = await getData("loans_view");

    headers = data.headers;
    values = data.data;

    constData = [...values];
    filterLoans("active");
  });

  import goToPath from "@services/goToPath";
  function handleRowClick(event) {
    let id = event.detail.UUID;
    goToPath(`${page_name.toLowerCase()}/${id}`);
  }
  async function handleSendMails() {
    return; // temp
    const { data } = await axios.post("mail.php");
    if (data?.success) alert(data.message);
  }
</script>

<div class="table-container">
  <!-- extraButton="Send mail til overskredne udlån" -->
  <Table
    {headers}
    {values}
    buttonDestination={`${page_name}/new`}
    on:message={handleRowClick}
    on:action={handleSendMails}
    filterKey="Bruger"
    sortBy="Oprettet"
    sortAscending={true}
  >
    <div slot="controls" class="flex gap-5">
      <label class="toggleReturned">
        <input
          id="checkbox"
          type="checkbox"
          checked={filters.active}
          on:change={(e) => filterLoans("active")}
        />
        <p>Vis aktive lån</p>
      </label>
      <label class="toggleReturned">
        <input
          id="checkbox"
          type="checkbox"
          checked={filters.returned}
          on:change={(e) => filterLoans("returned")}
        />
        <p>Vis afleverede lån</p>
      </label>
    </div>
  </Table>
</div>

<style>
  .table-container {
    width: 100%;
    height: 100%;
  }

  .toggleReturned {
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
