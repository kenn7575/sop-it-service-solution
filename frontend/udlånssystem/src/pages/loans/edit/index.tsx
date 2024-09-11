import { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { dateToReadable } from '@helpers/dateHelpers';
import useData from '@hooks/useData';

import EditLayout from '@layouts/edit';
import html2pdf from 'html2pdf.js';

import { fields, handleReturn } from '../util';
import LoanProducts from './loanProducts';
import Pdf from './pdf';

export default function Edit() {
  const { id } = useParams();

  const navigate = useNavigate();

  const pdfRef = useRef<HTMLDivElement>(null);

  const [loan] = useData<loanModel>('loans', undefined, id);

  async function printPDF() {
    const pdfElement = pdfRef.current;

    html2pdf(pdfElement, {
      filename: `udlaan_${id}.pdf`,
      image: { type: 'png', quality: 1 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    });
  }

  function handleDelete() {
    handleReturn(id!, navigate);
  }

  return (
    <>
      <div className="hidden">
        <Pdf id={Number(id)} ref={pdfRef} />
      </div>
      <EditLayout
        table="loans"
        fields={fields}
        panelSlot={
          <>
            {!loan?.date_of_return ? (
              <button onClick={handleDelete}>Returner</button>
            ) : (
              <>
                <p>Returneret ✅</p>
                <div>
                  <p>Fra: {dateToReadable(loan?.date_created)}</p>
                  <p>Til: {dateToReadable(loan?.date_of_return)}</p>
                </div>
                <button onClick={handleDelete}>Se detaljer</button>
              </>
            )}
            <div className="flex flex-col gap-10 self-start">
              <LoanProducts />
            </div>
            <button onClick={printPDF} className="mt-auto">
              Download PDF
            </button>
          </>
        }
      />
    </>
  );
}
