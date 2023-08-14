import axios from "axios";

export default async function getData(table: string, UUID?: number) {
  const res = await axios
    .get("", {
      params: { table: table, UUID: UUID },
    })
    .catch((err) => {
      alert("Ukendt fejl " + err);
    });
  const data = res.data;
  return data;
}
