import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function Credit() {
  return (
    <section className="bg-gradient-to-r from-blue-100 via-white to-blue-50 py-10 mt-10">
      <div className="container mx-auto px-6">
        {/* Título */}
        <h2 className="text-4xl text-left sm:text-5xl font-extrabold text-gray-900 mb-8 uppercase tracking-wide">
          Objetivos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Texto a la izquierda */}
          <div>
            <p className="text-gray-700 text-lg leading-relaxed">
              En nuestra estrategia de <span className="font-semibold">crecimiento y desarrollo</span>, establecimos objetivos claros y alcanzables que guían nuestras acciones y decisiones, los cuales permiten mostrar nuestro potencial.
            </p>
          </div>

          {/* Lista de objetivos a la derecha */}
          <div className="space-y-10">
            {/* Objetivo 1 */}
            <div className="relative flex items-start space-x-6">
              <div className="absolute left-2 top-0 bottom-0 w-1 bg-gray-200"></div>
              <div className="relative z-10 bg-white border-4 border-blue-600 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center font-bold shadow-lg">
                01
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Establecer una presencia sólida en el mercado
              </p>
            </div>

            {/* Objetivo 2 */}
            <div className="relative flex items-start space-x-6">
              <div className="absolute left-2 top-0 bottom-0 w-1 bg-gray-200"></div>
              <div className="relative z-10 bg-white border-4 border-blue-600 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center font-bold shadow-lg">
                02
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Aumentar la cantidad de clientes en un 15% en los próximos 6 meses.
              </p>
            </div>

            {/* Objetivo 3 */}
            <div className="relative flex items-start space-x-6">
              <div className="absolute left-2 top-0 bottom-0 w-1 bg-gray-200"></div>
              <div className="relative z-10 bg-white border-4 border-blue-600 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center font-bold shadow-lg">
                03
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Realizar campañas publicitarias de forma frecuente
              </p>
            </div>

            {/* Objetivo 4 */}
            <div className="relative flex items-start space-x-6">
              <div className="absolute left-2 top-0 bottom-0 w-1 bg-gray-200"></div>
              <div className="relative z-10 bg-white border-4 border-blue-600 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center font-bold shadow-lg">
                04
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Incrementar la satisfacción del cliente
              </p>
            </div>
          </div>
        </div>

        {/* WhatsApp Button */}
        <div className="flex justify-center mt-12">
          <a
            href="https://wa.me/your-phone-number"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-gradient-to-r from-green-400 to-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <FaWhatsapp className="w-6 h-6" />
            <span>Solicita tu crédito</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Credit;
