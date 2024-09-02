import { Input } from '@/components/ui/input';
import type { Column, Table } from '@tanstack/react-table';

export default function Filter({
  column,
  table,
}: {
  column: Column<any, any>;
  table: Table<any>;
}) {
  const columnFilterValue = column.getFilterValue();

  return (
    <Input
      className="my-2 h-fit rounded border py-1 shadow"
      onChange={(e) => {
        column.setFilterValue(e.target.value);
      }}
      onClick={(e) => e.stopPropagation()}
      placeholder="Søg..."
      type="text"
      value={(columnFilterValue ?? '') as string}
      disabled={!column.getCanFilter()}
    />
  );
}
