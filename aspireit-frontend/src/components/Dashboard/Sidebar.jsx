// src/components/Dashboard/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaChartBar, FaDollarSign, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = ({ logout }) => {
  return (
    <div className="bg-white shadow-lg h-full p-5 w-64">
      <h1 className="text-2xl font-bold mb-10 text-center">Aspireit</h1>
      <nav className="flex flex-col space-y-4">
        <Link to="/dashboard" className="flex items-center text-gray-700 hover:text-indigo-600">
          <FaHome className="mr-2" /> Home
        </Link>
        <Link to="/dashboard/children" className="flex items-center text-gray-700 hover:text-indigo-600">
          <FaUser className="mr-2" /> Children
        </Link>
        <Link to="/dashboard/finances" className="flex items-center text-gray-700 hover:text-indigo-600">
          <FaDollarSign className="mr-2" /> Finances
        </Link>
        <Link to="/dashboard/charts" className="flex items-center text-gray-700 hover:text-indigo-600">
          <FaChartBar className="mr-2" /> Charts
        </Link>
        <button onClick={logout} className="flex items-center text-gray-700 hover:text-red-600 mt-auto">
          <FaSignOutAlt className="mr-2" /> Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
