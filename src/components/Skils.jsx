import React, { useEffect } from 'react';
import { Data } from '../data/Skills';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Skills = () => {
  useEffect(() => {
    AOS.init({duration:2000})
}, []);

  return (
    <div className="h-screen bg-gray-100 flex flex-col items-center justify-center p-8" data-aos="fade-right">
      <h1 className="text-8xl font-bold mt-10  text-center text-blue-600 animate-bounce">Tecnologías</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Data.skills.map(skill => (
          <div key={skill.titulo} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <img
              src={skill.imagen}
              alt={skill.titulo}
              className="object-contain w-32 h-32 mb-4" // Aumentar el tamaño de los iconos
            />
            <h2 className="text-2xl font-semibold text-gray-800">{skill.titulo}</h2> {/* Aumentar el tamaño del título */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
