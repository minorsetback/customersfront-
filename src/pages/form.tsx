import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { CircularProgress } from "@mui/material";

export default function BasicTable() {
  const [rows, setRows] = React.useState<any[]>();
  const [pass, setPass] = React.useState<string | null>();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setPass(prompt("Password:"));

    const getData = async () => {
      setLoading(true);
      setRows(
        await (
          await axios.get("https://customersback.vercel.app/form")
        ).data
      );
      setLoading(false);
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
              <TableCell>Kind of activity</TableCell>
              <TableCell>Target audience</TableCell>
              <TableCell>Basic colors</TableCell>
              <TableCell>Keywords</TableCell>
              <TableCell>Recommendations for site structure</TableCell>
              <TableCell>References</TableCell>
              <TableCell>Competitors</TableCell>
              <TableCell>Integrations</TableCell>
              <TableCell>Have Design</TableCell>
            </TableRow>
          </TableHead>
          {loading ? (
            <CircularProgress
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "transition(-50%, -50%)",
              }}
            />
          ) : (
            <TableBody>
              {rows &&
                rows.length &&
                rows.reverse().map((row, index) => (
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
                    <TableCell>{row.kind_of_activity}</TableCell>
                    <TableCell>{row.target_audience}</TableCell>
                    <TableCell>{row.basic_colors}</TableCell>
                    <TableCell>{row.keywords}</TableCell>
                    <TableCell>
                      {row.recommendations_for_site_structure}
                    </TableCell>
                    <TableCell>{row.references}</TableCell>
                    <TableCell>{row.competitors}</TableCell>
                    <TableCell>{row.integrations}</TableCell>
                    <TableCell>{String(row.design)}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
    );
  } else {
    return false;
  }
}
