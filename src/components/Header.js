import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

    
  return (
    <header className="h-24 flex items-center bg-slate-200">
        <div className="container mx-auto flex items-center justify-between">
            <span className="text-3xl text-gray-500"><i className="fa-solid fa-users-rectangle"></i> User Management App</span>
            <nav>
                <ul className="flex items-center gap-4">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/users">Users</Link></li>
                    
                    <li><Link to="/adduser">Add User</Link></li>
                    
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header