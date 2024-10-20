import React, { useEffect, useState } from 'react';
import { Data } from '../../data/info';
import './Sobre.css';
import image from '../../assets/image/Learn.jpg'; 

export const Sobre = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Iniciar la animación cuando el componente se monta
    setIsAnimated(true);
  }, []);

  return (
    <div id="next-section" className="h-screen bg-gray-800 flex items-center justify-center">
      <div className={`flex flex-col md:flex-row items-center justify-center space-x-6 transition-opacity duration-700 ${isAnimated ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Tarjeta para el Avatar */}
        <div className="flex justify-center mb-6 md:mb-0">
          <img src={image} alt="Eliana Paredes" className=" w-screen pl-6 rounded-lg object-cover shadow-lg" />
        </div>

        {/* Tarjeta para la Información */}
        <div className="bg-transparent rounded-2xl p-8 flex flex-col w-full md:w-2/3">
          <h1 className="text-5xl text-center font-bold text-white mb-4">
            <span className="bg-transparent px-2 font-poppins">SOBRE</span> 
            <span className="bg-red-500 text-white px-2 font-poppins">MI</span>
          </h1>
          <hr className="bg-green-400 border-4  mb-8 mt-6"/>
          <p className="text-4xl text-white mb-6 text-justify font-poppins">{Data.introduccion.texto}</p>
          <p className="text-4xl text-white mb-6 text-justify font-poppins" >{Data.introduccion.habilidades}</p>
          <p className="text-4xl text-white mb-6 text-justify font-poppins">{Data.disposicion.texto}</p>
        </div>
      </div>
    </div>
  );
};
