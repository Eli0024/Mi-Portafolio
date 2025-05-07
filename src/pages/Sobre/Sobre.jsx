import React, { useEffect } from 'react';
import { Data } from '../../data/info';
import './Sobre.css';
import image from '../../assets/image/Learn.jpg'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Sobre = () => {
  
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div 
      id="next-section" 
      data-aos="fade-down" 
      className="animation h-screen bg-gray-800 flex items-center justify-center" // Aumenta mt-36 o más
    >
      <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-6 transition-opacity duration-700 w-full px-4">
        
        {/* Tarjeta para el Avatar */}
        <div className="flex justify-center mb-6 md:mb-0 w-full md:w-1/2">
          <img src={image} alt="Eliana Paredes" className="w-full rounded-lg object-cover shadow-lg" />
        </div>

        {/* Tarjeta para la Información */}
        <div className="bg-transparent rounded-2xl p-8 flex flex-col w-full md:w-2/3">
          <h1 className="text-4xl md:text-xl text-center font-bold text-white mb-4">
            <span className="bg-transparent px-2 font-poppins">SOBRE</span> 
            <span className="bg-red-500 text-white px-2 font-poppins">MI</span>
          </h1>
          <hr className="bg-green-400 border-4 mb-8 mt-6" />
          <p className="text-xl md:text-2xl text-white mb-6 text-justify font-poppins">{Data.introduccion.texto}</p>
          <p className="text-xl md:text-2xl text-white mb-6 text-justify font-poppins">{Data.introduccion.habilidades}</p>
          <p className="text-xl md:text-2xl text-white mb-6 text-justify font-poppins">{Data.disposicion.texto}</p>
        </div>
      </div>
    </div>
  );
};
