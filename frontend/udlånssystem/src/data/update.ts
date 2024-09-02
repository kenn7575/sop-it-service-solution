import axios from 'axios';
import { toast } from 'sonner';

export default async function updateItem(
  table: string,
  UUID: number,
  exportData: any,
): Promise<object> {
  try {
    const { data } = await axios
      .patch(table + '/' + UUID, { data: { ...exportData } })
      .then((res: any) => {
        res.id = res.data;
        return res;
      })
      .catch((err) => {
        toast.error('Fejl! ' + err);
        return { success: false, data: err, id: null };
      });

    data.success = true;

    return data;
  } catch (error) {
    toast.error('Application crashed: ' + error);
    return { success: false, data: error, id: null };
  }
}
