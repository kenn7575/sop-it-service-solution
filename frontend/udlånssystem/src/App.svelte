<script lang="ts">
  import {
    currentUser,
    loginViaCredentials,
    loginViaSession,
  } from "./services/login";
  import { Router, Route } from "svelte-routing";
  import {
    barcodeStore,
    barcodeBuilder,
    barcodeBuilderTimeOut,
    controlStore,
  } from "./stores/barcodeStore";

  //login page
  import NotLoggedIn from "./pages/login/index.svelte";

  //pages import
  import Nav from "./components/Nav.svelte";
  import Home from "./pages/Home.svelte";
  import Error404 from "./pages/Error404.svelte";
  import Products from "./pages/products/index.svelte";
  import Dashboard from "./pages/dashboard/index.svelte";
  import Brands from "./pages/brands/index.svelte";
  import Categories from "./pages/categories/index.svelte";
  import CategoriesGroups from "./pages/categoryGroups/index.svelte";
  import ProductTypes from "./pages/productTypes/index.svelte";
  import Cables from "./pages/cables/index.svelte";
  import CablesGroups from "./pages/cableCategories/index.svelte";
  import Help from "./pages/help/index.svelte";
  import Notifications from "./pages/notifications/index.svelte";
  import Chat from "./pages/chat/index.svelte";
  import Breadcrumps from "./components/breadcrumbs.svelte";
  import Loans from "./pages/loans/index.svelte";
  import Loading from "./pages/Loading.svelte";

  //dynamic pages import - edit
  import productsEdit from "./pages/products/edit.svelte";
  import brandsEdit from "./pages/brands/edit.svelte";
  import categoriesEdit from "./pages/categories/edit.svelte";
  import categoryGroupsEdit from "./pages/categoryGroups/edit.svelte";
  import productTypesEdit from "./pages/productTypes/edit.svelte";
  import loansEdit from "./pages/loans/edit.svelte";
  import cablesEdit from "./pages/cables/edit.svelte";
  import cableGroupsEdit from "./pages/cableCategories/edit.svelte";

  //new pages import
  import productsNew from "./pages/products/new.svelte";
  import brandsNew from "./pages/brands/new.svelte";
  import categoriesNew from "./pages/categories/new.svelte";
  import categoryGroupsNew from "./pages/categoryGroups/new.svelte";
  import productTypesNew from "./pages/productTypes/new.svelte";
  import loansNew from "./pages/loans/new.svelte";
  import cablesNew from "./pages/cables/new.svelte";
  import cableGroupsNew from "./pages/cableCategories/new.svelte";

  //return loan
  import loanReturn from "./pages/loans/return.svelte";

  import "./axiosConfig.js";

  import { path } from "./stores/pathStore";
  $: $path, loginViaSession();

  import { onMount } from "svelte";

  //subscribe to path and run function on change

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
  function handleKeyUp(e) {
    if (e.key.toLowerCase() === "meta") {
      $controlStore = false;
      return;
    }
    // console.log("🚀 ~ file: App.svelte:83 ~ handleKeyUp ~ e:", e);

    // // $controlStore = false;
  }
  function handleKeyDown(e) {
    const now = new Date().getTime();

    if (!e.key) return;
    if (e.keyCode == 20) {
      $controlStore = true;
      return;
    }
    if (e.key.toLowerCase() === "shift") {
      return;
    }
    if (
      (e.key === "Enter" || e.keyCode === 13) &&
      now - $barcodeBuilderTimeOut < 20
    ) {
      $barcodeStore = $barcodeBuilder;
    } else {
      if (now - $barcodeBuilderTimeOut > 20) {
        $barcodeStore = "";
        $barcodeBuilder = e.key;
      } else {
        $barcodeBuilder = $barcodeBuilder + e.key;
      }
      $barcodeBuilderTimeOut = now;
    }
  }
</script>

<svelte:window on:keydown={handleKeyDown} on:keyup={handleKeyUp} />

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
          <!-- <Route path="brugere" component={Users} /> -->
          <Route path="dashboard" component={Dashboard} />
          <Route path="produkter" component={Products} />
          <Route path="brands" component={Brands} />
          <Route path="kategorigrupper" component={CategoriesGroups} />
          <Route path="kategorier" component={Categories} />
          <Route path="produkttyper" component={ProductTypes} />
          <Route path="notifikationer" component={Notifications} />
          <Route path="chat" component={Chat} />
          <Route path="udlaan" component={Loans} />
          <Route path="help" component={Help} />
          <Route path="kabler" component={Cables} />
          <Route path="kabelgrupper" component={CablesGroups} />

          <!-- dynsmic routes edit -->
          <!-- <Route path="brugere/:id" component={usersEdit} /> -->
          <Route path="brands/:id" component={brandsEdit} />
          <Route path="kategorier/:id" component={categoriesEdit} />
          <Route path="kategorigrupper/:id" component={categoryGroupsEdit} />
          <Route path="produkter/:id" component={productsEdit} />
          <Route path="produkttyper/:id" component={productTypesEdit} />
          <Route path="udlaan/:id" component={loansEdit} />
          <Route path="kabler/:id" component={cablesEdit} />
          <Route path="kabelgrupper/:id" component={cableGroupsEdit} />

          <!-- new routes -->
          <!-- <Route path="brugere/new" component={usersNew} /> -->
          <Route path="produkter/new" component={productsNew} />
          <Route path="brands/new" component={brandsNew} />
          <Route path="kategorier/new" component={categoriesNew} />
          <Route path="kategorigrupper/new" component={categoryGroupsNew} />
          <Route path="produkttyper/new" component={productTypesNew} />
          <Route path="udlaan/new" component={loansNew} />
          <Route path="kabler/new" component={cablesNew} />
          <Route path="kabelgrupper/new" component={cableGroupsNew} />

          <Route path="udlaan/:id/returner" component={loanReturn} />
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
