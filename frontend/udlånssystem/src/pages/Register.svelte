<script>
  $: username = "";
  $: password = "";
  $: email = "";
  $: name = "";
  $: address = "";
  $: city = "";

  import axios from "axios";
  function login(e) {
    // console.log("is thsi running?");
    e.preventDefault();
    // axios
    //   .post("/login.php", { username: username, password: password })
    //   .then((res) => {
    //     if (res.status === 403) {
    //       alert("Forkert brugernavn eller adgangskode");
    //     }
    //     console.log(res);
    //     if (res.data.access_token) {
    //       localStorage.setItem("token", res.data.access_token);
    //       window.location.href = "/";
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    console.log("is this running?");
    fetch("http://172.16.3.135:5000/login.php", {
      method: "post",
      headers: {
        username: username,
        password: password,
      },
    })
      .then((response) => {
        console.log(response);
        response.json();
      })
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }
</script>

<form on:submit={login}>
  <div class="center-column">
    <h1>Er du ny her?</h1>
    <p>...så lad os da få oprettet dig</p>
  </div>

  <div class="question">
    <input
      bind:value={username}
      class="text"
      type="text"
      name="username"
      required
    />
    <label>Uni-login</label>
  </div>
  <div class="question">
    <input
      bind:value={password}
      class="text"
      type="password"
      name="password"
      required
    />
    <label>Adgangskode</label>
  </div>
  <div class="question">
    <input bind:value={email} class="text" type="text" name="email" required />
    <label>Email</label>
  </div>
  <div class="question">
    <input bind:value={name} class="text" type="text" name="name" required />
    <label>Fulde navn</label>
  </div>
  <div class="question">
    <input
      bind:value={address}
      class="text"
      type="text"
      name="address"
      required
    />
    <label>adresse</label>
  </div>
  <div class="question">
    <input bind:value={city} class="text" type="text" name="City" required />
    <label>By</label>
  </div>
  <div class="center">
    <button>Submit</button>
  </div>
</form>

<style>
  .transition,
  form button,
  form .question label,
  form .question input.text {
    -moz-transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
    -o-transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
    -webkit-transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
    transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
  }

  * {
    font-weight: 800;
    -webkit-font-smoothing: antialiased;
  }

  html {
    background-color: var(--s);
  }
  .center {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .center-column {
    width: 100%;
    display: flex;

    flex-direction: column;
    align-items: center;
  }
  form {
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    max-width: 700px;
    max-height: 100%;
    box-sizing: border-box;
    overflow-y: auto;
    background: transparent;
    border-radius: 40px;
    margin: 20px 0;
    left: 50%;
    -moz-transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
  }
  form h1 {
    color: #303033;
    font-weight: 400;
    letter-spacing: 0.01em;
    margin-bottom: 5px;
  }
  form p {
    color: #8f9192;
    font-weight: 400;
    letter-spacing: 0.01em;
    margin-bottom: 15px;
  }
  form button {
    margin-top: 35px;
    background-color: #fff;
    border: 1px solid var(--s);
    line-height: 0;
    font-size: 17px;
    display: inline-block;
    box-sizing: border-box;
    padding: 20px 15px;
    border-radius: 60px;
    color: var(--s);
    font-weight: 300;
    letter-spacing: 0.01em;
    position: relative;
    z-index: 1;
  }
  form button:hover,
  form button:focus {
    color: #fff;
    background-color: var(--s);
  }
  form .question {
    position: relative;
    padding: 10px 0;
  }
  form .question:first-of-type {
    padding-top: 0;
  }
  form .question:last-of-type {
    padding-bottom: 0;
  }
  form .question label {
    transform-origin: left center;
    color: var(--s);
    font-weight: 300;
    letter-spacing: 0.01em;
    font-size: 17px;
    box-sizing: border-box;
    padding: 10px 15px;
    display: block;
    position: absolute;
    margin-top: -40px;
    z-index: 2;
    pointer-events: none;
  }
  form .question input.text {
    appearance: none;
    background-color: none;
    border: 1px solid var(--s);
    line-height: 0;
    font-size: 17px;
    width: 100%;
    display: block;
    box-sizing: border-box;
    padding: 10px 15px;
    border-radius: 60px;
    color: var(--s);
    font-weight: 500;
    letter-spacing: 0.01em;
    position: relative;
    z-index: 1;
  }
  form .question input.text:focus {
    outline: none;
    background: var(--s);
    color: #fff;
    margin-top: 30px;
  }
  form .question input.text:valid {
    margin-top: 30px;
  }
  form .question input.text:focus ~ label {
    -moz-transform: translate(0, -35px);
    -ms-transform: translate(0, -35px);
    -webkit-transform: translate(0, -35px);
    transform: translate(0, -35px);
  }
  form .question input.text:valid ~ label {
    text-transform: uppercase;
    font-style: italic;
    -moz-transform: translate(5px, -35px) scale(0.7);
    -ms-transform: translate(5px, -35px) scale(0.7);
    -webkit-transform: translate(5px, -35px) scale(0.7);
    transform: translate(5px, -35px) scale(0.7);
  }
</style>
