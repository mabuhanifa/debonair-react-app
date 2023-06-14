import React, { useEffect, useState } from "react";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
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
  console.log(employees);
  return <div>Employees</div>;
}
