import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar bg-gray-800 text-white h-20 px-4 md:px-8 flex justify-between items-center fixed w-full z-50 shadow-md">
      
      {/* Botón Hamburguesa */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white text-3xl focus:outline-none">
          {isOpen ? '✖️' : '☰'}
        </button>
      </div>

      {/* Menú de navegación */}
      <ul
        className={`${
          isOpen ? 'flex' : 'hidden'
        } flex-col md:flex md:flex-row md:space-x-6 space-y-4 md:space-y-0 absolute md:static top-20 left-0 w-full md:w-auto bg-gray-800 px-4 md:px-0 py-4 md:py-0 z-50 transition-all duration-300 ease-in-out text-xl`}
      >
        <li>
          <Link
            to="inicio"
            smooth={true}
            duration={500}
            className="cursor-pointer font-poppins hover:text-sky-400"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="sobre"
            smooth={true}
            duration={500}
            className="cursor-pointer font-poppins hover:text-sky-400"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="estudios"
            smooth={true}
            duration={500}
            className="cursor-pointer font-poppins hover:text-sky-400"
          >
            Study
          </Link>
        </li>
        <li>
          <Link
            to="skils"
            smooth={true}
            duration={500}
            className="cursor-pointer font-poppins hover:text-sky-400"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="proyectos"
            smooth={true}
            duration={500}
            className="cursor-pointer font-poppins hover:text-sky-400"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="servicios"
            smooth={true}
            duration={500}
            className="cursor-pointer font-poppins hover:text-sky-400"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="contacto"
            smooth={true}
            duration={500}
            className="cursor-pointer font-poppins hover:text-sky-400"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
