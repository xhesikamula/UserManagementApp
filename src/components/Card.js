
import React from 'react';
import { Link } from 'react-router-dom';

function Card({ id, name, email, company }) {
  return (
    <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md hover:bg-gray-200 hover:border-gray-300 transition duration-200 transform hover:scale-105 font-serif">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-[#000919]">{name}</h3>
          <h4 className="text-sm text-gray-700">{email}</h4>
          <h4 className="text-sm text-gray-600">{company?.name || 'N/A'}</h4>
        </div>
        <Link
          to={`/users/${id}`}
          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-[#000919] hover:bg-[#000919] hover:text-white transition"
        >
          <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
}

export default Card;
