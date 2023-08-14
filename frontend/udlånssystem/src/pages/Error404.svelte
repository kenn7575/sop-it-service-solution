<script>
  import { error404 } from "../../public/svg/error404.js";
</script>

<div class="content">
  <h1>Error 404</h1>
  <p>Page not found</p>
  <div class="svg">
    {@html error404}
  </div>
</div>

<style>
  .svg {
    width: 60%;
  }
  .content {
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    height: 100%;
    overflow-y: auto;
  }
  p {
    color: var(--text2);
  }
</style>
