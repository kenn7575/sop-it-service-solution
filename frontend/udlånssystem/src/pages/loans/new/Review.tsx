import TableSimplified from '@components/table-simplified';
import TextQuestion from '@components/textQuestion';

import translateMonth from '@services/translateMonth.json';

import { loanTypes } from '.';

interface NewLoanReviewProps {
  user?: usersView;
  products: any[];
  returnDate: Date | null;
  loanType: number;
  allZones: zoneModel[];
  locationOfUseId: number;
  createLoan: () => void;
  username?: string;
  setUsername: (username: string) => void;
  password: string;
  setPassword: (password: string) => void;
}

export default function NewLoanReview({
  user,
  products,
  returnDate,
  loanType,
  allZones,
  locationOfUseId,
  createLoan,
  username = '',
  setUsername,
  password = '',
  setPassword,
}: NewLoanReviewProps) {
  return (
    <div className="wrapper">
      <div className="chechout-container">
        <div className="info-container">
          <ul>
            <li>Bruger: {user?.Navn || user?.Brugernavn}</li>
            <li>Produkter: {products.length}</li>
            {returnDate ? (
              <li>
                Retur dato: {returnDate.getFullYear()}{' '}
                {translateMonth[returnDate.getMonth()]} {returnDate.getDate()}
              </li>
            ) : (
              <li>Retur dato: Ingen</li>
            )}
            <li>
              Låner type:{' '}
              {loanTypes.find(({ id }) => id === loanType)!.name ?? 'Ikke sat'}
            </li>
            <li>
              Lokalitet:{' '}
              {allZones.find(({ UUID }) => UUID === locationOfUseId)?.name}
            </li>
            <li>{/* Medarbejder: {$currentUser.fullName} */}</li>
          </ul>
        </div>
        {products.length > 0 && (
          <div className="table-container">
            <TableSimplified
              inputData={products}
              title="Produkter"
              disabled={true}
              exclude={['Stor. Loc. ID', 'withBag', 'withLock']}
            />
          </div>
        )}
      </div>
      <div className="button-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createLoan();
          }}
        >
          <TextQuestion
            label="Skriv dit uni-login"
            value={username}
            setValue={setUsername}
          />
          <TextQuestion
            label="Skriv adgangskoden til dit uni-login"
            type="password"
            value={password}
            setValue={setPassword}
          />
        </form>
        <button
          className="create-btn"
          onClick={createLoan}
          // disabled={!validateInfo || !validateProducts || !validateUser}
        >
          Opret
        </button>
      </div>
    </div>
  );
}
