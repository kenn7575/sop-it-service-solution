<script lang="ts">
  import NotLoggedIn from "./pages/login/index.svelte";
  import { currentUser } from "./services/currentUser";
  import { Router, Route } from "svelte-routing";
  import axios from "axios";

  //pages import
  import Nav from "./components/Nav.svelte";
  import Home from "./pages/Home.svelte";
  import Users from "./pages/users/index.svelte";
  import Error404 from "./pages/Error404.svelte";
  import Products from "./pages/products/index.svelte";
  import Dashboard from "./pages/dashboard/index.svelte";
  import Brands from "./pages/brands/index.svelte";
  import CategoriesGroups from "./pages/categories/index.svelte";
  import Locations from "./pages/locations/index.svelte";
  import ProductTypes from "./pages/productTypes/index.svelte";
  import Help from "./pages/help/index.svelte";
  import Notifications from "./pages/notifications/index.svelte";
  import Chat from "./pages/chat/index.svelte";
  import Breadcrumps from "./components/breadcrumps.svelte";
  import Loans from "./pages/loans/index.svelte";

  import usersNew from "./pages/users/new.svelte";
  import productsNew from "./pages/products/new.svelte";
  import brandsNew from "./pages/brands/new.svelte";
  import categoriesNew from "./pages/categories/new.svelte";
  import locationsNew from "./pages/locations/new.svelte";
  import productTypesNew from "./pages/productTypes/new.svelte";
  import loansNew from "./pages/loans/new.svelte";

  axios.defaults.headers.common["Authorization"] = "test321";
  axios.defaults.baseURL = "http://172.16.3.135:5000";
  axios.defaults.params = {
    user: import.meta.env.VITE_APP_ADMIN_USERNAME,
    password: import.meta.env.VITE_APP_ADMIN_PASSWORD,
  };

  console.log(import.meta.env.VITE_APP_ADMIN_USERNAME);

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
  $: logedIn = $currentUser;
</script>

{#if logedIn}
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
        <div class="main">
          <!-- main routes -->
          <Route component={Error404} />
          <Route path="/" component={Home} />
          <Route path="hjem" component={Home} />
          <Route path="brugere" component={Users} />
          <Route path="dashboard" component={Dashboard} />
          <Route path="produkter" component={Products} />
          <Route path="brands" component={Brands} />
          <Route path="produktkategorier" component={CategoriesGroups} />
          <Route path="lokaliteter" component={Locations} />
          <Route path="produkttyper" component={ProductTypes} />
          <Route path="notifikationer" component={Notifications} />
          <Route path="chat" component={Chat} />
          <Route path="udlaan" component={Loans} />

          <!-- new routes -->
          <Route path="brugere/new" component={usersNew} />
          <Route path="produkter/new" component={productsNew} />
          <Route path="brands/new" component={productsNew} />
          <Route path="produktkategorier/new" component={categoriesNew} />
          <Route path="lokaliteter/new" component={locationsNew} />
          <Route path="produkttyper/new" component={productTypesNew} />
          <Route path="udlaan/new" component={loansNew} />
        </div>
      </main>
    </Router>
  </div>
{:else}
  <NotLoggedIn />
{/if}

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
    overflow-y: hidden;
    height: 100vh;
    overflow-y: auto;
    position: relative;
    display: grid;
    grid-template-rows: 50px 1fr;
  }
  .breadcrumps {
    width: 100%;
    padding: 0.5rem;
    position: sticky;
    top: 0;
    z-index: 99999999999999999999999999999999999;
  }
  .main {
    overflow-y: hidden;
    height: 100%;
  }
</style>
