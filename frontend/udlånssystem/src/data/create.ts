import axios from "axios";
import goToPath from "../services/goToPath";

export default async function createItem(
  table: string,
  importData: object,
  redirect: string
) {
  return axios
    .post("upsert_data.php", { data: { ...importData }, table: table })
    .then((res) => {
      if (res.data == true) {
        alert("Oprettet i databasen!");
        goToPath(redirect);
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
