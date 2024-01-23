<script>
  import SearchInput from "./SearchInput.svelte";
  import NavBtn from "./Nav-btn.svelte";
  import NavMenu from "./Nav-menu.svelte";
  import Toggle from "./toggle.svelte";
  import UserWidget from "./user-widget.svelte";
</script>

<div class="content">
  <div class="section">
    <div class="watermark">
      <img src=/logo.png alt="logo" class="object-contain" />
      <div class="text">
        <h3>v1.1.0-beta</h3>
        <h1>Udlånssystem</h1>
        <h2>
          By <a target="_blank" href="https://github.com/kenn7575">Kenni</a>
          &
          <a target="_blank" href="https://github.com/ItzNimaB">Nima</a>
        </h2>
      </div>
    </div>
    <!-- <div class="search">
            <SearchInput placeholder="Søg uni-login" />
        </div> -->
  </div>

  <div class="section section2">
    <NavBtn destination="/" text="Hjem" icon="fa-solid fa-house" />
    <!-- <NavBtn destination="/brugere" text="Brugere" icon="fa-solid fa-user" /> -->
    <NavBtn
      destination="/udlaan"
      text="Udlån"
      icon="fa-solid fa-file-signature"
    />

    <NavBtn
      destination="/produkter"
      text="Produkter"
      icon="fa-solid fa-bag-shopping"
    />
    <NavBtn
      destination="/produkttyper"
      text="Produkttyper"
      icon="fa-solid fa-barcode"
    />
    <!-- TODO: build chat so that the 2 departments can communicate with eachother -->
    <!-- <NavBtn destination="/chat" text="Chat" icon="fa-solid fa-comments" /> -->

    <NavMenu
      buttons={[
        {
          text: "Kategorier",
          icon: "fa-solid fa-tag",
          destination: "/kategorier",
        },
        {
          text: "Kategorigrupper",
          icon: "fa-solid fa-tag",
          destination: "/kategorigrupper",
        },
        {
          text: "Brands",
          destination: "/brands",
          icon: "fa-regular fa-copyright",
        },
        {
          text: "Dashboard",
          icon: "fa-solid fa-chart-line",
          destination: "/dashboard ",
        },
      ]}
      icon="fa-solid fa-ellipsis"
      text="Mere"
    />
  </div>
  <div class="section section3">
    <hr />
    <NavBtn
      destination="/notifikationer"
      text="Notifikationer"
      icon="fa-solid fa-bell"
    />
    <a
      style="width: 100%"
      href="https://github.com/kenn7575/sop-it-service-solution/issues/new/choose"
      target="_blank"
    >
      <NavBtn destination="" text="Feedback" icon="fa-solid fa-pen-to-square" />
    </a>
    <div class="darkmode">
      <div class="text2">
        <i class="fa-solid fa-moon" />
        <p>Dark mode</p>
      </div>
      <Toggle />
    </div>
    <div class="user">
      <UserWidget />
    </div>
  </div>
</div>

<style>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    overflow-y: auto;
    position: relative;
  }
  .content > div {
    padding: 0.8rem;
  }
  .section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
  .section2 {
    overflow-y: auto;
    margin-bottom: 1rem;
  }
  .section3 {
    margin-top: auto;
  }
  .darkmode {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0.5rem 0 0 1rem;
  }
  .text2 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .user {
    width: 100%;
    margin-top: 1rem;
  }
  /* .search {
    width: 100%;
    margin: 1rem 0;
  } */
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
  }
  h3 {
    font-size: 1rem;
    color: var(--text2);
    font-weight: 300;
    text-decoration: none;
  }
  h2,
  a {
    font-size: 1rem;
    color: var(--text2);
    font-weight: 400;
    text-decoration: none;
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
