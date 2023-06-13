import { Route, Routes } from "react-router-dom";
import Employees from "./components/Employees";
import Home from "./components/Home";
import Users from "./components/Users";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/employees" element={<Employees />} />
    </Routes>
  );
}

export default App;
