import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const BASE_URL = "http://localhost:4000/api";

const UpdateContact = () => {
  let navigate = useNavigate();
  let { id } = useParams();

  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Fetch contact
  const getContact = async () => {
    try {
      let res = await axios.get(`${BASE_URL}/contact/${id}`);
      setContactData(res.data.payload);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContact();
  }, [id]);

  // Handle input change
  const handleChange = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit update

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.put(
      `${BASE_URL}/contact/${id}`,
      contactData
    );

    if (res.data.success) {
      toast.success(res.data.message);
      navigate("/cards");
    }

  } catch (error) {
    toast.error(
      error.response?.data?.message || "Update failed ❌"
    );
  }
};

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Update Contact
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <div>
            <label className="block text-gray-600 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={contactData.name || ""}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={contactData.email || ""}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-600 mb-1">Phone</label>
            <input
              type="text"
              name="phone"
              value={contactData.phone || ""}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Update
            </button>

            <button
              type="button"
              onClick={() => navigate("/cards")}
              className="flex-1 bg-gray-300 text-gray-800 py-2 rounded-lg hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};

export default UpdateContact;