import { Link, useLocation, useNavigate } from 'react-router-dom';

import Table from '@components/table';
import { Button } from '@components/ui/button';

import { columnsFormatter } from '@helpers/tableHelpers';
import useData from '@hooks/useData';

interface LayoutProps {
  table: string;
}

export default function Layout({ table }: LayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const [inputData] = useData<any>(table, {
    withHeaders: true,
  });

  function handleRowClick(id: number) {
    navigate(`${location.pathname}/${id}`);
  }

  if (!inputData) return <p>Loading data</p>;

  const columns = columnsFormatter<typeof inputData.data>(inputData.headers);

  if (!columns) return <p>Loading columns</p>;

  return (
    <div className="h-full w-full overflow-hidden p-4">
      <Button asChild variant="outline">
        <Link
          to={`${location.pathname}/new`}
          className="absolute bottom-16 right-20"
        >
          New
        </Link>
      </Button>
      <Table
        columns={columns}
        data={inputData.data}
        onRowClick={(original) => handleRowClick(original.UUID)}
      />
    </div>
  );
}
