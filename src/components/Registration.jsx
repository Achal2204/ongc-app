import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

const Registration = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Form Values", values);
      toast.success("Registration Successful!");
    },
  });

  return (
    <div className="min-h-[90vh] bg-slate-800 flex items-center justify-center px-4">
      <div className="bg-slate-700 w-full max-w-md rounded-lg shadow-lg">
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">
            Register
          </h2>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div>
              <label className="block text-slate-300 mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                className={`w-full px-4 py-2 text-white bg-slate-600 border rounded-md focus:ring-2 focus:ring-indigo-500 ${
                  formik.touched.name && formik.errors.name
                    ? "border-red-500"
                    : "border-slate-500"
                }`}
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.name}
                </p>
              )}
            </div>

            <div>
              <label className="block text-slate-300 mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className={`w-full px-4 py-2 text-white bg-slate-600 border rounded-md focus:ring-2 focus:ring-indigo-500 ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : "border-slate-500"
                }`}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.email}
                </p>
              )}
            </div>

            <div>
              <label className="block text-slate-300 mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                className={`w-full px-4 py-2 text-white bg-slate-600 border rounded-md focus:ring-2 focus:ring-indigo-500 ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500"
                    : "border-slate-500"
                }`}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.password}
                </p>
              )}
            </div>

            <div>
              <label
                className="block text-slate-300 mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                className={`w-full px-4 py-2 text-white bg-slate-600 border rounded-md focus:ring-2 focus:ring-indigo-500 ${
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                    ? "border-red-500"
                    : "border-slate-500"
                }`}
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.confirmPassword}
                  </p>
                )}
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-md transition"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
