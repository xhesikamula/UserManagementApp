import React from 'react'
import { Link } from 'react-router-dom'

function Card({ id, name, email, company }) {
  return (
    <div className="border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition duration-200">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <h4 className="text-sm text-gray-600">{email}</h4>
          <h4 className="text-sm text-gray-500">{company.name}</h4>
        </div>
        <Link
          to={`/user/${id}`}
          className="w-10 ml-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-400 hover:border-red-300 hover:text-red-400 transition"
        >
          <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  )
}

export default Card
