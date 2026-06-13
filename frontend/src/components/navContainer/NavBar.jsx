import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="flex gap-6 items-center text-gray-700 font-medium">
      <Link className="hover:text-blue-600 transition duration-200" to="/">
        Home
      </Link>

      <Link className="hover:text-blue-600 transition duration-200" to="/cards">
        Contact Manager
      </Link>

      <Link className="hover:text-blue-600 transition duration-200" to="/login">
        Login
      </Link>

      <Link 
        className="bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 transition duration-200"
        to="/signup"
      >
        Sign Up
      </Link>
    </div>
  )
}

export default NavBar