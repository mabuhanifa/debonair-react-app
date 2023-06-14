import { TabContext, TabPanel } from "@mui/lab";
import TabList from "@mui/lab/TabList";
import { Box, Tab } from "@mui/material";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Employees from "./components/Employees";
import Home from "./components/Home";
import Users from "./components/Users";

function App() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Item One" value="1" />
              <Tab label="Item Two" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1" >
            <Users />
          </TabPanel>
          <TabPanel value="2">
            <Employees />
          </TabPanel>
        </TabContext>
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </>
  );
}

export default App;
