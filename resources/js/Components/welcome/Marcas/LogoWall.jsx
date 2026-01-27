// resources/js/Components/LogoWall.jsx
import React from 'react';

export default function LogoWall({ marcas = [], titulo = "Marcas con las que trabajé" }) {
    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4">
                {/* Título */}
                <h2 className="text-center text-2xl font-semibold text-slate-800 mb-12">
                    {titulo}
                </h2>

                {/* Contenedor de Logos */}
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5  md:gap-y-12 items-center justify-items-center opacity-70">
                    {marcas.map((marca) => (
                        <div 
                            key={marca.id} 
                            className="flex items-center justify-center w-full transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110"
                        >
                            <img
                                src={marca.imagen}
                                alt={marca.nombre}
                                title={marca.nombre}
                                // Subí un poco la altura para que luzcan mejor en 5 columnas
                                className="h-12 md:h-32 w-auto transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}