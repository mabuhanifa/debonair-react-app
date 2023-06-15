import { Route, Routes } from "react-router-dom";
import Employee from "./components/Employee";
import Employees from "./components/Employees";
import Home from "./components/Home";
import EditUserModal from "./components/Modals/EditUserModal";
import Tabs from "./components/Tabs";
import User from "./components/User";
import Users from "./components/Users";

function App() {

  return (
    <>
      <Tabs/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/users/edit/:id" element={<EditUserModal />} />
        <Route path="/employees/:id" element={<Employee />} />
      </Routes>
    </>
  );
}

export default App;
