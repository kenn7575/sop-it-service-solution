import axios from "axios";

export default async function getData(table: string, UUID?: number) {
  const { data } = await axios
    .get("", {
      params: { table: table, UUID: UUID },
    })
    .catch((err) => {
      alert("Ukendt fejl " + err);
      return { success: false, data: err };
    });

  return data;
}
