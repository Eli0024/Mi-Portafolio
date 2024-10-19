import React from 'react';
import { Data } from '../../data/servicios'; 

export const Servicios = () => {
  return (
    <>
      <div
        className=" bg-gray-800 relative flex justify-center items-center overflow-hidden">
        <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">Servicios Ofrecidos</h1>
          <ul className="space-y-4">
            {Data.servicios.map((servicio, index) => (
              <li key={index} className="flex flex-col md:flex-row justify-between items-start p-4 border-b border-gray-300">
                <div className="flex flex-col">
                  <span className="text-xl font-semibold">{servicio.titulo}</span>
                  <span className="text-gray-600">{servicio.descripcion}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
