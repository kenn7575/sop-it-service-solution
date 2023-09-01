import axios from "axios";
import doesObjectsMatch from "../services/doesObjectsMatch";

export default async function createItem(table: string, exportData: any) {
  try {
    const { data } = await axios
      .post("upsert_data.php", { data: { ...exportData }, table: table })
      .then((res: any) => {
        if (res?.success) {
          return res;
        } else {
          return res;
        }
      })
      .catch((err) => {
        alert("Fejl! " + err);
        console.log("Error: ", err);
        return { success: false, data: err, id: null };
      });

    data.id = data?.data;
    return data;
  } catch (err) {
    alert("Application crashed: " + err);
  }
}
