import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { Data } from '../../data/estudios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Estudios = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Oculta flechas para diseño más limpio en móviles
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      className="bg-gray-800 min-h-screen py-20 flex justify-center items-center px-4"
      data-aos="flip-right"
      id="estudios"
    >
      <div className="w-full max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-white font-poppins mb-8">
          Mis Estudios y Experiencia
        </h2>

        <Slider {...settings}>
          {/* EDUCACIÓN */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl md:text-3xl font-poppins font-semibold text-center text-gray-100 mb-6">
              EDUCACIÓN
            </h3>
            <div className="flex flex-col items-center space-y-4">
              {Data.educacion.map((estudio, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg w-full max-w-md"
                >
                  <span className="block text-xl font-semibold text-center font-poppins text-gray-800">
                    {estudio.titulo}
                  </span>
                  <p className="text-blue-800 font-bold text-center text-lg">{estudio.anio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* EXPERIENCIA */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl md:text-3xl font-poppins font-semibold text-center text-gray-100 mb-6">
              EXPERIENCIA
            </h3>
            <div className="flex flex-col items-center space-y-4">
              {Data.experiencia.map((experiencia, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg w-full max-w-md"
                >
                  <span className="block text-xl font-semibold text-center font-poppins text-gray-800">
                    {experiencia.titulo}
                  </span>
                  <p className="text-gray-800 text-center text-lg font-poppins">
                    NIT: {experiencia.nit}
                  </p>
                  <p className="text-gray-800 text-center text-lg font-poppins">
                    {experiencia.anio}
                  </p>
                  <p className="text-gray-800 text-center text-lg font-poppins">
                    Cargo: {experiencia.cargo}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
