export const fields: Field<zoneModel>[] = [
  {
    label: 'Navn',
    binding: 'name',
    type: 'text',
  },
  {
    label: 'Bygning',
    binding: 'building_id',
    type: 'select',
    options: 'buildings',
  },
  {
    label: 'Etage',
    binding: 'floor_level',
    type: 'number',
  },
];
