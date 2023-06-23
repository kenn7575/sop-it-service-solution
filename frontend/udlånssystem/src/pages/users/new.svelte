<script lang="ts">
  import DropZone from "../../components/drop-zone.svelte";
  import { onMount } from "svelte";
  import type { UserModel } from "../../types/userModel";
  import validateInputs from "../../services/validateInputs.js";
  import { getData } from "../../data/data";
  import axios from "axios";
  import { path } from "../../stores/pathStore";
  import { navigate } from "svelte-routing";

  //the picture to be uploaded
  let picture;

  //imported Data
  let roles = [];
  let educations = [];

  let new_name;
  let new_username;
  let new_password;
  let new_mail;
  let new_address_line_1;
  let new_address_line_2;
  let new_city;
  let new_postal_code;
  let new_role_id;
  let new_education_id;

  //get all data
  onMount(async () => {
    try {
      roles = await getData("roles_view").then((res) => {
        new_role_id = res[0].UUID;

        return res;
      });

      educations = await getData("educations").then((res) => {
        new_education_id = res[0].UUID;
        return res;
      });
    } catch (error) {
      console.log(error);
    }
  });

  function handleCreate() {
    if (!validateInputs()) {
      alert("Udfyld alle felter");
      return;
    }
    let userToBeCreated: UserModel = {
      UUID: null,
      name: new_name,
      username: new_username,
      mail: new_mail,
      img_name: picture,
      password: new_password,
      address_id: {
        UUID: null,
        address_line_1: new_address_line_1,
        address_line_2: new_address_line_2,
        city: new_city,
        postal_code: new_postal_code,
      },
      role_id: new_role_id,
      education_id: new_education_id,
    };
    console.log(userToBeCreated);
    axios
      .post("upsert_user.php", userToBeCreated)
      .then((res) => {
        if (res.data == true) {
          alert("Bruger Oprettet.");
          navigate("/brugere");
          path.update(() => {
            return "/brugere";
          });
        } else {
          alert("Ukendt fejl! Bruger ikke opdateret");
        }
        //tell the user that the user was updated
      })
      .catch((err) => {
        alert("Felf! " + err);
      });
  }

  function clearPicture() {
    picture = "";
  }
  function handleFileDrop(event) {
    picture = event.detail;
  }
  function handleSubmit(event) {
    event.preventDefault();
    handleCreate();
  }
</script>

<div class="content">
  <div class="control-panel">
    <img
      src={picture
        ? picture
        : "https://img.freepik.com/free-icon/user_318-563642.jpg"}
      alt="Profile picture"
    />
    {#if picture}
      <button id="clear-picture" on:click={clearPicture}
        ><i class="fa-solid fa-trash" /></button
      >
    {/if}

    <div class="buttons">
      <button
        on:click={() => {
          console.log("Annuler!");
        }}>Annuller</button
      >

      <button on:click={handleCreate}>Opret</button>
    </div>

    <DropZone on:message={handleFileDrop} />
  </div>

  <div class="form">
    <form on:submit={handleSubmit} id="user-form">
      <div class="question">
        <label for="a2">Navn <span class="required-tag">*</span></label>
        <input
          id="a2"
          autocomplete="off"
          bind:value={new_name}
          class="text"
          type="text"
          required
        />
      </div>

      <div class="question">
        <label for="a4">Uni-login <span class="required-tag">*</span></label>
        <input
          id="a4"
          autocomplete="off"
          bind:value={new_username}
          class="text"
          type="text"
          required
        />
      </div>
      <div class="question">
        <label for="a4">Adgangskode<span class="required-tag">*</span></label>
        <input
          id="a4"
          autocomplete="off"
          bind:value={new_password}
          class="text"
          type="password"
          required
        />
      </div>
      <div class="question">
        <label for="a5">E-mail <span class="required-tag">*</span></label>
        <input
          id="a5"
          autocomplete="off"
          bind:value={new_mail}
          class="text"
          type="text"
          required
        />
      </div>

      <div class="question">
        <label for="a6">Vejnavn <span class="required-tag">*</span></label>
        <input
          id="a6"
          autocomplete="off"
          bind:value={new_address_line_1}
          class="text"
          type="text"
          required
        />
      </div>
      <div class="question">
        <label for="a7">Etage mm.</label>
        <input
          id="a7"
          autocomplete="off"
          bind:value={new_address_line_2}
          class="text"
          type="text"
        />
      </div>
      <div class="question">
        <label for="a8">By <span class="required-tag">*</span></label>
        <input
          id="a8"
          autocomplete="off"
          bind:value={new_city}
          class="text"
          type="text"
          required
        />
      </div>
      <div class="question">
        <label for="a9">Postnummer <span class="required-tag">*</span></label>
        <input
          autocomplete="off"
          bind:value={new_postal_code}
          class="text"
          id="a9"
          type="number"
          required
        />
      </div>
      <div class="question">
        <label for="a10">Bruger rolle <span class="required-tag">*</span></label
        >
        {#if roles}
          <select id="a10" required form="user-form" bind:value={new_role_id}>
            {#each roles as role}
              <option value={role.UUID}>{role.name}</option>
            {/each}
          </select>
        {/if}
      </div>

      <div class="question">
        <label for="a11">Uddannelse<span class="required-tag">*</span></label>

        <select
          id="a11"
          required
          form="user-form"
          bind:value={new_education_id}
        >
          {#each educations as education}
            <option value={education.UUID}>{education.name}</option>
          {/each}
        </select>
      </div>
    </form>
  </div>
</div>

<style>
  .content {
    height: 100%;
    box-sizing: border-box;
    padding: 2rem;
    display: flex;
    gap: 1rem;
  }
</style>
