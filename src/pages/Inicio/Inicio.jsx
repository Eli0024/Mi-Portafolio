import React, {useRef} from 'react';
import './Inicio.css';
import { FaWhatsapp, FaGithub, FaInstagram, FaLinkedin, FaThumbsUp, FaArrowDown } from 'react-icons/fa';
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
      <div className="h-screen bg-gray-800 flex justify-center items-center relative overflow-hidden">
        <div className="h-full flex flex-col justify-center items-center relative z-10">
          <div className="text-center">
            <p className="text-8xl text-white mb-2 glow-text">
              <FaThumbsUp className="inline-block mb-1" /> Hola, Soy Eliana Paredes
            </p>
            <hr className="w- border-t-2 border-gray-600 my-4" />
            <div className="text-6xl text-white mb-2 typing-effect font-poppins">
              Web Developer
            </div>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="https://wa.me/3114220469" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-white text-6xl hover:text-green-400" />
              </a>
              <a href="https://github.com/Eli0024" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-white text-6xl hover:text-gray-400" />
              </a>
              <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-white text-6xl hover:text-blue-400" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img src={image} alt="Descripción de la imagen" className="w-96 h-auto rounded-full object-cover shadow-lg" />
        </div>

        {/* Componente de Ondas */}
        <Waves />

        {/* Flecha hacia abajo */}
        <div className="absolute bottom-10 flex flex-col items-center cursor-pointer" onClick={handleScroll}>
          <FaArrowDown className="text-gray-800 text-3xl animate-bounce" />
          <p className="text-gray-800 text-sm mt-2">Desplázate hacia abajo</p>
        </div>
      </div>
    </>
  );
};
