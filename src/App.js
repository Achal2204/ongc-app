import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import Navbar from "./components/Navbar";
import Registration from "./components/Registration";

function App() {
  return (
    <div className="bg-slate-800 min-h-[100vh]">
      <Navbar />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/userDetails/:id" element={<UserDetails />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
