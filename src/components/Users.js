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
import UserModal from "./Modals/UserModal";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [view, setView] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(
        "http://59.152.62.177:8085/api/Employee/EmployeeData"
      );
      const data = await res.json();

      setUsers(data.readEmployeeData);
    };
    fetchUsers();
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
        User List
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
      <UserModal view={view} setView={setView} />
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
            {users.map((user) => (
              <TableRow key={user.empID}>
                <TableCell>{user.empID}</TableCell>
                <TableCell>{user.firstName}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>{user.employeeType}</TableCell>
                <TableCell>
                  <Button variant="contained">Details</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
