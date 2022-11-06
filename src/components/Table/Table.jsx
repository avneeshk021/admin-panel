import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
// import { useEffect} from "react";
// import Axios from "axios";
function createData(task, time, date, status) {
  return { task, time, date, status };
}

const rows = [

  createData("BOV of new Candidates", 2 , "2 March 2022", "Manohar Patnaik"),
  createData("Onboard new Client ", 2 , "2 March 2022", "Manohar Patnaik"),
  createData("BOV of new Candidates", 2 , "2 March 2022", "Manohar Patnaik"),
  createData("Onboard new Client", 2 , "2 March 2022", "Manohar Patnaik"),
];


const makeStyle=(status)=>{
  if(status === 'Approved')
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(status === 'Pending')
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
}

export default function BasicTable() {
  return (
      <div className="Table">
      <h3>Task List</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Task</TableCell>
                <TableCell align="left">Time</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Assigned By</TableCell>
                  <TableCell align="left">Assigned By</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.task}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.task}
                  </TableCell>
                  <TableCell align="left">{row.time}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                  </TableCell>
                  <TableCell align="left" className="Details">Details</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}
