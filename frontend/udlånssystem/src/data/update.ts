import doesObjectsMatch from "../services/doesObjectsMatch";
import axios from "axios";
export default async function updateItem(
  importData: object,
  exportData: any, //typescript class instance with validateUpdate() method
  table: string
): Promise<boolean> {
  if (doesObjectsMatch(importData, exportData)) {
    alert("Ingen ændringer");
    return false;
  }
  if (!exportData.validateUpdate()) {
    alert("Udfyld alle felter");
    return false;
  }
  console.log("Updating " + table + " with data: ", {...exportData});
  return await axios
    .post("upsert_data.php", { data: {...exportData}, table: table })
    .then((res) => {
      console.log("Response: ", res);
      if (res.data == true) {
        alert("Opdateret");
        return true;
      } else {
        alert("Ukendt fejl! Indholdet er ikke opdateret");
        return false;
      }
    })
    .catch((err) => {
      alert("Felf! " + err);
      return false;
    });
}
