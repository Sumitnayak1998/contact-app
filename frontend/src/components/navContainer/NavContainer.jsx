import React from 'react'
import NavBar from './NavBar'
import Logo from './Logo'

const NavContainer = () => {
  return (
    <div className="w-full shadow-md bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />
        <NavBar />
      </div>
    </div>
  )
}

export default NavContainer