import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Asset/photo_5834588183013213769_x.jpg'; // Make sure to replace this with the correct path to your image file

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-blue-400 p-4 fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-10 mr-4" />
          <h1 className="text-green text-xl font-bold">Keyway-dispatch Company Management System</h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-green px-4 hover:underline">Home</Link>
          <Link to="/authform" className="text-green px-4 hover:underline">Admin Dashboard</Link>
          <Link to="/team-leader" className="text-green px-4 hover:underline">Team Leader Dashboard</Link>
          <Link to="/employee" className="text-green px-4 hover:underline">Employee Dashboard</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-green focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-400 mt-2 p-4 space-y-4">
          <Link to="/" className="block text-green hover:underline" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/admin" className="block text-green hover:underline" onClick={closeMenu}>
            Admin Dashboard
          </Link>
          <Link to="/team-leader" className="block text-green hover:underline" onClick={closeMenu}>
            Team Leader Dashboard
          </Link>
          <Link to="/employee" className="block text-green hover:underline" onClick={closeMenu}>
            Employee Dashboard
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
