import React from 'react';
import Slider from 'react-slick';
import { Data } from '../../data/estudios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Estudios = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-gray-800 min-h-screen flex justify-center items-start p-4">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-gray-100 mb-8 text-center">Mis Estudios y Experiencia</h2>

        <Slider {...settings}>
          {/* Carrusel de Educación */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-100 mb-4">Educación</h3>
            <ul className="space-y-6">
              {Data.educacion.map((estudio, index) => (
                <li key={index} className="bg-gray-700 p-6 rounded-lg mb-4 transition duration-300 hover:shadow-lg">
                  <span className="block text-2xl font-semibold text-gray-200">{estudio.titulo}</span>
                  <span className="text-gray-400 text-lg">{estudio.anio}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Carrusel de Experiencia */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-100 mb-4">Experiencia</h3>
            <ul className="space-y-6">
              {Data.experiencia.map((experiencia, index) => (
                <li key={index} className="bg-gray-700 p-6 rounded-lg mb-4 transition duration-300 hover:shadow-lg">
                  <span className="block text-2xl font-semibold text-gray-200">{experiencia.titulo}</span>
                  <span className="text-gray-400 text-lg">NIT: {experiencia.nit}</span>
                  <span className="text-gray-400 text-lg">{experiencia.anio}</span>
                  <span className="text-gray-400 text-lg">Cargo: {experiencia.cargo}</span>
                </li>
              ))}
            </ul>
          </div>
        </Slider>
      </div>
    </div>
  );
}
