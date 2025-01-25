import { Link, useParams } from "react-router-dom";

import useData from "@hooks/useData";

export default function LoanProducts() {
  const { id } = useParams() as any;

  const [itemsFromLoans] = useData<itemsFromLoan[]>(
    "items_from_loans?loan_id=" + id,
  );

  if (!itemsFromLoans?.length) return null;

  return (
    <div className="flex flex-col gap-1">
      <h1>Produkter:</h1>
      <hr />
      <div className="flex flex-col">
        {itemsFromLoans.map((item, i) => (
          <Link
            key={i}
            className="flex items-center gap-3"
            to={"/produkter/" + item.UUID}
          >
            <span>{item.Produkt}</span>
            <i className="fa-solid fa-up-right-from-square cursor-pointer" />
          </Link>
        ))}
      </div>
    </div>
  );
}
