import React from 'react';
import { Data } from '../../data/proyecto'; 

export const Proyectos = () => {
  return (
    <>
      <div
        className="bg-gray-800 relative flex justify-center items-center overflow-hidden">
        <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">Mis Proyectos</h1>
          <ul className="space-y-4">
            {Data.proyectos.map((proyecto, index) => (
              <li key={index} className="flex flex-col md:flex-row justify-between items-start p-4 border-b border-gray-300">
                <div className="flex flex-col">
                  <span className="text-xl font-semibold">{proyecto.titulo}</span>
                  <span className="text-white">{proyecto.descripcion}</span>
                </div>
                <span className="text-white">{proyecto.anio}</span>
                <a href={proyecto.link} className="text-blue-500 hover:underline mt-2 md:mt-0 md:ml-4" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
