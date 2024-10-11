import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import logo from "../../img/logo3.png";

const menuItems = [
  { name: "Inicio", url: "/" },
  { name: "Contacto", url: "/Contact" },
  { name: "Aliado", url: "/Teams" },
  { name: "Tienda", url: "/Store" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { pathname } = useLocation(); 

  const isMobile = () => window.innerWidth < 768;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (url) => {
    navigate(url);
    if (isMobile()) {
      setIsMenuOpen(false); 
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  return (
    <header className="bg-white shadow-sm fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-14 h-14" />
          <h1 className="text-3xl font-bold text-black">SoyCredito</h1>
        </div>

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

        <div className="hidden md:flex items-center space-x-2">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              className="bg-gray-200 text-gray-700 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:bg-white focus:border focus:border-blue-400 transition duration-300 ease-in-out"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              <FaSearch />
            </button>
          </form>
        </div>

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
