import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Tabss() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="basic tabs"
      centered
    >
      <Tab label="User" component={Link} to="/users" value={0} />
      <Tab label="Employees" component={Link} to="/employees" value={1} />
    </Tabs>
  );
}
