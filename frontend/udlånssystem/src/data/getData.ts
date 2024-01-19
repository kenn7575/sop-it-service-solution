import axios from "axios";

export default async function getData(table: string, UUID?: number) {
  const { data } = await axios
    .get(table, {
      params: { UUID: UUID },
    })
    .catch((err) => {
      alert("Ukendt fejl " + err);
      return { success: false, data: err };
    });

  return data;
}
