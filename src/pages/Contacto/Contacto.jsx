import React from 'react';
import './Contacto.css'

export const Contacto = () => {
  return (
    <div className="h-screen bg-gray-100 flex flex-col justify-center items-center p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="w-full h-full bg-gradient-to-r from-indigo-200 to-purple-200 opacity-30"></div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto transform transition-all duration-300 hover:shadow-xl hover:scale-105 border border-gray-200 z-10">
        <h1 className="text-6xl font-bold font-poppins text-center mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse">
          Contacto
        </h1>
        <p className="text-center mb-4 font-poppins text-4xl text-gray-700">
          ¡Me encantaría saber de ti! Conéctate conmigo en las siguientes plataformas:
        </p>
        <div className="flex justify-center space-x-4 mt-6">
          <a href="https://wa.me/3114220469" target="_blank" rel="noopener noreferrer">
            <button className="bg-green-500 text-4xl text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:bg-green-600 hover:scale-110 shadow-lg hover:shadow-xl animate-bounce">
              WhatsApp
            </button>
          </a>
          <a href="https://github.com/Eli0024" target="_blank" rel="noopener noreferrer">
            <button className="bg-gray-800 text-4xl text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:bg-gray-700 hover:scale-110 shadow-lg hover:shadow-xl animate-bounce">
              GitHub
            </button>
          </a>
        </div>
      </div>

      <div className="mt-10 text-center max-w-lg mx-auto z-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 animate-fadeIn">¿Por qué contactarme?</h2>
        <p className="text-gray-600 text-4xl font-poppins mb-6 animate-fadeIn">
          Estoy aquí para colaborar en proyectos interesantes, responder preguntas o simplemente conectar. 
          ¡No dudes en escribirme!
        </p>

      {/* Elementos decorativos */}
      <div className="absolute bottom-10 left-0 right-0 text-center">
        <div className="text-6xl text-gray-500 opacity-20">✨</div>
      </div>
    </div>
    </div>
  );
};

