import axios from "axios";
import goToPath from "../services/goToPath";

export default async function deleteItem(importData: object): Promise<object> {
  return axios
    .delete("", {
      params: {
        ...importData,
      },
    })
    .then((res) => {
      if (res.status == 200) {
        return { success: true, error: null };
      } else {
        return { success: false, error: res.data };
      }
    })
    .catch((err) => {
      return { success: false, error: err };
    });
}
