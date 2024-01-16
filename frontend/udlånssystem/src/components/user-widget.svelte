<script>
  import profilePic from "../../../../mappePaaServeren/profile.png";
  import pic from "../../../../mappePaaServeren/gulerodder.png";
  import { currentUser } from "../services/login";
  import { logout } from "../services/login";

  $: user = $currentUser;
</script>

<div class="content">
  <div class="info">
    {#if user}
      <!-- <img src={user.img_name ? pic : profilePic} alt="profilePic" /> -->
    {:else}
      <!-- <img src={profilePic} alt="" /> -->
    {/if}
    {#if user}
      <div class="text">
        <h3>{user.name || "Søren"}</h3>
        <p>{user.username || "søren69420"}</p>
      </div>
    {:else}
      <h3>{"Søren"}</h3>
      <p>{"søren69420"}</p>
    {/if}
  </div>

  <div class="more">
    <i on:click={logout} class="fa-solid fa-arrow-right-from-bracket" />
  </div>
</div>

<style>
  .content {
    display: flex;
    justify-content: space-between;
    background: var(--bg2);
    border-radius: 15px;
    width: 100%;
    border: solid 1px var(--text1);
    align-items: center;
    padding: 0.8rem 1rem;
    height: 80px;
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .info {
    display: flex;
    gap: 1rem;
  }
  .more {
    display: flex;
    align-content: start;
    height: 100%;
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: solid 1px var(--text1);
  }
  p {
    color: var(--text2);
    font-size: 0.9rem;
  }
  h3 {
    color: var(--text1);
    font-weight: 500;
    font-size: 1.1rem;
  }
  i {
    cursor: pointer;
  }
</style>
