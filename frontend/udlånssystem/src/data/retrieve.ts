import axios from "axios";

export default async function getData(table: string, UUID?: number) {
  var { data } = await axios.get("", {
    params: { table: table, UUID: UUID },
  });
  return data;
}
