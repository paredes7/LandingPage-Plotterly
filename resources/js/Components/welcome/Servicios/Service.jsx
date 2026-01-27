// resources/js/Pages/Servicios/Index.jsx
import React from 'react';
import { Head } from '@inertiajs/react';
import ServiceCard from '@/Components/welcome/Servicios/ServiceCard';
import { SERVICIOS_MOCK } from '@/Components/welcome/Servicios/serviciosData';

export default function Service({ ofertas = [] }) {
    // Si 'ofertas' viene vacío desde el controlador, usamos el MOCK
    const dataToRender = ofertas.length > 0 ? ofertas : SERVICIOS_MOCK;

    return (
        <section className="bg-white">
            <Head title="Nuestros Servicios" />
            
            <div className="max-w-[1400px] mx-auto py-16 px-4">
                <header className="text-center mb-16">
                    <h2 className="text-4xl font-normal text-gray-900 tracking-tight">
                        Cosas que hago por ti
                    </h2>
                </header>

                <div className="flex flex-wrap gap-2 md:flex-nowrap justify-center items-center shadow-2xl rounded-sm overflow-hidden">
                    {dataToRender.map((servicio) => (
                        <ServiceCard 
                            key={servicio.id}
                            {...servicio} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}