import React, { useRef } from 'react';
import './Inicio.css';
import { FaWhatsapp, FaGithub, FaLinkedin, FaThumbsUp } from 'react-icons/fa';
import image from '../../assets/image/Eliana.jpeg'; 
import Waves from '../../components/Waves';

export const Inicio = () => {
  const nextSectionRef = useRef(null);

  const handleScroll = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Contenedor principal */}
      <div className="min-h-screen bg-gray-800 flex flex-col md:flex-row justify-center items-center relative overflow-hidden p-6">
        
        {/* Contenido textual */}
        <div className="w-full md:w-1/2 text-center mb-8 md:mb-0 px-4 z-10">
          <p className="text-5xl md:text-4xl text-white mb-4 glow-text">
            <FaThumbsUp className="inline-block mb-1" /> Hola, Soy Eliana Paredes
          </p>
          <hr className="border-t-2 border-gray-600 my-4 w-1/2 mx-auto" />
          <div className="text-4xl md:text-3xl text-white mb-4 typing-effect font-poppins">
            Web Developer
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://wa.me/3114220469" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-white text-3xl md:text-2xl hover:text-green-400" />
            </a>
            <a href="https://github.com/Eli0024" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white text-3xl md:text-2xl hover:text-gray-400" />
            </a>
            <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white text-3xl md:text-2xl hover:text-blue-400" />
            </a>
          </div>
        </div>

        {/* Imagen */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-4 md:mt-0 z-10">
          <img
            src={image}
            alt="Eliana Paredes"
            className="w-2/3 md:w-1/2 lg:w-96 h-auto rounded-full object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Componente Waves abajo del contenido */}
      <div className="relative">
        <Waves />
      </div>
    </>
  );
};
