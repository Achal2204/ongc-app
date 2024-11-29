import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-slate-900 border-b border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-white text-xl font-bold">Users Data</div>

          <div className="flex items-center space-x-4">
            <button
              className="text-white px-4 py-2 rounded-md text-lg font-sm hover:bg-slate-700"
              onClick={() => navigate("/registration")}
            >
              Register
            </button>
            <button
              className="text-white px-4 py-2 rounded-md text-lg font-sm hover:bg-slate-700"
              onClick={() => navigate("/")}
            >
              Users
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
