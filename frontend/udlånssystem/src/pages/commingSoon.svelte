<script>
  import { commingSoon } from "../../public/svg/commingSoon.js";
</script>

<div class="content">
  <h1>Coming soon!</h1>
  <p>This feature is going to be Implemented in the future.</p>
  <div class="svg">
    {@html commingSoon}
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
