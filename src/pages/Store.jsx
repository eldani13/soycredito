import React from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
// import producto1 from '../img/producto1.jpg'; 
// import producto2 from '../img/producto2.jpg'; 
// import producto3 from '../img/producto3.jpg'; 
// import tiendaBackground from '../img/tienda-background.jpg'; 

function Store() {
    return (
        <div>
            <Header />

            <div className="relative flex items-center justify-center p-8 bg-gray-100 h-screen" style={{
                // backgroundImage: `url(${tiendaBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                boxShadow: '1px 1px 10px black',
            }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 text-center text-white">
                    <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeIn">Bienvenido a Nuestra Tienda</h1>
                    <p className="text-lg mb-8 animate__animated animate__fadeIn">Explora nuestros productos exclusivos y encuentra lo que necesitas.</p>
                </div>
            </div>

            <div className="py-12 px-5 bg-gray-100">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                        {/* <img src={producto1} alt="Producto 1" className="w-full h-64 object-cover" /> */}
                        <div className="p-6">
                            <h2 className="text-xl font-bold">Nombre del Producto 1</h2>
                            <p className="text-gray-700 mt-2">Descripción breve del producto 1. Este producto es ideal para...</p>
                            <p className="text-blue-600 font-bold mt-4">$29.99</p>
                            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                                Agregar al Carrito
                            </button>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                        {/* <img src={producto2} alt="Producto 2" className="w-full h-64 object-cover" /> */}
                        <div className="p-6">
                            <h2 className="text-xl font-bold">Nombre del Producto 2</h2>
                            <p className="text-gray-700 mt-2">Descripción breve del producto 2. Este producto es perfecto para...</p>
                            <p className="text-blue-600 font-bold mt-4">$39.99</p>
                            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                                Agregar al Carrito
                            </button>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                        {/* <img src={producto3} alt="Producto 3" className="w-full h-64 object-cover" /> */}
                        <div className="p-6">
                            <h2 className="text-xl font-bold">Nombre del Producto 3</h2>
                            <p className="text-gray-700 mt-2">Descripción breve del producto 3. Este producto es esencial para...</p>
                            <p className="text-blue-600 font-bold mt-4">$49.99</p>
                            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                                Agregar al Carrito
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Store;
