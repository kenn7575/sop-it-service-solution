<script>
  import img from "../assets/user.png";
</script>

<div class="content">
  <div class="user">
    <img src={img} alt="" />
  </div>
  <div class="input">
    <input placeholder="Quick Search" type="text" />
    <i class="fa-solid fa-magnifying-glass" />
  </div>
</div>

<style>
  .content {
    padding: 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
  .user {
    display: flex;
    justify-content: start;
    width: 100%;
  }
  img {
    width: 45px;
    border-radius: 50%;
  }
  input {
    width: 100%;
    height: 43px;
    border-radius: 7px;
    background-color: #fff9;
    border: none;
    padding-left: 2.8rem;
    font-size: 1rem;
  }
  input:focus {
    padding-right: 0.5rem;
  }
  .input {
    position: relative;
    width: 100%;
  }
  i {
    font-size: 2rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 5px;
  }
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #fff;
    font-weight: 200;
  }
  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #fff;
    font-weight: 200;
  }
</style>
