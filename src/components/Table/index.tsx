import { Table as MuiTable } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export interface Column<T> {
  key: keyof T | string; // suporta também campos opcionais
  label: string;
}

interface TableProps<T extends object> {
  columns: Column<T>[];
  rows: T[];
}

export default function Table<T extends object>({
  columns,
  rows,
}: TableProps<T>) {
  return (
    <TableContainer component={Paper}>
      <MuiTable sx={{ minWidth: 650 }} size="small">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.key as string}>{column.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((column) => {
                const value = (row as any)[column.key];

                const formattedValue =
                  value instanceof Date
                    ? value.toLocaleDateString()
                    : value !== undefined && value !== null
                    ? String(value)
                    : '';

                return (
                  <TableCell key={column.key as string}>
                    {formattedValue}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}
