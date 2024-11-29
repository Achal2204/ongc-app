import React from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

const UserDetails = () => {
  const { id } = useParams();
  const user = useSelector((state) =>
    state.users.users.find((user) => user.id === parseInt(id))
  );
  const navigate = useNavigate();

  // if (!user) {
  //   return toast.error("User Not Found");
  // }
  // console.log(user);

  return (
    <div>
      {user ? (
        <div class="min-h-[90vh] bg-slate-800 flex items-center justify-center p-3">
          <div class="bg-slate-700 shadow-lg rounded-lg max-w-md w-full overflow-hidden">
            <div class="bg-slate-500 h-32 flex items-center justify-center relative">
              <h1 class="text-white text-3xl font-semibold">User Details</h1>
              <div class="absolute -bottom-8 w-16 h-16 bg-slate-500 rounded-full border-4 border-slate-700 flex items-center justify-center">
                <FaRegUserCircle className="text-3xl text-white" />
              </div>
            </div>

            <div class="p-6">
              <h2 class="text-xl font-bold text-white">{user.name}</h2>
              <p class="text-slate-300 text-sm mb-4">
                Username: {user.username}
              </p>

              <div class="mb-6 space-y-4">
                <p class="text-slate-200 text-sm">
                  <strong>Email:</strong> {user.email}
                </p>
                <p class="text-slate-200 text-sm">
                  <strong>Address:</strong> {user.address.street},{" "}
                  {user.address.suite}, {user.address.city},{" "}
                  {user.address.zipcode}
                </p>
                <p class="text-slate-200 text-sm">
                  <strong>Phone:</strong> {user.phone}
                </p>
                <p class="text-slate-200 text-sm">
                  <strong>Website:</strong> {user.website}
                </p>
                <p class="text-slate-200 text-sm">
                  <strong>Company:</strong> {user.company.name}
                </p>
              </div>
            </div>

            <div class="p-4 bg-slate-600 flex justify-between">
              <button
                class="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md text-sm"
                onClick={() => navigate(-1)}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[90vh]">
          <span className="text-white text-2xl font-bold">User Not Found</span>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
