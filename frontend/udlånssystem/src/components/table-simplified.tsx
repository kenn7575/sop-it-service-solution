import { useEffect } from 'react';

import '@styles/tableSimplified.css';

interface TableSimplifiedProps {
  inputData?: any[];
  title?: string;
  disabled?: boolean;
  exclude?: string[];
  onMessage?: (message: any) => void;
}

export default function TableSimplified({
  inputData = [],
  title = '',
  disabled = false,
  exclude = [],
  onMessage = () => {},
}: TableSimplifiedProps) {
  let tableHeadings = Object.keys(inputData[0]);
  let tableData = Object.values(inputData);

  let sortAscending = true;
  let sortColumn = -1;

  let tableDataFiltered = inputData;

  function sortTable(columnKey: any) {
    if (columnKey === sortColumn) {
      sortAscending = !sortAscending;
    } else {
      sortAscending = true;
      sortColumn = columnKey;
    }
    const sortedData = tableData.sort((a, b) => {
      const valueA = a[columnKey];
      const valueB = b[columnKey];
      return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
    });
    if (!sortAscending) {
      tableData = sortedData.reverse();
    } else {
      tableData = sortedData;
    }
  }

  function forwardId(object: any) {
    if (disabled) return;

    onMessage(object);
  }

  useEffect(() => {
    sortTable(tableHeadings[0]);
  }, []);

  return (
    <div className="content tableSimplified">
      {title && <h1>{title}</h1>}
      <div className="table-container">
        <table className={disabled ? 'disabled' : ''}>
          <thead>
            <tr>
              {tableHeadings.map((heading, i) => {
                if (!exclude.includes(heading))
                  return (
                    <th key={i} onClick={() => sortTable(heading)}>
                      {heading.replace('_', ' ')}
                    </th>
                  );
              })}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`${disabled ? 'not-allowed' : ''} ${rowIndex % 2 === 0 ? 'row-even' : ''}`}
                onClick={() => {
                  forwardId(row);
                }}
              >
                {Object.entries(row).map(([key, value]: any, i: number) => {
                  if (!exclude.includes(key)) return <td key={i}>{value}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
