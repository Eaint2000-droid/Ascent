import * as React from "react";
import { useState,useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import "./Transactions.css";

function createData(date, transaction, rewardType, points, remarks, amountSpent) {
  return { date, transaction, rewardType, points, remarks, amountSpent};
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  var date = row.transaction_date;
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var split_date = date.split('-');
  var transaction_date = split_date[2] + ' ' + months[split_date[1]] + ' ' + split_date[0];
  var rewardType;
  switch(row.reward_type) {
    case "points":
      rewardType = "Points";
      break;
    case "miles":
      rewardType = "Miles";
      break;
    case "cashback":
      rewardType = "Cashback";
      break;
    default:
      rewardType = "";
  }
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell align="left">{transaction_date}</TableCell>
        <TableCell align="left">{row.merchant_name}</TableCell>
        <TableCell align="left">{rewardType}</TableCell>
        <TableCell align="left">  <span className="points" >{row.reward_earned}</span></TableCell>
        <TableCell align="left" className="Details" onClick={() => setOpen(!open)}>
            {open ? "Hide Details" : "View Details"}
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={2}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableBody>
                    <TableRow key={row.merchant_name}>
                      <TableCell align="left">
                        Remarks
                      </TableCell>
                      <TableCell align="left">{row.remarks}</TableCell>
                      <TableCell/>
                      <TableCell/>
                      <TableCell/>
                      <TableCell/>
                    </TableRow>

                    <TableRow key={row.merchant_name}>
                      <TableCell align="left">
                      Amount Spent
                      </TableCell>
                      <TableCell align="left">{row.currency} {row.amount}</TableCell>
                      <TableCell/>
                      <TableCell/>
                      <TableCell/>
                      <TableCell/>
                    </TableRow>
             
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


// const rows = [
//   createData("28 August 2022","Bath & Body Works Bonus 1", "Cashback", "+1,000","Get 20% in cashback","$2,000"),
//   createData("28 August 2022","Flight Booking: LNDN - SIN ", "Redeem",  "-2,134","Get 20% in cashback","$2,000"),
//   createData("28 August 2022","Bath & Body Works Bonus", "Reward Points",  "+3,000","Get 20% in cashback","$2,000"),
//   createData("28 August 2022","Flight Booking: KOR - SIN", "Redeem",  "-5,850","Get 20% in cashback","$2,000"),
// ];


const makeStyle=(points)=>{
  if(points.includes('+'))
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(points.includes ('-'))
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

export default function Transactions({user}) {
    // const [open, setOpen] = useState(false);
    const [initialData, setInitialData] = useState([]);

     //Load data
    useEffect(() => {
        const sendRequest = async () => {
        try{
            const response = await fetch('https://tfaz66806a.execute-api.ap-southeast-1.amazonaws.com/beta/transactions/'+ user);
            const responseData = await response.json();
            setInitialData(responseData.transactions);
            console.log(JSON.parse(initialData));

        }catch(error){
            console.log(error.message);
        }
        }
        sendRequest();
        
  },[])

  return (
      <div className="Table">
      <h3 className="font-poppins font-semibold ss:text-[18px] text-[52px] text-black ss:leading-[90.8px] leading-[75px]">Latest Transactions (Last 30 days)</h3>
      <TableContainer component={Paper} style={{ boxShadow: "0px 10px 20px 0px #80808029", borderRadius: "0.8rem", marginBottom:50 }}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>      
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Transaction</TableCell>
              <TableCell align="left">Reward Type</TableCell>
              <TableCell align="left">Reward</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))} */}
            {initialData.map((transaction) => (
              <Row key={transaction.merchant_name} row={transaction}/>
            ))
            }
          </TableBody>
        </Table>
      </TableContainer>
      </div>
  );
}