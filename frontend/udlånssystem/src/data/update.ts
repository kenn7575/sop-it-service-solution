import doesObjectsMatch from "../services/doesObjectsMatch";
import axios from "axios";

export default async function updateItem(
  exportData: any, //typescript class instance with validateUpdate() method
  table: string
): Promise<object> {
  try {
    console.log("Updating " + table + " with data: ", { ...exportData });
    const { data } = await axios
      .post("upsert_data.php", { data: { ...exportData }, table: table })
      .then((res: any) => {
        console.log("Response: ", res);
        return res;
      })
      .catch((err) => {
        alert("Felf! " + err);
        console.log("Error: ", err);
        return { success: false, data: err, id: null };
      });
    console.log("Data return: ", data);
    return data;
  } catch (error) {
    alert("Application crashed: " + error);
  }
}
