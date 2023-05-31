<script>
  $: username = "";
  $: password = "";

  import axios from "axios";
  function login(e) {
    e.preventDefault();
    axios
      .post("/login.php", { username: username, password: password })
      .then((res) => {
        if (res.data.access_token) {
          localStorage.setItem("token", res.data.access_token);
          window.location.href = "/";
        }
      });
  }
</script>

<form
  action="
"
>
  <div class="input-group">
    <label for="username">Brugernavn</label>
    <input
      bind:value={username}
      type="text"
      id="username"
      name="username"
      placeholder="Brugernavn"
    />
  </div>
  <div class="input-group">
    <label for="password">Kodeord</label>
    <input
      bind:value={password}
      type="password"
      id="password"
      name="password"
      placeholder="Kodeord"
    />
    <input id="submit" type="submit" value="Log ind" />
  </div>
</form>

<style>
  .input-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: stretch;
    width: 100%;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
  }
  input#username,
  input#password {
    width: 100%;
    margin: 0.5rem 0.5rem 0.5rem 0;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    outline: 1px solid var(--bg2);
    border: solid 3px var(--bg2);
    transition: border 0.1s ease-in-out;
    border-radius: 10px;
    color: var(--text1);
    background: var(--bg2);
  }

  input#username:focus,
  input#password:focus {
    border: 3px solid var(--p) !important;
  }
  #submit {
    width: 6rem;
    height: 2.5rem;
    background: transparent;
    color: var(--text1);
    border-radius: 15px;
    border: none;
    outline: solid 3px var(--p);
    transition: background 0.1s ease-in-out;
    margin-top: 20px;
    font-weight: 600;
  }
  #submit:focus,
  #submit:hover {
    background: var(--p);
    color: #fff;
  }
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: var(--text2);
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: var(--text2);
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: var(--text2);
  }
</style>
