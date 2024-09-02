import LocationSelector from '@components/LocationSelector';
import DatePicker from '@components/datePicker';

import { loanTypes } from '.';

interface NewLoanInfoProps {
  setReturnDate: (returnDate: Date | null) => void;
  returnDate: Date | null;
  setLoanType: (loanType: (typeof loanTypes)[number]['id']) => void;
  locationOfUse: zoneModel | undefined;
  setLocationOfUse: React.Dispatch<React.SetStateAction<zoneModel | undefined>>;
}

export default function NewLoanInfo({
  setReturnDate,
  returnDate,
  setLoanType,
  locationOfUse,
  setLocationOfUse,
}: NewLoanInfoProps) {
  let minDate = new Date();
  let maxDate = new Date();
  maxDate.setMonth(minDate.getMonth() + 6);

  function isMaxDate(date: Date | null) {
    if (!date) return '';

    const date1 = date?.setHours(0, 0, 0, 0);
    const date2 = maxDate.setHours(0, 0, 0, 0);

    if (date1 === date2) return 'is-max';

    return '';
  }

  return (
    <div className="grid">
      <div className="grid-item g1">
        <h4>Retur dato</h4>
        <hr />
        <div className="btn-group">
          <DatePicker
            onChange={setReturnDate}
            selected={returnDate}
            maxDate={maxDate}
            dateFormat={'dd-MM-yyy'}
            minDate={minDate}
            disabled={returnDate === null}
            className="bg-base-200 p-[4px_6px] text-foreground"
          />
          <button
            onClick={() => {
              setReturnDate(maxDate);
            }}
            className={'max-time-btn ' + isMaxDate(returnDate)}
            disabled={returnDate === null}
          >
            Max
          </button>
          <button
            className={'max-time-btn' + (returnDate === null ? ' is-max' : '')}
            onClick={() => {
              if (returnDate) setReturnDate(null);
              else setReturnDate(new Date());
            }}
          >
            Uendeligt
          </button>
        </div>
      </div>
      <div className="grid-item g2">
        <h4>Låner type</h4>
        <hr />
        <select
          onChange={(e) => {
            setLoanType(parseInt(e.target.value));
          }}
        >
          {loanTypes.map((type, i) => (
            <option key={i} value={type.id}>
              {type.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid-item g3">
        <h4>Lokalitet</h4>
        <hr />
        <LocationSelector setZone={setLocationOfUse} zone={locationOfUse} />
      </div>
      {/* {#if products.some((p) => p.Kategori_Gruppe == "Laptop")}
          <table className="grid-item g4 w-2/3">
            <tr className="">
              <th className="w-3/4 text-left"><h4>Ekstra info</h4></th>
              <th><h4>Taske</h4></th>
              <th><h4>Lås</h4></th>
            </tr>

            <hr />
            {#each products.filter((p) => p.Kategori_Gruppe == "Laptop") as laptop}
              <tr>
                <td><p>{laptop.Navn} [#{laptop.UUID}]</p></td>

                <td>
                  <input
                    id="taske"
                    bind:checked={laptop.withBag}
                    type="checkbox"
                  />
                </td>
                <td>
                  <input
                    id="laas"
                    bind:checked={laptop.withLock}
                    type="checkbox"
                  />
                </td>
              </tr>
            {/each}
          </table>
        {/if} */}
    </div>
  );
}
