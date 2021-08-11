import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./Registration.css";

const useStyles = makeStyles({
  table: {
    minWidth: "40%",
  },
});

function createData(name, cost) {
  return { name, cost };
}

const rows = [
  createData("Students", "INR 1000"),
  createData("Academic / Research Institute", "INR 1500"),
  createData("Industry", "INR 2000"),
  createData("Overseas", "USD 100"),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <div>
      <TableContainer component={Paper} style={{ marginBottom: "1%" }}>
        <Table className={classes.table} aria-label="simple table ">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "Bold", fontSize: "150%" }}>
                Category of delegate
              </TableCell>
              <TableCell
                align="right"
                style={{ fontWeight: "Bold", fontSize: "150%" }}
              >
                Fee
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.cost}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
