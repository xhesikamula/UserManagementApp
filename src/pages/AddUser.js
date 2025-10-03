import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

//new users will be added based on alphabetical order
function AddUser() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: { lat: '', lng: '' },
    },
  });
  const [errors, setErrors] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('address.')) {
      const addressField = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        address: { ...prev.address, [addressField]: value },
      }));
    } else if (name.includes('geo.')) {
      const geoField = name.split('.')[2];
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          geo: { ...prev.address.geo, [geoField]: value },
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (name === 'name' || name === 'email') {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

const handleSubmit = (e) => {
  e.preventDefault();
  if (validateForm()) {
    const newUser = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone || '',
      website: formData.website || '',
      address: {
        ...formData.address,
        geo: {
          lat: formData.address.geo.lat || '0',
          lng: formData.address.geo.lng || '0',
        },
      },
      company: { name: '', catchPhrase: '', bs: '' }, 
    };

    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = [newUser, ...existingUsers];
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    setFormData({
      name: '',
      email: '',
      phone: '',
      website: '',
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: { lat: '', lng: '' },
      },
    });
    alert('User added successfully!');
  }
};

  const users = JSON.parse(localStorage.getItem('users') || '[]');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6 font-serif">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#000919] border-b-2 border-gray-200 pb-2">
            Add New User
          </h1>
          <Link
            to="/users"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Back to Users
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-b border-gray-200 pb-4">
            <h2 className="text-xl font-semibold text-[#000919] mb-4">Personal Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-600 font-medium mb-1" htmlFor="name">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1" htmlFor="email">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1" htmlFor="phone">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1" htmlFor="website">
                  Website
                </label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#000919] mb-4">Address</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-600 font-medium mb-1" htmlFor="address.street">
                  Street
                </label>
                <input
                  type="text"
                  id="address.street"
                  name="address.street"
                  value={formData.address.street}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1" htmlFor="address.suite">
                  Suite
                </label>
                <input
                  type="text"
                  id="address.suite"
                  name="address.suite"
                  value={formData.address.suite}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1" htmlFor="address.city">
                  City
                </label>
                <input
                  type="text"
                  id="address.city"
                  name="address.city"
                  value={formData.address.city}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1" htmlFor="address.zipcode">
                  Zipcode
                </label>
                <input
                  type="text"
                  id="address.zipcode"
                  name="address.zipcode"
                  value={formData.address.zipcode}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-600 font-medium mb-1" htmlFor="address.geo.lat">
                    Latitude
                  </label>
                  <input
                    type="text"
                    id="address.geo.lat"
                    name="address.geo.lat"
                    value={formData.address.geo.lat}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-medium mb-1" htmlFor="address.geo.lng">
                    Longitude
                  </label>
                  <input
                    type="text"
                    id="address.geo.lng"
                    name="address.geo.lng"
                    value={formData.address.geo.lng}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-600 text-white font-semibold py-2 rounded-md hover:bg-[#000919] transition"
          >
            Add User
          </button>
        </form>

        {users.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-[#000919] mb-4">Added Users</h2>
            <ul className="space-y-4">
              {users.map((user) => (
                <li key={user.id} className="border border-gray-200 rounded-md p-4">
                  <p>
                    <span className="font-medium">Name:</span> {user.name}
                  </p>
                  <p>
                    <span className="font-medium">Email:</span>{' '}
                    <a href={`mailto:${user.email}`} className="text-blue-600 hover:underline">
                      {user.email}
                    </a>
                  </p>
                  {user.phone && (
                    <p>
                      <span className="font-medium">Phone:</span>{' '}
                      <a href={`tel:${user.phone}`} className="text-blue-600 hover:underline">
                        {user.phone}
                      </a>
                    </p>
                  )}
                  {user.website && (
                    <p>
                      <span className="font-medium">Website:</span>{' '}
                      <a
                        href={`http://${user.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {user.website}
                      </a>
                    </p>
                  )}
                  <p>
                    <span className="font-medium">Address:</span>{' '}
                    {user.address.street}, {user.address.suite}, {user.address.city},{' '}
                    {user.address.zipcode} (Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng})
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddUser;