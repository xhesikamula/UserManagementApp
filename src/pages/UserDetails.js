import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 1. this will check local storage first
    const localUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const localUser = localUsers.find(u => String(u.id) === id);

    if (localUser) {
      setUser(localUser);
      return; // stop here, no need to fetch from API
    }

    // 2. otherwise fetch from API, if not found on local storage 
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        if (response.status === 200) {
          setUser(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
        setError('Failed to fetch user details');
      });
  }, [id]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white rounded-lg shadow p-8 text-red-600 font-serif">
          {error}
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white rounded-lg shadow p-8 text-gray-600 font-serif">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6 font-serif">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-[#000919] mb-8 border-b-2 border-gray-200 pb-2">
          User Profile
        </h1>

        <div className="space-y-6">
          {}
          <div className="border-b border-gray-200 pb-4">
            <h2 className="text-xl font-semibold text-gray-700 flex items-center mb-4">
              <i className="fa-solid fa-location-dot"></i>
              Address
            </h2>
            <div className="space-y-2 text-gray-600">
              <p><span className="font-medium">Street:</span> {user.address?.street || "N/A"}</p>
              <p><span className="font-medium">Suite:</span> {user.address?.suite || "N/A"}</p>
              <p><span className="font-medium">City:</span> {user.address?.city || "N/A"}</p>
              <p><span className="font-medium">Zipcode:</span> {user.address?.zipcode || "N/A"}</p>
              <p><span className="font-medium">Coordinates:</span> Lat: {user.address?.geo?.lat || "N/A"}, Lng: {user.address?.geo?.lng || "N/A"}</p>
            </div>
          </div>

          {}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 flex items-center mb-4">
              <i className="fa-regular fa-envelope"></i>
              Contact Information
            </h2>
            <div className="space-y-2 text-gray-600">
              <p>
                <span className="font-medium">Phone:</span>{' '}
                {user.phone ? (
                  <a href={`tel:${user.phone}`} className="text-blue-600 hover:underline">
                    {user.phone}
                  </a>
                ) : "N/A"}
              </p>
              <p>
                <span className="font-medium">Website:</span>{' '}
                {user.website ? (
                  <a
                    href={`http://${user.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {user.website}
                  </a>
                ) : "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
