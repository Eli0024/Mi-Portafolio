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
    <div className="bg-gray-800 h-screen flex justify-center items-start p-4">
      <div className="w-full max-w-6xl m-20">
        <h2 className="text-6xl font-semibold text-gray-100 mb-8 text-center font-poppins">Mis Estudios Y Experiencia</h2>

        <Slider {...settings}>
          {/* Carrusel de Educación */}
          <div>
            <h3 className="text-4xl font-poppins font-semibold pb-8 m-20 text-center text-gray-100 mb-4">EDUCACION</h3>
            <ul className="space-y-6">
              {Data.educacion.map((estudio, index) => (
                <li key={index} className="bg-white p-6 rounded-lg mb-4 transition duration-300 hover:shadow-lg">
                  <span className="block text-4xl font-semibold text-center font-poppins text-gray-800">{estudio.titulo}</span>
                  <p className="text-blue-800 font-bold text-center font-poppins text-2xl">{estudio.anio}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Carrusel de Experiencia */}
          <div>
            <h3 className="text-4xl font-semibold m-20 pb-8 text-center text-gray-100 mb-4 font-poppins">EXPERIENCIA</h3>
            <ul className="space-y-6">
              {Data.experiencia.map((experiencia, index) => (
                <li key={index} className="bg-white p-6 rounded-lg mb-4 transition duration-300 hover:shadow-lg">
                  <span className="block text-4xl font-semibold text-gray-800 text-center font-poppins">{experiencia.titulo}</span>
                  <br />
                  <p className="text-gray-800 text-center text-2xl font-poppins">NIT: {experiencia.nit}</p>
                  <p className="text-gray-800 text-center text-2xl font-poppins">{experiencia.anio}</p>
                  <p className="text-gray-800 text-center text-2xl font-poppins">Cargo: {experiencia.cargo}</p>
                </li>
              ))}
            </ul>
          </div>
        </Slider>
      </div>
    </div>
  );
}
