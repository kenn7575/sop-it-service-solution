import axios from 'axios';
import { toast } from 'sonner';

export default async function createItem<T = any>(
  table: string,
  newData: any,
): Promise<T> {
  try {
    const { data }: { data: T } = await axios.post(table, {
      data: { ...newData },
    });

    return data;
  } catch (err) {
    toast.error('Fejl! ' + err);
    throw err;
  } finally {
  }
}
