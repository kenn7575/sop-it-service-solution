import axios from "axios";

export async function getData(table) {
  var { data } = await axios.get("", { params: { table: table } });

    return data;
}