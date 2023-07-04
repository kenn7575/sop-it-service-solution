import axios from "axios";
import goToPath from "../services/goToPath";

export default async function deleteItem(
  destination: string,
  importData: object,
  redirect: string
): Promise<object> {
  if (
    confirm("Er du sikker på at du vil slette dette indhold fra databasen?")
  ) {
    return axios
      .post(destination, importData)
      .then((res) => {
        console.log(res.data);
        if (res.data == true) {
          return { success: true, error: null };
        } else {
          return { success: false, error: res.data };
        }
      })
      .catch((err) => {
        return { success: false, error: err };
      });
  }
}
