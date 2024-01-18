import axios from "axios";
import doesObjectsMatch from "../services/doesObjectsMatch";

export default async function createItem(table: string, exportData: any) {
  try {
    const { data } = await axios
      .post(
        "",
        { data: { ...exportData } },
        {
          params: {
            table,
          },
        }
      )
      .catch((err) => {
        alert("Fejl! " + err);
        console.log("Error: ", err);
        return { success: false, data: err, id: null };
      });

    data.success = true;

    return data;
  } catch (err) {
    alert("Application crashed: " + err);
  }
}
