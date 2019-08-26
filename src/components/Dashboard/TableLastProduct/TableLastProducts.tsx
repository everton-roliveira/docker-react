import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
  }),
);

function createData(name: string, value: number, size: string, amount: number) {
  return { name, value, size, amount };
}

const rows = [
  createData('Camisa Polo', 99.90, 'G', 2),
  createData('Camisa Capitão América', 129.90, 'M', 1),
  createData('Camisa Homem-aranha', 99.90, 'M', 3),
  createData('Calsa Moleton', 175.50, 'G', 1),
  createData('Calsa Jeans', 99.90, '44', 1)
];

export default function TableLastProducts() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Ultimos produtos comprados</TableCell>
            <TableCell align="right">Nome</TableCell>
            <TableCell align="right">Valor</TableCell>
            <TableCell align="right">Tamanho</TableCell>
            <TableCell align="right">Quantidade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.value}</TableCell>
              <TableCell align="right">{row.size}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}