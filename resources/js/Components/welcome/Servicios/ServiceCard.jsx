// resources/js/Components/ServiceCard.jsx
import { Link } from '@inertiajs/react';

export default function ServiceCard({ titulo, descripcion, imagen, link }) {
    return (
        <div className="relative group overflow-hidden h-[500px] w-full border-r border-gray-800 last:border-r-0">
            {/* Background Image con efecto zoom al hacer hover */}
            <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${imagen})` }}
            />
            
            {/* Overlay con gradiente para mayor legibilidad */}
            <div className="absolute inset-0 bg-slate-900/85 group-hover:bg-slate-900/75 transition-colors duration-300 px-10 py-16 flex flex-col">
                
                <div className="relative z-10">
                    <h3 className="text-white text-3xl font-light mb-4 tracking-tight">
                        {titulo}
                    </h3>
                    
                    {/* Divider Line */}
                    <div className="w-full h-[1px] bg-cyan-400/60 mb-8" />
                    
                    <p className="text-gray-300 text-lg leading-relaxed font-light italic opacity-90">
                        {descripcion}
                    </p>
                </div>

                {/* Botón posicionado al final */}
                <div className="mt-auto relative z-10">
                    <Link
                        href={link}
                        className="inline-block bg-[#26C6DA] hover:bg-[#00ACC1] text-white px-10 py-3 rounded-full text-sm font-semibold tracking-wide transition-all shadow-lg hover:shadow-cyan-500/20"
                    >
                        Saber más
                    </Link>
                </div>
            </div>
        </div>
    );
}