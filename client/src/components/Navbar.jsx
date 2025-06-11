import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-[#0f0f0f] text-black dark:text-white px-6 py-4 shadow-lg border-b border-gray-300 dark:border-[#2a2a2a] sticky top-0 z-50 transition-colors duration-300">
      <div className="flex items-center justify-between">

        {/* 🖼️ Logo on the Left with Padding */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Itrika Logo"
            className="h-20 w-64 md:h-24 md:w-80 object-contain transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* 🌗 Dark Mode Toggle on the Right */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle Dark Mode"
          className={`inline-flex items-center justify-center px-4 py-2 rounded-full font-medium text-white transition-all duration-300 ease-in-out
            ${darkMode ? 'bg-yellow-500 hover:bg-yellow-400 shadow-md' : 'bg-gray-800 hover:bg-gray-700 shadow-md'}
          `}
        >
          <span className="transition-transform duration-300 ease-in-out transform hover:scale-105">
            {darkMode ? 'Light Mode 🌞' : 'Dark Mode 🌙'}
          </span>
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
