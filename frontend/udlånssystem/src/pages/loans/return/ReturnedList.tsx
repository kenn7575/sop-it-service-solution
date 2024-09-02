import TableSimplified from '@components/table-simplified';

interface ReturnedListProps {
  text: string;
  inputData: any;
}

export default function ReturnedList({ text, inputData }: ReturnedListProps) {
  if (!inputData?.length) return null;

  return (
    <>
      <h1 className="mt-16 text-xl">{text}</h1>
      <hr className="w-full" />
      <TableSimplified
        inputData={inputData}
        exclude={['loan_id', 'Med_taske', 'Med_Laas']}
        disabled={true}
      />
    </>
  );
}
