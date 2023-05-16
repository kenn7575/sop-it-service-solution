<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Nav from "./components/Nav.svelte";
  import Home from "./pages/Home.svelte";
  import Users from "./pages/Users.svelte";
  import Error404 from "./pages/Error404.svelte";
</script>

<div class="app">
  <Router>
    <!-- navigation -->
    <header>
      <Nav />
    </header>
    <!-- routes -->
    <main>
      <Route component={Error404} />
      <Route path="/" component={Home} />
      <Route path="home" component={Home} />
      <Route path="users" component={Users} />
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
    transition: width 0.3s ease-in-out;
  }
</style>
