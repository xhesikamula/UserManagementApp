import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="h-24 flex items-center bg-[#dce7c9] shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        <span className="text-2xl sm:text-3xl text-[#3a4920] flex items-center gap-2">
          <i className="fa-solid fa-users-rectangle"></i><b>UserManagement</b> 
        </span>

        {/* Hamburger button: only for the small screens*/}
        <button
          className="block sm:hidden p-2 text-gray-700 border rounded"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="fa-solid fa-bars"></i> {}
        </button>

        {}
        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col sm:flex sm:flex-row gap-4 absolute sm:static top-24 left-0 w-full sm:w-auto bg-[#dce7c9] sm:bg-transparent p-4 sm:p-0 z-50`}
        >
          <Link to="/" className="hover:text-[#3a4920]" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/users" className="hover:text-[#3a4920]" onClick={() => setMenuOpen(false)}>
            Users
          </Link>
          <Link to="/adduser" className="hover:text-[#3a4920]" onClick={() => setMenuOpen(false)}>
            Add User
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
