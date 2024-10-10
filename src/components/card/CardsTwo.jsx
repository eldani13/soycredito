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
    <div className="flex flex-col items-center p-8 bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full ">
        <div>
          <h2 className="text-center pb-10 text-3xl transform transition duration-500">
            ¿Qué necesitas para solicitar un crédito?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <FaUserAlt className="text-[#0000ff] text-5xl mb-4" />
              <p className="text-center text-gray-700 font-medium">
                Ser colombiano mayor de edad (18 años) y vivir en Colombia
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <FaPiggyBank className="text-[#0000ff] text-5xl mb-4" />
              <p className="text-center text-gray-700 font-medium">
                Ser titular de una cuenta bancaria activa y a tu nombre
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <FaEnvelope className="text-[#0000ff] text-5xl mb-4" />
              <p className="text-center text-gray-700 font-medium">
                Tener una cuenta de e-mail personal activa
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
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

        <div className="flex justify-center items-center">
          <img
            src={Celular}
            alt="Celular"
            className="w-full h-full object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default CardsTwo;
