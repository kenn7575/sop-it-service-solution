import doesObjectsMatch from "../services/doesObjectsMatch";
import axios from "axios";

export default async function updateItem(
  exportData: any, //typescript class instance with validateUpdate() method
  table: string
): Promise<object> {
  try {
    const { data } = await axios
      .patch(
        "",
        { data: { ...exportData } },
        {
          params: {
            table,
            UUID: exportData.UUID,
          },
        }
      )
      .then((res: any) => {
        res.id = res.data;
        return res;
      })
      .catch((err) => {
        alert("Fejl! " + err);
        return { success: false, data: err, id: null };
      });

    data.success = true;

    return data;
  } catch (error) {
    alert("Application crashed: " + error);
  }
}
