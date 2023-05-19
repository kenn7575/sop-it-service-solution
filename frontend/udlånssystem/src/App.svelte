<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Nav from "./components/Nav.svelte";
  import Home from "./pages/Home.svelte";
  import Users from "./pages/Users.svelte";
  import Error404 from "./pages/Error404.svelte";
  import Products from "./pages/Products.svelte";
  import Dashboard from "./pages/Dashboard.svelte";
  import Brands from "./pages/More/Brands.svelte";
  import CategoriesGroups from "./pages/More/Categories-groups.svelte";
  import Locations from "./pages/More/Locations.svelte";
  import ProductTypes from "./pages/More/Product-Types.svelte";
  import Help from "./pages/help.svelte";
  import Notifications from "./pages/Notifications.svelte";
  import Chat from "./pages/Chat.svelte";
  import Breadcrumps from "./components/breadcrumps.svelte";

  import { path } from "./stores/pathStore";
  import { onMount } from "svelte";

  onMount(() => {
    path.update(() => {
      return window.location.pathname;
    });
    //set theme
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.className = "dark";
    } else {
      document.documentElement.className = "light";
    }
  });
</script>

<div class="app">
  <Router>
    <!-- navigation -->
    <header>
      <Nav />
    </header>
    <!-- routes -->
    <main>
      <div class="breadcrumps">
        <Breadcrumps />
      </div>
      <Route component={Error404} />
      <Route path="/" component={Home} />
      <Route path="hjem" component={Home} />
      <Route path="brugere" component={Users} />
      <Route path="dashboard" component={Dashboard} />
      <Route path="produkter" component={Products} />
      <Route path="brands" component={Brands} />
      <Route path="kategorier" component={CategoriesGroups} />
      <Route path="lokaliteter" component={Locations} />
      <Route path="produkttyper" component={ProductTypes} />
      <Route path="notifikationer" component={Notifications} />
      <Route path="chat" component={Chat} />
    </main>
  </Router>
</div>

<style>
  .app {
    display: grid;
    grid-template-columns: auto 1fr;
    height: 100vh;
    background-color: var(--bg1);
  }
  header {
    background: var(--nav);
    width: 20rem;
    height: 100vh;
  }
  main {
    overflow-y: auto;
  }
  .breadcrumps {
    width: 100%;
    padding: 0.5rem;
  }
</style>
