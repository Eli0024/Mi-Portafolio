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
  };

  useEffect(() => {
    AOS.init({duration:2000})
}, []);

  return (
    <div className="bg-gray-800 h-screen  flex justify-center items-center p-4" data-aos="flip-right">
      <div className="w-full max-w-4xl">
        <h2 className="text-4xl font-semibold text-gray-100 mb-4 text-center font-poppins">Mis Estudios Y Experiencia</h2>

        <Slider {...settings}>
          {/* Carrusel de Educación */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-poppins font-semibold pb-4 text-center text-gray-100">EDUCACION</h3>
            <div className="flex flex-col items-center space-y-4">
              {Data.educacion.map((estudio, index) => (
                <div key={index} className="bg-white p-4 rounded-lg transition duration-300 hover:shadow-lg w-full max-w-md">
                  <span className="block text-xl font-semibold text-center font-poppins text-gray-800">{estudio.titulo}</span>
                  <p className="text-blue-800 font-bold text-center font-poppins text-xl">{estudio.anio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Carrusel de Experiencia */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold pb-2 text-center text-gray-100">EXPERIENCIA</h3>
            <div className="flex flex-col items-center space-y-4">
              {Data.experiencia.map((experiencia, index) => (
                <div key={index} className="bg-white p-4 rounded-lg transition duration-300 hover:shadow-lg w-full max-w-md">
                  <span className="block text-xl font-semibold text-gray-800 text-center font-poppins">{experiencia.titulo}</span>
                  <p className="text-gray-800 text-center text-xl font-poppins">NIT: {experiencia.nit}</p>
                  <p className="text-gray-800 text-center text-xl font-poppins">{experiencia.anio}</p>
                  <p className="text-gray-800 text-center text-xl font-poppins">Cargo: {experiencia.cargo}</p>
                </div>
              ))}
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
