import React, { useEffect } from 'react';
import { Data } from "../../data/proyecto";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Proyectos = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="bg-white h-screen m-20 flex flex-col items-center" data-aos="zoom-in">
      <h1 className="text-6xl font-bold font-poppins pb-6 text-center mb-4">
        Mis Proyectos
      </h1>
      <div className="flex flex-wrap justify-center">
        {Data.proyectos.map((proyecto, index) => (
          <div key={index} className="card-body w-full sm:w-1/2 md:w-1/3 lg:w-2/5 p-4">
            <div className="relative overflow-hidden bg-gray-200 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <figure className="relative">
                <img
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  className="m-auto w-full h-64 object-cover" // Ajusta el tamaño de la imagen
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <h2 className="font-bold">{proyecto.titulo}</h2>
                  <p className="text-sm">{proyecto.descripcion}</p>
                </div>
              </figure>
              <div className="p-4">
                <p className="text-sky-500 text-3xl text-center">
                  {proyecto.anio}
                </p>
                <div className="card-actions flex justify-center m-2">
                  <a href={proyecto.link} className="inline-block px-6 py-2 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition duration-300">
                    Learn now!
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
