import { useNavigate, useParams } from 'react-router-dom';

import createItem from '@data/create';

import EditLayout from '@layouts/edit';
import { toast } from 'sonner';

import { fields, zodSchema } from './util';

export default function Edit() {
  const { id } = useParams();

  const navigate = useNavigate();

  async function handleCreateNewProduct(product_id?: number | string) {
    if (!product_id || isNaN(Number(product_id))) return;

    const item = { product_id } as itemModel;

    toast.promise(createItem('items', item), {
      loading: 'Gemmer...',
      success: (res) => {
        navigate(`/produkter/${res.id}`);
        return 'Gemt';
      },
      error: (err) => 'Fejl: ' + err,
    });
  }
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
