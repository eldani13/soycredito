import React, { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import contacto from '../img/contacto.jpg';
import contacto1 from '../img/Contacto1.png';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensaje enviado con éxito!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <Header />

      <div className="relative flex items-center justify-center p-8 bg-gray-100 h-screen" style={{
        backgroundImage: `url(${contacto})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        boxShadow: '1px 1px 10px black',
      }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeIn">Contáctanos</h1>
          <p className="text-lg mb-8 animate__animated animate__fadeIn">¿Tienes alguna pregunta o necesitas asistencia? ¡Nos encantaría saber de ti!</p>
        </div>
      </div>

      <div className="py-12 px-5 bg-gray-100">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-10">
          
          <div className="bg-white shadow-lg rounded-lg p-6 flex-1 transform transition-transform duration-300 hover:scale-105">
            <h2 className="text-2xl font-bold text-center mb-6">Información de Contacto</h2>
            <div className="flex flex-col gap-6">
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-blue-600 text-3xl" />
                <span className="text-gray-700 text-lg">+57 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-red-500 text-3xl" />
                <span className="text-gray-700 text-lg">info@soycredito.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaWhatsapp className="text-green-500 text-3xl" />
                <span className="text-gray-700 text-lg">+57 987 654 3210 (WhatsApp)</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-red-400 text-3xl" />
                <span className="text-gray-700 text-lg">Calle 123, Bogotá, Colombia</span>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 flex-1 transform transition-transform duration-300 hover:scale-105">
            <h2 className="text-2xl font-bold text-center mb-6">Envíanos un Mensaje</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Tu Nombre"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 shadow-md"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Tu Correo Electrónico"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 shadow-md"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tu Mensaje"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-40 transition duration-300 shadow-md"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out shadow-lg"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center p-8 bg-gray-100 h-96" style={{ 
        backgroundImage: `url(${contacto1})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'top', 
        backgroundRepeat: 'no-repeat', 
        boxShadow: '1px 1px 10px black' 
      }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex justify-center items-center h-full">
          <h3 className="text-white text-3xl font-bold">Estamos aquí para ayudarte</h3>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
