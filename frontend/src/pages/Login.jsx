import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginData;

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Validation
    if (!email.trim() || !password.trim()) {
      toast.error("All fields are required");
      return;
    }

    // ✅ Get users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // ✅ Check if user exists
    const user = users.find((u) => u.email === email);

    if (!user) {
      toast.error("User not found ❌");
      return;
    }

    // ✅ Check password
    if (user.password !== password) {
      toast.error("Incorrect password ❌");
      return;
    }

    // ✅ Save logged-in user
    localStorage.setItem("loggedInUser", JSON.stringify(user));

    toast.success(`Welcome ${user.username} 🎉`);

    // ✅ Redirect
    setTimeout(() => {
      navigate("/cards");
    }, 1500);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
        
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Email */}
          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter email"
              className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Log In
          </button>

          {/* Extra */}
          <p className="text-center text-gray-500 text-sm">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 hover:underline"
            >
              Sign Up
            </Link>
          </p>

        </form>
      </div>
    </section>
  );
};

export default Login;