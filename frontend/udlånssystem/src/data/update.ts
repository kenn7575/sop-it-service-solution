import axios from "axios";

export default async function updateItem(
  table: string,
  UUID: number,
  exportData: any //typescript class instance with validateUpdate() method
): Promise<object> {
  try {
    const { data } = await axios
      .patch(table + "/" + UUID, { data: { ...exportData } })
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
