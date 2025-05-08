import React, { useState } from 'react';
import { Link } from 'react-scroll'; 
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar  bg-gray-800 p-2 text-2xl mx-auto flex justify-end items-center h-20 scroll-mt-4 cursor-pointer">
      <div className="md:hidden" onClick={toggleMenu}>
        <button className="text-white focus:outline-none">
          {isOpen ? '✖️' : '☰'}
        </button>
      </div>
      <ul className={`md:flex space-x-4 text-white ${isOpen ? 'block' : 'hidden'} md:block absolute md:static bg-gray-800 left-0 top-20 w-full md:w-auto`}>
        <li>
          <Link to="inicio" smooth={true} duration={500} className="font-poppins pr-8 text-2xl">
            Home
          </Link>
        </li>
        <li>
          <Link to="sobre" smooth={true} duration={500} className="font-poppins pr-8 text-2xl">
            About
          </Link>
        </li>
        <li>
          <Link to="estudios" smooth={true} duration={500} className="font-poppins pr-8 text-2xl">
            Study
          </Link>
        </li>
        <li>
          <Link to="skils" smooth={true} duration={500} className="font-poppins pr-8 text-2xl">
            Skills
          </Link>
        </li>
        <li>
          <Link to="proyectos" smooth={true} duration={500} className="font-poppins pr-8 text-2xl">
            Projects
          </Link>
        </li>
        <li>
          <Link to="servicios" smooth={true} duration={500} className="font-poppins pr-8 text-2xl">
            Services
          </Link>
        </li>
        <li>
          <Link to="contacto" smooth={true} duration={500} className="font-poppins pr-8 text-2xl">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
