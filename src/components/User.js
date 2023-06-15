import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const [users, setUsers] = useState([]);

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
  const { id } = useParams();
  const user = users.find((user) => user.empID === Number(id));
  return (
    <div style={{ textAlign: "center" ,margin:"20px"}}>
      <Typography variant="h5" component="h2" gutterBottom>
        User Details
      </Typography>
      <Typography>ID: {user?.empID}</Typography>
      <Typography>First Name: {user?.firstName}</Typography>
      <Typography>Last Name: {user?.lastName}</Typography>
      <Typography>Employee Type: {user?.employeeType}</Typography>
    </div>
  );
}
