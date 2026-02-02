// resources/js/Components/ServiceCard.jsx
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";

export default function OffersCard({ titulo, descripcion, imagen, link }) {
    return (
        <div
            className="relative group overflow-hidden h-[410px] w-full 
                        rounded-[1rem] border border-black/10 shadow-2xl"
        >
            
            <div className="absolute inset-0 bg-white backdrop-blur-md group-hover:bg-blue-50/40 transition-all duration-500 px-8 pt-10 pb-12 flex flex-col items-center justify-start text-center">
                {" "}
                <div className="relative z-10 flex flex-col items-center">
                    
                    <h3 className="text-blue-950 text-2xl font-bold mb-4 tracking-tight leading-tight">
                        {titulo}
                    </h3>

                    
                    <div className="w-12 h-[2px] bg-[#337acc] mb-6 transition-all duration-500 group-hover:w-24 group-hover:shadow-[0_0_15px_#33CCCC]" />

                    
                    <p className="text-[#0b1041] text-left text-[20px] font-bold opacity-90 max-w-[280px]">
                        {descripcion}
                    </p>

                </div>
                <div className="h-48 w-56 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                    <img
                        src={imagen}
                        alt={titulo}
                        className="h-full w-auto object-contain filter drop-shadow-[0_20px_15px_rgba(0,0,0,0.3)]"
                    />
                </div>
            </div>
        </div>
    );
}
