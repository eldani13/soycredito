import React from "react";
import {
  FaUserAlt,
  FaPiggyBank,
  FaEnvelope,
  FaMobileAlt,
  FaWhatsapp,
} from "react-icons/fa";

import Celular from "../../img/Celular.png";

const CardsTwo = () => {
  return (
    <div
      className="relative flex items-center justify-center p-8 bg-gray-100 h-screen"
      style={{
        backgroundImage: `url(${Celular})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        boxShadow: '1px 1px 10px black', 
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl text-center">
        <h2 className="pb-10 text-2xl lg:text-3xl font-bold text-white">
          ¿Qué necesitas para solicitar un crédito?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaUserAlt className="text-[#0000ff] text-5xl mb-4" />
            <p className="text-center text-gray-700 font-medium">
              Ser colombiano mayor de edad (18 años) y vivir en Colombia
            </p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaPiggyBank className="text-[#0000ff] text-5xl mb-4" />
            <p className="text-center text-gray-700 font-medium">
              Ser titular de una cuenta bancaria activa y a tu nombre
            </p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaEnvelope className="text-[#0000ff] text-5xl mb-4" />
            <p className="text-center text-gray-700 font-medium">
              Tener una cuenta de e-mail personal activa
            </p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaMobileAlt className="text-[#0000ff] text-5xl mb-4" />
            <p className="text-center text-gray-700 font-medium">
              Tener un número celular activo
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <a
            href="https://wa.me/your-phone-number"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-green-500 text-white font-bold py-2 px-6 rounded-full hover:bg-green-600 transition duration-300 ease-in-out"
          >
            <FaWhatsapp className="w-6 h-6" />
            <span>Solicita tu crédito</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardsTwo;
