import React, { useEffect } from 'react';
import { Data } from '../data/Skills';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      id="skils"
      className="scroll-mt-36 min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8"
      data-aos="fade-right"
    >
      <h1 className="text-4xl font-bold mt-9 text-center text-blue-600 animate-bounce">Tecnologías</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {Data.skills.map(skill => (
          <div
            key={skill.titulo}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <img
              src={skill.imagen}
              alt={skill.titulo}
              className="object-contain w-12 h-12 mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">{skill.titulo}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
