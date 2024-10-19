import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800  p-6 text-2xl mx-auto flex justify-end h-20 ">
    
        <ul className="flex space-x-4 text-white">
          <li><a href="#home" className="hover:text-gray-400 pr-8">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400 pr-8">About</a></li>
          <li><a href="#about" className="hover:text-gray-400 pr-8">Study</a></li>
          <li><a href="#services" className="hover:text-gray-400 pr-8">Projects</a></li>
          <li><a href="#services" className="hover:text-gray-400 pr-8">Services</a></li>
          <li><a href="#contact" className="hover:text-gray-400 pr-8">Contact</a></li>
        </ul>
    
    </nav>
  );
};

export default Navbar;
