import { Tab, Tabs } from "@mui/material";
import { Link, Route, Routes } from "react-router-dom";
import Employees from "./components/Employees";
import Home from "./components/Home";
import Users from "./components/Users";

function App() {
  return (
    <>
      <Tabs>
        <Tab label="User" component={Link} to="/users" value={0}/>
        <Tab label="Employees" component={Link} to="/employees" value={1}/>
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
