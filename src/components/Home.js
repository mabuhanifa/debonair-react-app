import { Tab, Tabs } from "@mui/material";
import React from "react";

export default function Home() {
  return (
    <Tabs>
      <Tab label="User" href="users"/>
      <Tab label="Employees" to="/employees" />
    </Tabs>
  );
}
