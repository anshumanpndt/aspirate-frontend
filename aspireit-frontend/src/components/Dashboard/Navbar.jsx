// src/components/Dashboard/Navbar.jsx
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <div className="flex justify-end p-4 bg-white shadow">
      <button onClick={toggleTheme} className="text-gray-700 focus:outline-none">
        {theme === 'dark' ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
};

export default Navbar;
