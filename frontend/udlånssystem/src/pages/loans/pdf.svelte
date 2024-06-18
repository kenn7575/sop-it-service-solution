<script lang="ts">
  const loan = {
    UUID: 4351,
    date_created: "2023-10-18T11:30:48.000Z",
    date_updated: "2023-10-18T11:30:48.000Z",
    date_of_return: null,
    location_of_use_id: null,
    user_id: 907,
    helpdesk_personel_id: null,
    selfservice_case_id: null,
    recipient_type_id: null,
    loan_length: null,
    items_in_loan: [
      { items: { products: { name: "KEYBOARD" } } },
      { items: { products: { name: "KEYBOARD" } } },
      { items: { products: { name: "KEYBOARD" } } },
      { items: { products: { name: "KEYBOARD" } } },
      { items: { products: { name: "KEYBOARD" } } },
      { items: { products: { name: "KEYBOARD" } } },
      { items: { products: { name: "KEYBOARD" } } },
      { items: { products: { name: "HP Mus" } } },
      { items: { products: { name: "HP Mus" } } },
      { items: { products: { name: "HP Mus" } } },
      { items: { products: { name: "LOGITECH-MUS" } } },
      { items: { products: { name: "Dell Mus" } } },
      { items: { products: { name: "HP Mus" } } },
      { items: { products: { name: "HP Mus" } } },
    ],
    cables_in_loan: [
      { cables: { name: "DVI", amount_lent: 9 } },
      { cables: { name: "0-1m", amount_lent: 108 } },
      { cables: { name: "Strømkabler_med_jord", amount_lent: 54 } },
      { cables: { name: "Cisco_USB_Console_kable", amount_lent: 61 } },
    ],
    users_loans_user_idTousers: {
      UUID: 907,
      username: "ANNL",
      password: "$2y$10$lHfKM8OFTL4uvle0SFdS4.MRXZaK47ec26uzYeg/1FzBqPea4dSZ.",
      name: "Anette N. Larsen",
      mail: "ANNL@edu.sde.dk",
      is_ad_user: true,
      date_created: "2022-11-09T15:37:21.000Z",
      date_updated: "2022-11-09T15:37:21.000Z",
      education_id: 1,
      role_id: 3,
      img_name: null,
    },
    users_loans_helpdesk_personel_idTousers: null,
    _count: { items_in_loan: 14, cables_in_loan: 4 },
  };
</script>

<div id="pdf" class="px-10">
  <section>
    <div class="flex w-full p-6 pt-8 justify-around">
      <img src="/sde-logotype.png" alt="SDE logo" />
      <img src="/logo.png" alt="Logo" class="scale-75" />
    </div>

    <h1 class="text-center text-2xl font-bold">Udlånskvittering</h1>
  </section>

  <div class="line" />

  <section class="grid grid-cols-2 gap-y-3">
    <div>
      <span> Udlåner: </span>
      <h3>{loan.users_loans_user_idTousers.username}</h3>
    </div>

    <div>
      <span> Låner: </span>
      <h3>{loan.users_loans_helpdesk_personel_idTousers?.username || ""}</h3>
    </div>

    <div>
      <span> Udlånsdato: </span>
      <h3>{new Date(loan.date_created).toLocaleDateString("da-dk")}</h3>
    </div>

    <div>
      <span> Afleveringsdato: </span>
      <h3>{loan.date_of_return || ""}</h3>
    </div>
  </section>

  <div class="line" />

  <section class="flex">
    <div class="w-1/2">
      <h2 class="mb-2">Produkter:</h2>
      <div>
        {#each loan.items_in_loan as item}
          <div>
            <p>{item.items.products.name}</p>
          </div>
        {/each}
      </div>
    </div>

    <div class="w-1/2">
      <h2 class="mb-2">Kabler:</h2>
      <div>
        {#each loan.cables_in_loan as cable}
          <div>
            <p>{cable.cables.name} x {cable.cables.amount_lent}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>
</div>

<style>
  @import url("https://fonts.googleapis.com/css?family=Inter");

  * {
    color: black;
    font-family: "Inter";
  }

  #pdf {
    height: calc(100vh - 6rem);
    aspect-ratio: 595 / 842;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
  }

  .line {
    margin: 1rem auto;
    height: 1px;
    border-radius: 100px;

    @apply bg-neutral-600;
  }

  img {
    width: auto;
    height: 6rem;
  }

  span {
    font-size: small;
  }

  h2 {
    font-size: large;
  }

  h3 {
    font-size: x-large;
  }
</style>
