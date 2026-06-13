import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { username, email, password, confirmPassword } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Validation
    if (
      !username.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      toast.error("Please fill all fields");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    // ✅ Get existing users from localStorage
    const existingUsers =
      JSON.parse(localStorage.getItem("users")) || [];

    // ✅ Check duplicate email
    const userExists = existingUsers.find(
      (user) => user.email === email
    );

    if (userExists) {
      toast.error("User already exists with this email ❌");
      return;
    }

    // ✅ Save new user
    const newUser = { username, email, password };

    localStorage.setItem(
      "users",
      JSON.stringify([...existingUsers, newUser])
    );

    toast.success("Signup successful 🎉");

    // ✅ Clear form
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    // ✅ Redirect to login
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">

        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block text-gray-600 mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Create Account
          </button>

          <p className="text-center text-gray-500 text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:underline"
            >
              Login
            </Link>
          </p>

        </form>
      </div>
    </section>
  );
};

export default SignUp;