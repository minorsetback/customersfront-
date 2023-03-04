import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

export default function BasicTable() {
  const [rows, setRows] = React.useState<any[]>();
  const [pass, setPass] = React.useState<string | null>();
  React.useEffect(() => {
    setPass(prompt("Password:"));

    const getData = async () => {
      setRows(
        await (
          await axios.get("https://customersback.vercel.app/form")
        ).data
      );
    };
    getData();
  }, []);

  if (pass === "root") {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Desc</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Stack</TableCell>
              <TableCell>Have Design</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows &&
              rows.length &&
              rows.map((row, index) => (
                <TableRow
                  key={row.name + index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.descriprion}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                  <TableCell>{row.stack}</TableCell>
                  <TableCell>{String(row.design)}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  } else {
    return false;
  }
}
