import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React from 'react'
import './List.scss'
const List = ({transactions}) => {
   
  return (
    <div className="overflow-x-scroll w-screen sm:w-full">
    <TableContainer component={Paper} className="table w-full bg-white">
      <Table  aria-label="simple table" className="w-full">
        <TableHead className="bg-white">
          <TableRow>
            <TableCell className="bg-white tableCell">Month</TableCell>
            <TableCell className="bg-white tableCell">Amount</TableCell>
            <TableCell className="bg-white tableCell">Payment Method</TableCell>
            <TableCell className="bg-white tableCell">Date</TableCell>
            <TableCell className="bg-white tableCell">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions?.map((transaction, index) => (
            <TableRow key={index}>
              <TableCell className="tableCell">{transaction.month}</TableCell>
              <TableCell className="tableCell">{transaction.amount}</TableCell>
              <TableCell className="tableCell">{transaction.paymentMethod}</TableCell>
              <TableCell className="tableCell">{transaction.timestamp}</TableCell>
              <TableCell className="tableCell">
                <button onClick={() =>{}}>Delete</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
  )
}

export default List