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
          <img src={image} alt="Eliana Paredes" className="w-64 h-64 rounded-full object-cover shadow-lg" />
        </div>

        {/* Tarjeta para la Información */}
        <div className="bg-transparent rounded-2xl p-8 flex flex-col w-full md:w-2/3">
          <h1 className="text-5xl text-center font-bold text-white mb-4">
            <span className="bg-transparent px-2">SOBRE</span> 
            <span className="bg-red-500 text-white px-2">MI</span>
          </h1>
          <p className="text-xl text-yellow-500 text-center mb-4">{Data.introduccion.saludo}</p>
          <p className="text-lg text-white mb-4">{Data.introduccion.texto}</p>
          <p className="text-lg text-white mb-4">
            <strong>Tecnologías:</strong> {Data.introduccion.experiencia.join(', ')}
          </p>
          <p className="text-lg text-white mb-4">{Data.introduccion.habilidades}</p>
          <p className="text-lg text-white mb-4">{Data.disposicion.texto}</p>
        </div>
      </div>
    </div>
  );
};
