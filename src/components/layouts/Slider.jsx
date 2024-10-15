import React from "react";
import img1 from '../../img/img1.png';

function Slider() {
    return (
        <div className="bg-gray-100 mt-36 p-6 sm:p-8 rounded-lg shadow-lg max-w-6xl mx-auto">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-center">
                
                <div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                        CREDITO AL <span className="text-yellow-500">INSTANTE</span>
                    </h1>
                    
                    <p className="text-gray-700 mb-4 text-sm sm:text-base">
                        <strong>SOY CREDITO AL INSTANTE</strong>, es una empresa que nace en el 2024 con el fin de abrirme a nuevos clientes, 
                        basándome en mi experiencia como agente estratégico con más de ocho años de experiencia en el mercado, 
                        y con presencia en diferentes zonas del país. Esto con el objetivo de acercar a nuestros aliados a más público.
                    </p>
                    
                    <p className="text-gray-700 text-sm sm:text-base">
                        Ofrecemos la oportunidad de ampliar su portafolio de clientes y llegar a lugares de difícil acceso. 
                        Contamos con personal calificado y colaboradores estratégicos que llevarán tu empresa a otro nivel, 
                        impulsando e incrementando sus ventas.
                    </p>
                </div>

                <div className="flex justify-center md:justify-end">
                    <img 
                        src={img1} 
                        alt="Saving money"
                        className="w-full sm:w-3/4 lg:w-2/3 rounded-lg shadow-xl"
                    />
                </div>
            </div>
        </div>
    );
}

export default Slider;
