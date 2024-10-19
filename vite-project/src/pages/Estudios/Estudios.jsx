import React from 'react';
import { Data } from '../../data/estudios'; 
export const Estudios = () => {
  return (
    <>
      <div
        className="bg-gray-800 relative flex justify-center items-center overflow-hidden">
        <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">Mis Estudios</h1>
          <ul className="space-y-4">
            {Data.educacion.map((estudio, index) => (
              <li key={index} className="flex flex-col md:flex-row justify-between items-start p-4 border-b border-gray-300">
                <span className="text-xl font-semibold">{estudio.titulo}</span>
                <span className="text-white">{estudio.estado ? estudio.estado : estudio.anio}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
