import React from "react";
import { FaWhatsapp } from "react-icons/fa"; 

function Whatsapp() {
  return (
    <div className="bg-[#0000ff] p-4 flex justify-center items-center">
      <a
        href="https://wa.me/your-phone-number" 
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 transition duration-300 ease-in-out"
      >
        <FaWhatsapp className="w-6 h-6" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}

export default Whatsapp;
