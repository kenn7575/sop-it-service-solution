import axios from 'axios';
import { toast } from 'sonner';

export default async function createItem(table: string, exportData: any) {
  try {
    const { data } = await axios
      .post(table, { data: { ...exportData } })
      .catch((err) => {
        toast.error('Fejl! ' + err);
        console.log('Error: ', err);
        return { success: false, data: err, id: null };
      });

    data.success = true;

    return data;
  } catch (err) {
    toast.error('Application crashed: ' + err);
  }
}
