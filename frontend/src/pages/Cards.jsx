import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

// const BASE_URL = "http://localhost:4000/api";
const BASE_URL = import.meta.env.VITE_API_URL;

const Cards = () => {
  const [contacts, setContacts] = useState([]);
  // let {id} = useParams();
  let navigate = useNavigate();

  // CREATE form state
  const [createData, setCreateData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  //  UPDATE form state
  // const [updateData, setUpdateData] = useState({
  //   id: "",
  //   name: "",
  //   email: "",
  //   phone: "",
  // });

  //  DELETE form state
  // const [deleteId, setDeleteId] = useState("");

  // Fetch contacts
  // useEffect(() => {
  //   const fetchContacts = async () => {
  //     const res = await axios.get(`${BASE_URL}/contact${id}`);
  //     setContacts(res.data.payload);
  //   };
  //   fetchContacts();
  // },[id]);

  const getAllContacts = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/contact`);
    setContacts(res.data.payload);
  } catch (error) {
    toast.error("Failed to fetch contacts ❌");
  }
};

useEffect(() => {
  getAllContacts();
}, []);

  // CREATE
  const handleCreateChange = (e) => {
    setCreateData({
      ...createData,
      [e.target.name]: e.target.value,
    });
  };

const handleCreate = async (e) => {
  e.preventDefault();

  try {
    
    const res = await axios.post(`${BASE_URL}/contact`, createData);
    

    if (res.data.success) {
      setContacts([res.data.data, ...contacts]); // add on top
      setCreateData({ name: "", email: "", phone: "" });

      toast.success(res.data.message);
    }

  } catch (error) {
    toast.error(
      error.response?.data?.message || "Failed to create contact ❌"
    );
  }
};

  // UPDATE
  // const handleUpdateChange = (e) => {
  //   setUpdateData({
  //     ...updateData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleUpdate = async (e) => {
  //   e.preventDefault();

  //   const res = await axios.put(
  //     `${`${BASE_URL}/contact`}/${updateData.id}`,
  //     updateData,
  //   );

  //   const updatedList = contacts.map((item) =>
  //     item.id === parseInt(updateData.id) ? res.data : item,
  //   );

  //   setContacts(updatedList);
  //   setUpdateData({ id: "", name: "", email: "", phone: "" });
  // };

  // DELETE
  // const handleDelete = async (e) => {
  //   e.preventDefault();

  //   await axios.delete(`${`${BASE_URL}/contact`}/${deleteId}`);

  //   setContacts(contacts.filter((item) => item.id !== parseInt(deleteId)));
  //   setDeleteId("");
  // };

  const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this contact?"
  );

  if (!confirmDelete) return;

  try {
    const res = await axios.delete(`${BASE_URL}/contact/${id}`);

    if (res.data.success) {
      setContacts(contacts.filter((item) => item._id !== id));
      toast.success(res.data.message);
    }

  } catch (error) {
    toast.error(
      error.response?.data?.message || "Delete failed ❌"
    );
  }
};
  return (
  <div className="min-h-screen bg-gray-100 py-10 px-4">
    <div className="max-w-5xl mx-auto">

      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Contact Manager
      </h2>

      {/* CREATE FORM */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          Create Contact
        </h3>

        <form onSubmit={handleCreate} className="grid md:grid-cols-3 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={createData.name}
            onChange={handleCreateChange}
            className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={createData.email}
            onChange={handleCreateChange}
            className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={createData.phone}
            onChange={handleCreateChange}
            className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <button
            type="submit"
            className="md:col-span-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add Contact
          </button>
        </form>
      </div>

      {/* CONTACT LIST */}
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-6 text-gray-700">
          All Contacts
        </h3>

        <div className="grid gap-4">
          {contacts.map((item) => (
            <div
              key={item._id}
              className="border rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between hover:shadow-md transition"
            >
              {/* Contact Info */}
              <div>
                <p className="text-sm text-gray-400">ID: {item._id}</p>
                <p className="font-semibold text-lg text-gray-800">
                  {item.name}
                </p>
                <p className="text-gray-600">{item.email}</p>
                <p className="text-gray-600">{item.phone}</p>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-3 md:mt-0">
                <button
                  onClick={() => navigate(`/update/${item._id}`)}
                  className="px-4 py-1.5 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition"
                >
                  Update
                </button>

                <button
                  onClick={() => handleDelete(item._id)}
                  className="px-4 py-1.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {contacts.length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            No contacts found.
          </p>
        )}
      </div>
    </div>
  </div>
);
};

export default Cards;
