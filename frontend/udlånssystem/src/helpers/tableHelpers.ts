import type { ColumnDef } from '@tanstack/react-table';

import { dateToReadable } from './dateHelpers';

export const dateColumns = [
  'Oprettet',
  'Opdateret',
  'Returneret',
  'Returneringsdato',
];

function EnableFilter(header: string) {
  if (dateColumns.includes(header)) return false;
  if (header == 'UUID') return false;

  return true;
}

export function columnsFormatter<T>(headers?: string[]) {
  if (!headers) return;

  const columns: ColumnDef<T, any>[] = headers.map((header) => ({
    header: header.replaceAll('_', ' '),
    accessorKey: String(header),
    enableColumnFilter: EnableFilter(header),
    cell: (row) => {
      if (dateColumns.includes(header)) return dateToReadable(row.getValue());

      return row.getValue();
    },
  }));

  return columns;
}

export function getLongestWordLength(words: string[]) {
  return words.reduce((longest, word) => {
    return word.length > longest ? word.length : longest;
  }, 0);
}
