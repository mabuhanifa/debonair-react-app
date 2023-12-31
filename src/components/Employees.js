import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmployeeModal from "./Modals/EmployeeModal";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [view, setView] = useState(false);

  useEffect(() => {
    const fetchEmployees = async () => {
      const res = await fetch(
        "http://59.152.62.177:8085/api/Employee/EmployeeData"
      );
      const data = await res.json();
      setEmployees(data.readEmployeeData);
    };
    fetchEmployees();
  }, []);
  return (
    <div>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          marginBottom: "25px",
          textAlign: "center",
        }}
      >
        Employee List
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{
            marginBottom: "25px",
            textAlign: "center",
          }}
          onClick={() => setView(true)}
        >
          Add User
        </Button>
      </div>
      <EmployeeModal open={view} setView={setView} />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Employee Type</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.empID}>
                <TableCell>{employee.empID}</TableCell>
                <TableCell>{employee.firstName}</TableCell>
                <TableCell>{employee.lastName}</TableCell>
                <TableCell>{employee.employeeType}</TableCell>
                <TableCell>
                <Link
                    to={`/employees/${employee.empID}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Button variant="contained">Details</Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
