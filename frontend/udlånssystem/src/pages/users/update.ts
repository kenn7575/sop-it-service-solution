import doesObjectsMatch from "../../services/doesObjectsMatch";
import axios from "axios";
import type { UserModel } from "../../types/userModel";
export default async function updateItem(
  importData: object,
  exportData: UserModel,
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
  delete exportData.password;
  console.log("Updating " + table + " with data: ", { ...exportData });

  return await axios
    .post("upsert_user.php", { data: { ...exportData }, table: table })
    .then((res) => {
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
