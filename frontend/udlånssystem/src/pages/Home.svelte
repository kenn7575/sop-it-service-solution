<script>
  import { welcome } from "../../public/svg/welcome.js";
</script>

<div class="content">
  <h1>Velkommen til helpdesk'en</h1>
  <p>Hvordan kan vi hjælpe dig i dag?</p>
  <div class="svg">
    {@html welcome}
  </div>
</div>

<style>
  .svg {
    width: 60%;
  }
  .content {
    padding-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    max-height: 100vh;
  }
  p {
    color: var(--text2);
    font-size: 1.2rem;
  }
  h1 {
    font-size: 3rem;
  }
</style>
