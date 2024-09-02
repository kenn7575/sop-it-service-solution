import { forwardRef, useEffect, useState } from 'react';

import getData from '@data/getData';
import useData from '@hooks/useData';

import '@styles/pdf.css';

interface LoansPdfProps {
  id: number;
}

export default forwardRef<HTMLDivElement, LoansPdfProps>(({ id }, ref) => {
  const [loan] = useData<loanModel>('loans', undefined, id);
  const [itemsInLoan, setItemsInLoan] = useState<itemsFromLoan[]>([]);
  const [loaner, setLoaner] = useState<userModel | null>();
  const [helpdesk_personel, setHelpdesk_personel] =
    useState<userModel | null>();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loan) return;

    fetchData();
  }, [loan]);

  async function fetchData() {
    if (!loan) return;

    const itemsInLoanTemp = await getData<itemsFromLoan[]>(
      'items_from_loans?loan_id=' + loan.UUID,
    );

    const loanerTemp = await getData<userModel>('users', {
      UUID: loan.user_id,
    });

    const helpdesk_personelTemp = await getData<userModel>('users', {
      UUID: loan.helpdesk_personel_id,
    });

    setItemsInLoan(itemsInLoanTemp ?? []);
    setLoaner(loanerTemp);
    setHelpdesk_personel(helpdesk_personelTemp);

    setLoading(false);
  }

  if (loading || !loan || !loaner || helpdesk_personel === undefined) {
    return <div>Loading...</div>;
  }

  let date_to_be_returned =
    new Date(loan.date_created).getTime() +
    loan.loan_length * 24 * 60 * 60 * 1000;

  return (
    <div id="pdf" className="px-10" ref={ref}>
      <section>
        <div className="flex w-full justify-around p-6 pt-8">
          <img src="/sde-logotype.png" alt="SDE logo" />
          <img src="/logo.png" alt="Logo" className="scale-75" />
        </div>

        <h1 className="text-center text-2xl font-bold">Udlånskvittering</h1>
      </section>

      <div className="line" />

      <section className="grid grid-cols-2 gap-y-3">
        <div>
          <span> Låner: </span>
          <h3>{loaner.username}</h3>
        </div>

        <div>
          <span> Udlåner: </span>
          <h3>{helpdesk_personel?.username || 'Ingen'}</h3>
        </div>

        <div>
          <span> Udlånsdato: </span>
          <h3>{new Date(loan.date_created).toLocaleDateString('da-dk')}</h3>
        </div>

        <div>
          <span> Afleveringsdato: </span>
          <h3>
            {loan.loan_length ? (
              new Date(date_to_be_returned).toLocaleDateString('da-dk')
            ) : (
              <i className="fa-solid fa-infinity" />
            )}
          </h3>
        </div>
      </section>

      <div className="line" />

      <section className="flex">
        <div className="w-1/2">
          <h2 className="mb-2">Produkter:</h2>
          <div>
            {itemsInLoan.map((item, i) => (
              <div key={i}>
                <p>{item.Produkt_navn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
});
