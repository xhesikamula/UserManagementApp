import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    //bg-[#dce7c9] 
    //text inside span : //text-[#3a4920]
    <header className="h-24 flex items-center bg-[#000919] shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        
        <span className="text-2xl sm:text-3xl text-gray-200 flex items-center gap-2"> 
          <i className="fa-solid fa-users-rectangle"></i><b>UserManagement</b> 
        </span>

        {/* Hamburger button: only for the small screens*/}
        <button
          className="block sm:hidden p-2 text-gray-200 rounded"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="fa-solid fa-bars"></i> {}
        </button>

        {}
        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col sm:flex sm:flex-row gap-4 absolute sm:static top-24 left-0 w-full sm:w-auto bg-[#000919] text-gray-200 sm:bg-transparent p-4 sm:p-0 z-50`}
        >
          <Link to="/" className="hover:text-white" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/users" className="hover:text-white" onClick={() => setMenuOpen(false)}>
            Users
          </Link>
          <Link to="/adduser" className="hover:text-white" onClick={() => setMenuOpen(false)}>
            Add User
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
