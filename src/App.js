import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
    
    </Routes>
  );
}

export default App;
