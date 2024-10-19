import React from 'react';


export const Contacto = () => {
  return (
    <>
      <div
        className="bg-gray-800 relative flex justify-center items-center overflow-hidden">
        <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6 max-w-md mx-auto">
          <h1 className="text-4xl font-bold text-center mb-6">Contacto</h1>
          <p className="text-center mb-4">Si deseas ponerte en contacto, puedes encontrarme en las siguientes plataformas:</p>
          <div className="flex justify-center space-x-4">
            <a href="https://wa.me/tu_numero_de_whatsapp" target="_blank" rel="noopener noreferrer">
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">WhatsApp</button>
            </a>
            <a href="https://github.com/tu_usuario" target="_blank" rel="noopener noreferrer">
              <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition">GitHub</button>
            </a>
            <a href="https://facebook.com/tu_usuario" target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition">Facebook</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
