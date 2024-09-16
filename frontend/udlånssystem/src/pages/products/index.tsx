import { useState } from 'react';

import { Label } from '@components/ui/label';
import { Switch } from '@components/ui/switch';

import Layout from '@layouts/index';

export default function Index() {
  const [table, setTable] = useState('items_without_status');

  function handleChange() {
    setTable((prev) =>
      prev === 'items_without_status'
        ? 'items_with_status'
        : 'items_without_status',
    );
  }

  return (
    <>
      <div className="absolute right-[5rem] top-4 flex items-center gap-2">
        <Label htmlFor="toggleItems">Vis slettede produkter</Label>
        <Switch id="toggleItems" onCheckedChange={handleChange} />
      </div>

      <Layout table={table} />
    </>
  );
}
