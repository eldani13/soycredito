// Sites.jsx
import React from "react";

const Sites = () => {
  return (
    <div className="bg-gray-100 p-5">
      <h2 className="text-2xl text-center font-bold mb-4">Puntos de Venta Destacados</h2>
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1DjkHRKpZsO6hbYkwe83gp4NiufVQlnw" // ID del mapa de Google My Maps
          width="100%"
          height="400"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Sites;
