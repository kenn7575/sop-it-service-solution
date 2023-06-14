<script>
  import profilePic from "../../../../mappePaaServeren/profile.png";
  import { currentUser } from "../services/login";

  $: user = $currentUser;
</script>

<div class="content">
  <div class="info">
    <img src={user.img_name ? `../../../../mappe_på_serveren/${user.img_name}.png` : profilePic} alt="profilePic" />
    <div class="text">
      <h3>{user.name || "Søren"} </h3>
      <p>{user.username || "søren69420"}</p>
    </div>
  </div>

  <div class="more">
    <i class="fa-solid fa-ellipsis-vertical" />
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
</style>
