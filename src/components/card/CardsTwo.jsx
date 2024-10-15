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
      className="relative flex items-center justify-center p-8 h-screen bg-gray-100"
      style={{
        backgroundImage: `url(${Celular})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        boxShadow: "1px 1px 10px black",
      }}
    >
      {/* Overlay con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80 z-0"></div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl text-center">
        {/* Título */}
        <h2 className="pb-10 text-3xl lg:text-4xl font-extrabold text-white">
          ¿Qué necesitas para solicitar un crédito?
        </h2>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
          {/* Tarjeta 1 */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <FaUserAlt className="text-blue-600 text-6xl mb-6" />
            <p className="text-center text-gray-800 text-lg font-semibold">
              Ser colombiano mayor de edad (18 años) y vivir en Colombia
            </p>
          </div>

          {/* Tarjeta 2 */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <FaPiggyBank className="text-blue-600 text-6xl mb-6" />
            <p className="text-center text-gray-800 text-lg font-semibold">
              Ser titular de una cuenta bancaria activa y a tu nombre
            </p>
          </div>

          {/* Tarjeta 3 */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <FaEnvelope className="text-blue-600 text-6xl mb-6" />
            <p className="text-center text-gray-800 text-lg font-semibold">
              Tener una cuenta de e-mail personal activa
            </p>
          </div>

          {/* Tarjeta 4 */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <FaMobileAlt className="text-blue-600 text-6xl mb-6" />
            <p className="text-center text-gray-800 text-lg font-semibold">
              Tener un número celular activo
            </p>
          </div>
        </div>

        {/* Botón de WhatsApp */}
        <div className="flex justify-center mt-12">
          <a
            href="https://wa.me/your-phone-number"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 bg-gradient-to-r from-green-400 to-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
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
