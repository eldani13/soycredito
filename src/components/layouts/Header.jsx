import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../img/logo3.png";

const menuItems = [
  { name: "Inicio", url: "/" },
  { name: "Contacto", url: "/Contact" },
  { name: "Aliado", url: "/Teams" },
  { name: "Tienda", url: "/Store" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation(); // Para saber en qué ruta estás actualmente

  const isMobile = () => window.innerWidth < 768;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (url) => {
    navigate(url);
    if (isMobile()) {
      setIsMenuOpen(false); // Cierra el menú si estás en móvil
    }
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo y título */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-14 h-14" />
          <h1 className="text-3xl font-bold text-black">SoyCredito</h1>
        </div>

        {/* Menú para pantallas medianas y grandes */}
        <nav className="hidden md:flex space-x-6 items-center">
          <ul className="flex gap-5">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.url}
                  onClick={() => handleNavigation(item.url)}
                  className={`block text-lg font-semibold ${
                    pathname === item.url ? "text-black font-bold" : "text-gray-700"
                  } hover:text-gray-900 transition-colors duration-300`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botón de búsqueda */}
        <div className="hidden md:block">
          <button
            type="button"
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M16.4 10.45a6 6 0 11-12.8 0 6 6 0 0112.8 0z"
              />
            </svg>
          </button>
        </div>

        {/* Botón para abrir/cerrar menú en dispositivos móviles */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú desplegable en móviles */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-2 pb-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.url}
              onClick={() => handleNavigation(item.url)}
              className={`block text-lg font-semibold ${
                pathname === item.url ? "text-black font-bold" : "text-gray-700"
              } hover:text-gray-900 transition-colors duration-300`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
