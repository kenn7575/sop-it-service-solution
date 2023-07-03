import doesObjectsMatch from "../services/doesObjectsMatch";
import axios from "axios";
export default async function updateItem(
  importData: object,
  exportData: any, //typescript class instance with validateUpdate() method
  table: string
): Promise<object> {
  if (doesObjectsMatch(importData, exportData)) {
    alert("Ingen ændringer");
    return { success: false, data: "No changes", id: null };
  }
  if (!exportData.validateUpdate()) {
    return { success: false, data: "Data not valid", id: null };
  }
  console.log("Updating " + table + " with data: ", { ...exportData });
  const { data } = await axios
    .post("upsert_data.php", { data: { ...exportData }, table: table })
    .then((res: any) => {
      console.log("Response: ", res);
      if (res?.success) {
        return res;
      } else {
        return res;
      }
    })
    .catch((err) => {
      alert("Felf! " + err);
      console.log("Error: ", err);
      return { success: false, data: err, id: null };
    });
  console.log("Data return: ", data);
  return data;
}
