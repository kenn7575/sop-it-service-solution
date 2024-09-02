import { Link, useParams } from 'react-router-dom';

import useData from '@hooks/useData';

import EditLayout from '@layouts/edit';

import { LoanHistory, fields, zodSchema } from './util';

import '@styles/productsEdit.css';

interface itemModelWithItemsInLoan extends itemModel {
  items_in_loan: itemInLoanModel[];
}

export default function Edit() {
  const { id } = useParams();
  const [item] = useData<itemModelWithItemsInLoan>('items', undefined, id);
  const [itemInLoan] = useData<itemInLoanModel[]>(
    'items_in_loan?item_id=' + id,
    { withHeaders: false },
  );

  if (!item) return null;

  let loanText = item.product_status_id === 1 ? 'Opret lån' : 'Gå til lån';
  let to = item.product_status_id === 1 ? '/udlaan/new?item=' + id : '';

  if (itemInLoan && itemInLoan.length > 0 && !itemInLoan[0]?.date_returned) {
    to = '/udlaan/' + itemInLoan[0].loan_id;
  }

  return (
    <EditLayout
      table="items"
      fields={fields}
      zodSchema={zodSchema}
      editPanelSlot={
        <>
          <div className="flex flex-col items-center gap-3 overflow-hidden">
            <h1>Lånehistorik:</h1>
            {item?.items_in_loan?.length > 0 ? (
              <ul className="loanHistoryList">
                {item?.items_in_loan
                  .reverse()
                  .map((item: itemModel | any, i: number) => {
                    const loanHistory = new LoanHistory(item);
                    return (
                      <Link
                        key={i}
                        className={`${loanHistory.isActive()} loanHistoryItem`}
                        to={`/udlaan/${item.loan_id}`}
                      >
                        <p>{loanHistory.date()}</p>
                        <p>{loanHistory.time()}</p>
                        <p>{loanHistory.user()}</p>
                      </Link>
                    );
                  })}
              </ul>
            ) : (
              <p>Ingen lånehistorik</p>
            )}
          </div>

          <Link
            className="mt-auto flex h-8 w-full min-w-8 items-center justify-center rounded-[10px] border-[1px] border-foreground bg-none text-foreground"
            to={to}
          >
            {loanText}
          </Link>
        </>
      }
    ></EditLayout>
  );
}
