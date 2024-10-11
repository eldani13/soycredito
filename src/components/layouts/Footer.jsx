import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col">
          <h2 className="text-xl font-bold mb-4">Información de Crédito</h2>
          <p className="text-gray-400">
            Ofrecemos opciones de crédito flexibles para ayudarte a financiar tus
            necesidades. Con tasas competitivas y términos adaptables, estamos aquí
            para ayudarte a alcanzar tus metas.
          </p>
        </div>

        <div className="flex flex-col">
          <h2 className="text-xl font-bold mb-4">Enlaces útiles</h2>
          <ul>
            <li>
              <a href="/contact" className="text-gray-400 hover:text-white transition duration-300">
                Contacto
              </a>
            </li>
            <li>
              <a href="/terms" className="text-gray-400 hover:text-white transition duration-300">
                Términos y Condiciones
              </a>
            </li>
            <li>
              <a href="/privacy" className="text-gray-400 hover:text-white transition duration-300">
                Política de Privacidad
              </a>
            </li>
            <li>
              <a href="/faqs" className="text-gray-400 hover:text-white transition duration-300">
                Preguntas Frecuentes
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h2 className="text-xl font-bold mb-4">Síguenos</h2>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 p-3 rounded-full hover:bg-blue-500 transition duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 p-3 rounded-full hover:bg-pink-400 transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-400 p-3 rounded-full hover:bg-blue-300 transition duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 p-3 rounded-full hover:bg-blue-600 transition duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="text-xl font-bold mb-4">Créditos</h2>
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} SoyCredito. Todos los derechos reservados.
          </p>
          <p className="text-gray-400 mt-2">
            Desarrollado con ♥ por el equipo de SoyCredito.
          </p>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        <p>
          Este sitio utiliza cookies para mejorar la experiencia del usuario. Al continuar
          navegando, aceptas su uso.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
