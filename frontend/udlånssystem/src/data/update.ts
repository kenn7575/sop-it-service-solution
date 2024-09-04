import axios from 'axios';
import { toast } from 'sonner';

export default async function updateItem(
  table: string,
  UUID: number,
  exportData: any,
): Promise<object> {
  const { data } = await axios
    .patch(table + '/' + UUID, { data: { ...exportData } })
    .then((res: any) => {
      res.id = res.data;
      return res;
    });

  return data;
}
