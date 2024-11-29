import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../redux/slices/userSlice";
import Spinner from "./Spinner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const calculateContainerHeight = () => {
      const windowHeight = window.innerHeight;
      const headerHeight = 190;
      const marginBottom = 0;
      const height = windowHeight - headerHeight - marginBottom;
      setContainerHeight(height);
    };

    calculateContainerHeight();
    window.addEventListener("resize", calculateContainerHeight);

    return () => {
      window.removeEventListener("resize", calculateContainerHeight);
    };
  }, []);

  async function fetchUsers(params) {
    setLoading(true);
    try {
      const result = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await result.json();
      dispatch(setUsers(data));
    } catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchUsers();
  }, [dispatch]);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="min-h-[90vh] flex flex-col bg-gray-800">
      <div className="m-2 flex justify-center">
        <h3 className="text-3xl font-semibold text-white text-center">
          User List
        </h3>
      </div>
      <div className="flex flex-col px-4 md:px-10 lg:px-28 flex-grow">
        <div className="flex justify-start mb-4">
          <div className="relative w-full sm:w-1/3">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search by name or email..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <div
            className="relative"
            style={{
              height: containerHeight,
              overflowY: "auto",
              scrollbarWidth: "none",
            }}
          >
            <Table>
              <TableHead>
                <TableRow className="bg-blue-400 sticky top-0 z-10">
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Company Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow
                    key={user.id}
                    onClick={() => navigate(`/userDetails/${user.id}`)}
                    className="hover:cursor-pointer"
                  >
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>{user.company.name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
