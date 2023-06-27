import axios from "axios";
import { navigate } from "svelte-routing";
import { path } from "../stores/pathStore";

export default async function createItem(
  table: string,
  importData: object,
  redirect: string
) {
  return axios
    .post("upsert_data.php", { data: importData, table: table })
    .then((res) => {
      if (res.data == true) {
        alert("Oprettet i databasen!");
        navigate(redirect);
        path.set(redirect);
        return true;
      } else {
        alert("Ukendt fejl! Indholdet er ikke oprettet.");
        return false;
      }
    })
    .catch((err) => {
      alert("Felf! " + err);
      return false;
    });
}
