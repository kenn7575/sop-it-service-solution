import axios from "axios";
import { navigate } from "svelte-routing";
import { path } from "../stores/pathStore";

export default function createItem(table, importData, redirect) {
  axios
    .post("upsert_data.php", { data: importData, table: table })
    .then((res) => {
      if (res.data == true) {
        alert("Oprettet i databasen!");
        navigate(redirect);
        path.update(() => {
          return redirect;
        });
      } else {
        alert("Ukendt fejl! Indholdet er ikke oprettet.");
      }
    })
    .catch((err) => {
      alert("Felf! " + err);
    });
}
