import axios from "axios";
import { navigate } from "svelte-routing";
import { path } from "../stores/pathStore";

export default function deleteItem(destination, importData, redirect) {
  if (confirm("Er du sikker på at du vil slette denne bruger?")) {
    axios.post(destination, importData).then((res) => {
      console.log(res.data);
      if (res.data == true) {
        alert("Slettet fra databasen.");
        path.set(redirect);
        navigate(redirect);
      } else {
        alert("Ukendt fejl! Indholdet blev ikke slettet.");
      }
    });
  }
}
