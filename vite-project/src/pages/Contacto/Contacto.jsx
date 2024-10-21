import React from 'react';

export const Contacto = () => {
  return (
    <div className="h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto transform transition-all duration-300 hover:shadow-xl hover:scale-105">
        <h1 className="text-5xl font-bold text-center mb-6 text-gray-800">Contacto</h1>
        <p className="text-center mb-4 text-gray-700">
          ¡Me encantaría saber de ti! Conéctate conmigo en las siguientes plataformas:
        </p>
        <div className="flex justify-center space-x-4 mt-6">
          <a href="https://wa.me/tu_numero_de_whatsapp" target="_blank" rel="noopener noreferrer">
            <button className="bg-green-500 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:bg-green-600 hover:scale-110">
              WhatsApp
            </button>
          </a>
          <a href="https://github.com/tu_usuario" target="_blank" rel="noopener noreferrer">
            <button className="bg-gray-800 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:bg-gray-700 hover:scale-110">
              GitHub
            </button>
          </a>
          <a href="https://facebook.com/tu_usuario" target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:bg-blue-500 hover:scale-110">
              Facebook
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
