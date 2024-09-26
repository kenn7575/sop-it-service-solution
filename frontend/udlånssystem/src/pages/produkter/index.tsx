import { useState } from 'react';

import { Label } from '@components/ui/label';
import { Switch } from '@components/ui/switch';

import useData from '@hooks/useData';

import Layout from '@layouts/index';

export default function Index() {
  const [withStatus, setWithStatus] = useState(false);

  const [itemsView] = useData<itemsView[]>('items_view', {
    withHeaders: true,
  });

  function filterWithStatus(): DataWithHeaders<itemsView[]> {
    if (!itemsView)
      return [{ data: [], headers: [] }] as unknown as DataWithHeaders<
        itemsView[]
      >;

    const filtered = itemsView.data.filter((item) => item.Status);

    return {
      data: filtered,
      headers: itemsView.headers,
    };
  }

  function filterWithoutStatus(): DataWithHeaders<itemsView[]> {
    if (!itemsView)
      return [{ data: [], headers: [] }] as unknown as DataWithHeaders<
        itemsView[]
      >;

    const filtered = itemsView.data.filter((item) => !item.Status);
    const newHeaders = itemsView.headers.filter(
      (header) => header !== 'Status',
    );

    return {
      data: filtered,
      headers: newHeaders,
    };
  }

  function handleChange() {
    setWithStatus((prev) => !prev);
  }

  return (
    <>
      <div className="absolute right-[5rem] top-4 flex items-center gap-2">
        <Label htmlFor="toggleItems">Vis slettede produkter</Label>
        <Switch id="toggleItems" onCheckedChange={handleChange} />
      </div>

      <Layout table={withStatus ? filterWithStatus() : filterWithoutStatus()} />
    </>
  );
}
