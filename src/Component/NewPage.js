import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, EmailID, ContactNo, protein) {
  return { name, calories, EmailID, ContactNo, protein };
}

const rows = [
  createData('Name',"abcd"),
  createData('ID', "123"),
  createData('Email ID',"abcd@gmail.com" ),
  createData('ContactNo', 123456790),
  
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.EmailID}</TableCell>
              <TableCell align="right">{row.ContactNo}</TableCell>
            
            </TableRow>
          ))}
        </TableBody> 
      </Table>
    </TableContainer>
  );
}
