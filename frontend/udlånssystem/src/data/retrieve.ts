import axios from "axios";

export default async function retrieveItem(table, UUID): Promise<object> {
  let { data } = await axios.get("get_data.php", {
    params: { table: table, UUID: UUID },
  });
  return data;
}
