import axios from "axios";
import { navigate } from "svelte-routing";
import type { P } from "vitest/dist/types-b7007192";
import { path } from "../stores/pathStore";

export default async function deleteItem(
  destination: string,
  importData: object,
  redirect: string
): Promise<boolean> {
  if (confirm("Er du sikker på at du vil slette denne bruger?")) {
    return axios
      .post(destination, importData)
      .then((res) => {
        console.log(res.data);
        if (res.data == true) {
          alert("Slettet fra databasen.");
          path.set(redirect);
          navigate(redirect);
          return true;
        } else {
          alert("Ukendt fejl! Indholdet blev ikke slettet.");
          return false;
        }
      })
      .catch((err) => {
        alert("Fejl! " + err);
        return false;
      });
  }
}
