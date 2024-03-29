import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React from 'react'
import './List.scss'
import { deleteTransaction } from "../../../api/studentApi";
import Swal from "sweetalert2";
const List = ({ transactions, id }) => {
  const handleDelete = async (id, tid) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTransaction(id, tid).then((res) => {
          if (res.success) {
            Swal.fire({
              title: "Deleted!",
              text: res?.message,
              icon: "success"
            });
          }
        })

      }
    });

  }
  return (
    <div className="overflow-x-scroll ">
      <TableContainer component={Paper} className="table w-full bg-white">
        <Table aria-label="simple table" className="w-full">
          <TableHead className="bg-white">
            <TableRow>
              <TableCell className="bg-white  tableCell">Date</TableCell>
              <TableCell className="bg-white tableCell">Amount</TableCell>
              <TableCell className="bg-white tableCell">Payment Method</TableCell>
              <TableCell className="bg-white tableCell">Date</TableCell>
              <TableCell className="bg-white tableCell">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions?.map((transaction, index) => (
              <TableRow key={index}>
                <TableCell className="tableCell">{transaction.date.split("T")[0]}</TableCell>
                <TableCell className="tableCell">{transaction.amount}</TableCell>
                <TableCell className="tableCell">{transaction.paymentMethod}</TableCell>
                <TableCell className="tableCell">{transaction.timestamp}</TableCell>
                <TableCell className="tableCell">
                  <button onClick={() => handleDelete(id, transaction._id)}>Delete</button>
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