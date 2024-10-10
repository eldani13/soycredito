import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function Credit() {
  return (
    <section className="bg-gray-100 py-10 mt-10">
      <div className="container mx-auto px-6">
        <h2 className="text-center pb-10 text-3xl transform transition duration-500">
          ¿Como solicitar tu credito?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 bg-[#0000ff] rounded-full w-16 h-16 flex items-center justify-center text-white text-xl font-bold">
              1
            </div>
            <p className="text-gray-700 text-lg">
              Define el monto y el plazo en el Formulario del préstamo online y
              haz clic en ¡Pide tu crédito!
            </p>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 bg-[#0000ff] rounded-full w-16 h-16 flex items-center justify-center text-white text-xl font-bold">
              2
            </div>
            <p className="text-gray-700 text-lg">
              Si no te has registrado, crea tu cuenta con la información
              solicitada, de lo contrario inicia sesión con tu usuario y
              contraseña.
            </p>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 bg-[#0000ff] rounded-full w-16 h-16 flex items-center justify-center text-white text-xl font-bold">
              3
            </div>
            <p className="text-gray-700 text-lg">
              Evaluaremos tu solicitud y tu capacidad de pago a partir de la
              información suministrada por ti. ¡La respuesta es inmediata!
            </p>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 bg-[#0000ff] rounded-full w-16 h-16 flex items-center justify-center text-white text-xl font-bold">
              4
            </div>
            <p className="text-gray-700 text-lg">
              Realiza la firma electrónica de tu contrato tras aceptar los
              términos y condiciones de tu préstamo.
            </p>
          </div>
        </div>

        <p className="text-center text-gray-700 text-lg mb-8">
          Si tu solicitud es aprobada, <strong>recibes el dinero</strong> en tu
          cuenta bancaria.
        </p>

        <div className="flex justify-center space-x-4">
          <div className="p-4 flex justify-center items-center">
            <a
              href="https://wa.me/your-phone-number"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 transition duration-300 ease-in-out"
            >
              <FaWhatsapp className="w-6 h-6" />
              <span>Solicita tu crédito</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Credit;
