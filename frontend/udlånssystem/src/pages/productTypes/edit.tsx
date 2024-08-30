// import goToPath from '@services/goToPath';
import { Navigate } from 'react-router-dom';

import createItem from '@data/create';

import EditLayout from '@layouts/edit';
import { toast } from 'sonner';

import { fields, zodSchema } from './util';

export let id: number;

async function handleCreateNewProduct(product_id: number) {
  const item = { product_id } as itemModel;

  const response: any = await createItem('items', item);
  if (response && response.success) {
    toast.success('Gemt');
    Navigate({ to: `/produkter/${response.id}` });
  }
}

export default function Edit() {
  return (
    <EditLayout
      table="products"
      fields={fields}
      zodSchema={zodSchema}
      formSlot={
        <button
          type="button"
          onClick={() => {
            handleCreateNewProduct(id);
          }}
          className="h-8 w-full min-w-8 rounded-[10px] border-[1px] border-solid bg-transparent text-[color:var(--text1)]"
        >
          Tilføj nyt produkt ud fra produkttype
        </button>
      }
    />
  );
}
