import { Tab, Tabs } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Employees from "./components/Employees";
import Home from "./components/Home";
import Users from "./components/Users";

function App() {
  return (
    <>
    <Tabs>
      <Tab label="User" components={Users} />
      <Tab label="Employees" to="/employees" />
    </Tabs>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/employees" element={<Employees />} />
    </Routes>
    </>
  );
}

export default App;
