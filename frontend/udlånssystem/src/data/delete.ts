import axios from 'axios';

export default async function deleteItem(
  table: string,
  UUID: number,
): Promise<object> {
  return axios.delete(`${table}/${UUID}`);
}
