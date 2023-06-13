import axios from "axios";

export async function getData(table, UUID) {
  var { data } = await axios.get("", { params: { table: table, UUID: UUID } });

    return data;
}