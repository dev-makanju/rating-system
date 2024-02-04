"use client";
import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Modal from '../dashboard/Modal';

function createData(name, total_review, total_score) {
  return { name, total_review, total_score };
}

const rows = [
  createData("Adenuga Kolade", 159, 6.0),
  createData("Makanju Oluwafemi", 237, 9.0),
  createData("Adeleke Sheriat", 262, 16.0),
  createData("Ojo samuel", 305, 3.7),
  createData("Adewole Philip", 356, 16.0),
];



const LecturerTable = () => {
   const [open , setOpen] = useState(false); 
   const handleCloseModal = () => {
      setOpen(false);
   }
   return (
   <>
    <Modal isOpen={open} closeModal={handleCloseModal}/>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Total review</TableCell>
            <TableCell align="right">Overall score&nbsp;</TableCell>
            <TableCell align="right">Action&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                className="text-[blue] cursor-pointer underline"
                component="th"
                scope="row"
              >
                {row.name}
              </TableCell>
              <TableCell align="right">{row.total_review}</TableCell>
              <TableCell align="right">{row.total_score}</TableCell>
              <TableCell
                align="right"
                onClick={ () => setOpen(true)}
                className="text-[blue] cursor-pointer"
              >
                rate
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   </>
  );
};

export default LecturerTable;