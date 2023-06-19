<script lang="ts">
  import { currentUser, loginViaSession } from "./services/login";
  import { Router, Route } from "svelte-routing";
  import DropZone from "./components/drop-zone.svelte";

  //login page
  import NotLoggedIn from "./pages/login/index.svelte";

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
  import Loading from "./pages/Loading.svelte";

  //dynamic pages import - edit
  import usersEdit from "./pages/users/edit.svelte";
  import productsEdit from "./pages/products/edit.svelte";
  import brandsEdit from "./pages/brands/edit.svelte";
  import categoriesEdit from "./pages/categories/edit.svelte";
  import locationsEdit from "./pages/locations/edit.svelte";
  import productTypesEdit from "./pages/productTypes/edit.svelte";
  import loansEdit from "./pages/loans/edit.svelte";

  //new pages import
  import usersNew from "./pages/users/new_old.svelte";
  import productsNew from "./pages/products/new.svelte";
  import brandsNew from "./pages/brands/new.svelte";
  import categoriesNew from "./pages/categories/new.svelte";
  import locationsNew from "./pages/locations/new.svelte";
  import productTypesNew from "./pages/productTypes/new.svelte";
  import loansNew from "./pages/loans/new.svelte";

  import "./axiosConfig.js";

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
  $: loggedIn = $currentUser;

  //on page change update path
  window.onpopstate = function (event) {
    path.update(() => {
      return window.location.pathname;
    });
  };
</script>

<!-- While in development disable login -->
<!-- {#if true} -->
{#if loggedIn}
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

          <!-- pages index-->
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
          <Route path="help" component={Help} />

          <!-- dynsmic routes edit -->
          <Route path="brugere/:id" component={usersEdit} />

          <Route path="produkter/edit/:id" component={productsEdit} />
          <Route path="brands/edit/:id" component={brandsEdit} />
          <Route path="produktkategorier/edit/:id" component={categoriesEdit} />
          <Route path="lokaliteter/edit/:id" component={locationsEdit} />
          <Route path="produkttyper/edit/:id" component={productTypesEdit} />
          <Route path="udlaan/edit/:id" component={loansEdit} />

          <!-- new routes -->
          <Route path="brugere/new" component={usersNew} />
          <Route path="produkter/new" component={productsNew} />
          <Route path="brands/new" component={brandsNew} />
          <Route path="produktkategorier/new" component={categoriesNew} />
          <Route path="lokaliteter/new" component={locationsNew} />
          <Route path="produkttyper/new" component={productTypesNew} />
          <Route path="udlaan/new" component={loansNew} />
        </div>
      </main>
    </Router>
  </div>
{:else}
  <!-- if not logged in -->

  {#await loginViaSession()}
    <Loading />
  {:then res}
    <NotLoggedIn />
  {:catch error}
    <p>{error.message}</p>
  {/await}
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
