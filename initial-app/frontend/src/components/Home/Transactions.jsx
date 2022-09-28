import * as React from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Transactions.css";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("28 August 2022","Bath & Body Works Bonus", "Cashback", "+1,000"),
  createData("28 August 2022","Flight Booking: LNDN - SIN ", "Redeem",  "-2,134"),
  createData("28 August 2022","Bath & Body Works Bonus", "Reward Points",  "+3,000"),
  createData("28 August 2022","Flight Booking: KOR - SIN", "Redeem",  "-5,850"),
];


const makeStyle=(status)=>{
  if(status.includes('+'))
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(status.includes ('-'))
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
    const [open, setOpen] = useState(false);
  return (
      <div className="Table">
      <h3 className="font-poppins font-semibold ss:text-[18px] text-[52px] text-black ss:leading-[90.8px] leading-[75px]">Latest Transactions</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 10px 20px 0px #80808029", borderRadius: "0.8rem" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Date & Time</TableCell>
                <TableCell>Transaction</TableCell>
                <TableCell align="left">Reward Type</TableCell>
                <TableCell align="left">Points</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
           
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <>
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.trackingId}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                  </TableCell>
                  <TableCell align="left" className="Details" onClick={() => setOpen(!open)}>Details</TableCell>

                </TableRow> 

                {/* <TableRow>
                <Collapse in={open} timeout="auto" unmountOnExit>
                </Collapse>
                </TableRow> */}
                </>
              ))}
          
            </TableBody>
         
          </Table>
        </TableContainer>
      </div>
  );
}