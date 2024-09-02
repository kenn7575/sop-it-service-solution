import { useEffect, useState } from 'react';

import useData from '@hooks/useData';

import { Combobox } from './Combobox';

interface LocationSelectorProps {
  zone: zoneModel | undefined;
  setZone: (zone: zoneModel | undefined) => void;
}

export default function LocationSelector({
  zone,
  setZone = () => {},
}: LocationSelectorProps) {
  const [locations] = useData<any>('locations');

  const [building, setBuilding] = useState<any>(undefined);

  useEffect(() => {
    setZone(undefined);
  }, [building]);

  return (
    <div className="flex gap-3">
      <Combobox
        label="Bygning"
        setValue={setBuilding}
        match={building ? { ...building } : undefined}
        options={locations}
      />
      {building && (
        <Combobox
          label="Zone"
          setValue={setZone}
          match={zone ? { ...zone } : undefined}
          options={building.zones}
        />
      )}
    </div>
  );
}
