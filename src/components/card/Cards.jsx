import React from "react";
import { FaWhatsapp, FaCheckCircle, FaUserShield, FaHeadset } from "react-icons/fa";

function Cards() {
  return (
    <div className="py-10 px-5 bg-gray-100">
      <h1 className="text-center pb-10 text-3xl font-bold">Características de SoyCredito</h1>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div
          className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6 h-full transition duration-500 hover:scale-105 hover:shadow-2xl"
          data-aos="fade-up"
        >
          <div className="border-b-4 border-green-500 w-16 mb-4"></div>
          <FaWhatsapp className="text-5xl text-green-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Atención personalizada al instante</h3>
          <p className="text-gray-600 flex-grow">
            Recibe atención personalizada al instante. Estamos comprometidos en brindarte la mejor experiencia de atención al cliente.
          </p>
        </div>

        <div
          className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6 h-full transition duration-500 hover:scale-105 hover:shadow-2xl"
          data-aos="fade-up"
        >
          <div className="border-b-4 border-[#0000ff] w-16 mb-4"></div>
          <FaCheckCircle className="text-5xl text-[#0000ff] mb-4" />
          <h3 className="text-xl font-bold mb-2">Garantía asegurada</h3>
          <p className="text-gray-600 flex-grow">
            Nuestro compromiso es tu satisfacción, por eso ofrecemos una garantía asegurada en todos nuestros servicios.
          </p>
        </div>

        <div
          className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6 h-full transition duration-500 hover:scale-105 hover:shadow-2xl"
          data-aos="fade-up"
        >
          <div className="border-b-4 border-red-500 w-16 mb-4"></div>
          <FaUserShield className="text-5xl text-red-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Seguridad en todas tus compras</h3>
          <p className="text-gray-600 flex-grow">
            Tus datos y transacciones están completamente seguros con nosotros, garantizando una experiencia sin preocupaciones.
          </p>
        </div>

        <div
          className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6 h-full transition duration-500 hover:scale-105 hover:shadow-2xl"
          data-aos="fade-up"
        >
          <div className="border-b-4 border-yellow-500 w-16 mb-4"></div>
          <FaHeadset className="text-5xl text-yellow-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Soporte 24/7</h3>
          <p className="text-gray-600 flex-grow">
            Estamos disponibles las 24 horas, los 7 días de la semana, para ayudarte con cualquier duda o inconveniente que puedas tener.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
