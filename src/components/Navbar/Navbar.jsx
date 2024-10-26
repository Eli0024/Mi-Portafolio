import React from 'react';
import { Link } from 'react-scroll'; 
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar bg-gray-800 p-6 text-2xl mx-auto flex justify-end h-20 scroll-mt-4 cursor-pointer">
      <ul className="flex space-x-4 text-white">
        <li>
          <Link to="inicio" smooth={true} duration={500} className="font-poppins pr-8 text-4xl">
            Home
          </Link>
        </li>
        <li>
          <Link to="sobre" smooth={true} duration={500} className="font-poppins pr-8 text-4xl">
            About
          </Link>
        </li>
        <li>
          <Link to="estudios" smooth={true} duration={500} className="font-poppins pr-8 text-4xl">
            Study
          </Link>
        </li>
        <li>
          <Link to="skils" smooth={true} duration={500} className="font-poppins pr-8 text-4xl">
            Skills
          </Link>
        </li>
        <li>
          <Link to="proyectos" smooth={true} duration={500} className="font-poppins pr-8 text-4xl">
            Projects
          </Link>
        </li>
        <li>
          <Link to="servicios" smooth={true} duration={500} className="font-poppins pr-8 text-4xl">
            Services
          </Link>
        </li>
        <li>
          <Link to="contacto" smooth={true} duration={500} className="font-poppins pr-8 text-4xl">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
