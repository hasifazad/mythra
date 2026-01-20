import React, { useState } from 'react';
import mithralogo from "../assets/images/mithralogo.png";
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";
import api from '../axios/axios';

function Login() {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    setServerError("");

    try {
       await api.post("/login", data)
      console.log(data);
      

      navigate("/book");

    } catch (error) {
      if (error.response) {
        setServerError(error.response.data.message);
      } else {
        setServerError("Something went wrong !!!");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4">

      <div className="w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8 text-white">

        {/* Logo */}
        <div className="text-center mb-6">
          <div className="flex justify-center items-center space-x-2">
            <img
              src={mithralogo}
              alt="Mythra Logo"
              className="h-16 rounded-full"
            />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#F5C77A] via-purple-400 to-[#6C5CE7] bg-clip-text text-transparent">
              Mythra
            </h1>
          </div>

          <p className="mt-4 text-xl font-semibold">Welcome back to Mythra</p>
          <p className="text-sm text-gray-300 mt-1">
            Where Movies & Books Become Memories 🎬📚
          </p>
        </div>

        {/* Server Error */}
        {serverError && (
          <p className="bg-red-500/20 text-red-400 text-sm p-2 rounded mb-4 text-center">
            {serverError}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Email */}
          <div className="mb-4">
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required"
              })}
              className="w-full px-4 py-2 rounded-lg bg-black/30 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block mb-1 text-sm">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required"
              })}
              className="w-full px-4 py-2 rounded-lg bg-black/30 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.password && (
              <p className="text-red-400 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between text-sm mb-6">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                {...register("rememberMe")}
                className="accent-[#6C5CE7]"
              />
              Remember me
            </label>

            <Link
              to="/forgot-password"
              className="text-[#F5C77A] hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold text-lg bg-gradient-to-r from-purple-600 to-[#6C5CE7] hover:opacity-90 transition"
          >
            Log In
          </button>

          {/* Signup */}
          <p className="text-center text-sm text-gray-300 mt-6">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-[#F5C77A] hover:underline">
              Sign up
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
}

export default Login;
