<script>
  import logo from "../../public/logo.png";
  import SearchInput from "./SearchInput.svelte";
  import NavBtn from "./Nav-btn.svelte";
</script>

<div class="content">
  <div class="watermark">
    <img src={logo} alt="logo" />
    <div class="text">
      <h1>Udlånssystem</h1>
      <h2>By Kenni & Nima</h2>
    </div>
  </div>
  <SearchInput placeholder="Search" />
  <NavBtn />
</div>

<style>
  .content {
    padding: 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    height: 100%;
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
  }
  h2 {
    font-size: 1rem;
    color: var(--text2);
    font-weight: 400;
  }
</style>
