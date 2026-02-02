import PainPontCard from "../PainPont/PainPontCard";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Banner({ img }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    // Datos de las tarjetas para fácil mantenimiento
    const painPoints = [
        {
            title: "Manual Lead Generation",
            description: "Wasting hours searching for leads.",
            icon: "https://res.cloudinary.com/dcyx3nqj5/image/upload/v1770056417/Captura_de_pantalla_2026-02-02_141746-removebg-preview_ntu4lz.png", // Reemplazar con tus assets locales
        },
        {
            title: "Unknown Owners",
            description: "No owner contact info.",
            icon: "https://res.cloudinary.com/dcyx3nqj5/image/upload/v1770056417/Captura_de_pantalla_2026-02-02_141806-removebg-preview_lpek7x.png",
        },
        {
            title: "Scattered Sales Tools",
            description: "Disjointed quotes & invoices.",
            icon: "https://res.cloudinary.com/dcyx3nqj5/image/upload/v1770056417/Captura_de_pantalla_2026-02-02_141914-removebg-preview_fozuko.png",
        },
    ];

    // Temporizador para móviles (10 segundos)
    useEffect(() => {
        if (painPoints.length === 0) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % painPoints.length);
        }, 10000);

        return () => clearInterval(timer);
    }, [painPoints.length]);

    return (
        <section className="animate-fade-in relative w-full h-[600px] md:h-screen overflow-hidden bg-gray-900">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
                style={{
                    backgroundImage: `url(${img || "https://res.cloudinary.com/dnbklbswg/image/upload/v1769557513/42b7e3e204ad93f3e39e7bd37b0bfb1f_qqp99z.png"})`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-black/60  to-transparent"></div>{" "}
            </div>

            <div className="relative z-10 container mx-auto -my-4 px-6 pt-40 pb-20">
                <div className="flex items-center justify-center gap-2 mb-8 px-4">
                    <div className="h-[3px] flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-blue-700/60"></div>
                    <h2 className="text-white text-2xl md:text-4xl font-bold tracking-[0.1em] uppercase text-center opacity-80">
                        Pain Points
                    </h2>
                    <div className="h-[3px] flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-blue-700/60"></div>
                </div>
                {/* Móvil: Carrusel Automático */}
                <div className="block md:hidden relative w-full max-w-[300px] mx-auto -my-7">
                    <div className="h-[350px] relative">
                        {" "}
                        
                        <AnimatePresence mode="wait">
                            <PainPontCard
                                key={currentIndex}
                                {...painPoints[currentIndex]}
                                isMobile={true}
                                onNext={() =>
                                    setCurrentIndex(
                                        (prev) =>
                                            (prev + 1) % painPoints.length,
                                    )
                                }
                                onPrev={() =>
                                    setCurrentIndex(
                                        (prev) =>
                                            (prev - 1 + painPoints.length) %
                                            painPoints.length,
                                    )
                                }
                            />
                        </AnimatePresence>
                    </div>

                    
                    <div className="flex justify-center gap-3 mt-12 pb-6">
                        {painPoints.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-2.5 rounded-full transition-all duration-500 shadow-lg ${
                                    idx === currentIndex
                                        ? "w-10 bg-[#33CCCC] opacity-100"
                                        : "w-2.5 bg-white/40 opacity-50"
                                }`}
                            />
                        ))}
                    </div>
                </div>
                {/* Desktop: Grid Estático Simétrico */}
                <div className="hidden md:grid md:grid-cols-3 gap-8 items-stretch max-w-[1200px] mx-auto">
                    {painPoints.map((point, index) => (
                        <PainPontCard key={index} {...point} isMobile={false} />
                    ))}
                </div>
            </div>
        </section>
    );
}
