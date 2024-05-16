import axios from "axios";

export default async function getData(table: string, UUID?: number) {
  const { data } = await axios
    .get(table + (UUID ? "/" + UUID : ""))
    .catch((err) => {
      if (err.response.status == 401)
        return { success: false, data: "Du er ikke logget ind" };
      alert("Ukendt fejl " + err);
      return { success: false, data: err };
    });

  return data;
}
