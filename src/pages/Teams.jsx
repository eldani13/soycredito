import React from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
// import alianza from '../img/alianza.jpg'; 
// import alianza2 from '../img/alianza2.jpg';

function Teams() {
  return (
    <div>
      <Header />

      <div className="relative flex items-center justify-center p-8 bg-gray-100 h-screen" style={{
        // backgroundImage: `url(${alianza})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        boxShadow: '1px 1px 10px black',
      }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeIn">¡Sé un Aliado!</h1>
          <p className="text-lg mb-8 animate__animated animate__fadeIn">Únete a nosotros y forma parte de nuestra misión. Descubre cómo puedes colaborar.</p>
        </div>
      </div>

      <div className="py-12 px-5 bg-gray-100">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-10">
          
          <div className="bg-white shadow-lg rounded-lg p-6 flex-1 transform transition-transform duration-300 hover:scale-105">
            <h2 className="text-2xl font-bold text-center mb-6">¿Cómo ser un Aliado?</h2>
            <ul className="list-disc list-inside space-y-4">
              <li className="text-gray-700 text-lg">🔹 Participa en nuestras campañas y eventos.</li>
              <li className="text-gray-700 text-lg">🔹 Comparte nuestra misión en tus redes sociales.</li>
              <li className="text-gray-700 text-lg">🔹 Ofrece tu tiempo como voluntario.</li>
              <li className="text-gray-700 text-lg">🔹 Contribuye con donaciones o recursos.</li>
              <li className="text-gray-700 text-lg">🔹 Contacta con nosotros para oportunidades de colaboración.</li>
            </ul>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 flex-1 transform transition-transform duration-300 hover:scale-105">
            <h2 className="text-2xl font-bold text-center mb-6">Testimonios</h2>
            <p className="text-gray-700 text-lg mb-4">"Ser un aliado me ha permitido hacer una diferencia en la comunidad y conocer personas maravillosas." - Aliado 1</p>
            <p className="text-gray-700 text-lg mb-4">"La colaboración con esta organización ha sido enriquecedora y gratificante." - Aliado 2</p>
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center p-8 bg-gray-100 h-96" style={{ 
        // backgroundImage: `url(${alianza2})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'top', 
        backgroundRepeat: 'no-repeat', 
        boxShadow: '1px 1px 10px black' 
      }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex justify-center items-center h-full">
          <h3 className="text-white text-3xl font-bold">¡Juntos podemos lograr más!</h3>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Teams;
