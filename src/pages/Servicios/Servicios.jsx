import React, { useEffect } from 'react';
import { Data } from '../../data/servicios';
import { FaBriefcase, FaHeart, FaTools, FaDatabase, FaLaptop, FaCog } from 'react-icons/fa'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

// Mapeo de íconos según los servicios
const iconMapping = {
  "Desarrollo de Aplicaciones Web": <FaLaptop className="text-blue-500 w-16 h-16 md:w-20 md:h-20" />,
  "Análisis de Sistemas": <FaHeart className="text-red-500 w-16 h-16 md:w-20 md:h-20" />,
  "Integración de APIs": <FaBriefcase className="text-green-500 w-16 h-16 md:w-20 md:h-20" />,
  "Mantenimiento de Software": <FaTools className="text-yellow-500 w-16 h-16 md:w-20 md:h-20" />,
  "Administración de Bases de Datos": <FaDatabase className="text-purple-500 w-16 h-16 md:w-20 md:h-20" />,
  "Implementación de Sistemas Operativos": <FaCog className="text-orange-500 w-16 h-16 md:w-20 md:h-20" />
};

export const Servicios = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div 
      id="servicios" // Asegúrate de que el ID coincida con el link del navbar
      className="min-h-screen bg-gray-800"
      data-aos="fade-up"
    >
      <h1 className="text-2xl md:text-4xl font-bold font-poppins pt-24 text-white pb-2 text-center">
        Servicios
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto p-4">
        {Data.servicios.map((servicio) => (
          <div 
            key={servicio.id} 
            className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
          >
            <div className="flex items-center space-x-2">
              {iconMapping[servicio.titulo]} {/* Muestra el ícono correspondiente */}
              <h3 className="text-xl md:text-lg font-poppins text-center font-semibold text-gray-800">{servicio.titulo}</h3>
            </div>
            <p className="font-poppins mt-4 text-center text-lg md:text-sm text-gray-800">{servicio.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
