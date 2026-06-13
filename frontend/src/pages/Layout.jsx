import React from 'react'
import NavContainer from '../components/navContainer/NavContainer'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      
      {/* Navbar */}
      <NavContainer />

      {/* Main Content */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 py-6">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
      
    </div>
  )
}

export default Layout