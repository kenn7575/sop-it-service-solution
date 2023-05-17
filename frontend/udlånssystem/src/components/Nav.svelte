<script>
  import logo from "../../public/logo.png";
  import SearchInput from "./SearchInput.svelte";
  import NavBtn from "./Nav-btn.svelte";
  import NavMenu from "./Nav-menu.svelte";
  import Toggle from "./toggle.svelte";
</script>

<div class="content">
  <div class="watermark">
    <img src={logo} alt="logo" />
    <div class="text">
      <h1>Udlånssystem</h1>
      <h2>By Kenni & Nima</h2>
    </div>
  </div>
  <div class="search">
    <SearchInput placeholder="Search" />
  </div>
  <NavBtn destination="/" text="Home" icon="fa-solid fa-house" />
  <NavBtn destination="/users" text="Users" icon="fa-solid fa-user" />
  <NavBtn
    destination="/dashboard"
    text="Dashboard"
    icon="fa-solid fa-chart-line"
  />
  <NavBtn
    destination="/products"
    text="Products"
    icon="fa-solid fa-bag-shopping"
  />
  <NavMenu
    buttons={[
      {
        text: "Categories & groups",
        icon: "",
        destination: "/categories-groups",
      },
      { text: "Product types", icon: "", destination: "/product-types" },
      { text: "Locations", icon: "", destination: "/locations" },
      { text: "Brands", icon: "", destination: "/brands" },
    ]}
    icon="fa-solid fa-ellipsis"
    text="More"
    destination="/more"
  />
  <hr />
  <NavBtn
    destination="/notifications"
    text="Notifications"
    icon="fa-solid fa-bell"
  />
  <NavBtn
    destination="/help"
    text="Help"
    icon="fa-regular fa-question-circle"
  />
  <div class="darkmode">
    <div class="text2">
      <i class="fa-solid fa-moon" />
      <p>Dark mode</p>
    </div>
    <Toggle />
  </div>
</div>

<style>
  .content {
    padding: 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    height: 100%;
    overflow-y: auto;
  }
  .darkmode {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-left: 1rem;
  }
  .text2 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .search {
    width: 100%;
    margin: 1rem 0;
  }
  .watermark {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
  }
  img {
    max-width: 50px;
  }
  h1 {
    font-size: 1.75rem;
    font-weight: 500;
    color: var(--text1);
  }
  h2 {
    font-size: 1rem;
    color: var(--text2);
    font-weight: 400;
  }
  hr {
    width: 100%;
    border: 1px solid var(--text2);
  }
  i {
    text-align: center;
    width: 2rem;
    color: var(--text3);
    font-size: 1.25rem;
  }
  p {
    font-size: 1.2rem;
    color: var(--text3);
  }
</style>
