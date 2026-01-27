export default function CTAContact() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      
      {/* Fondo con formas orgánicas cian para suavizar el diseño */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#33CCCC] rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#33CCCC] rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Bloque Principal Estilo Glass */}
        <div className="max-w-5xl mx-auto bg-[#33CCCC] rounded-[3rem] p-12 md:p-20 shadow-2xl shadow-[#33CCCC]/30 relative overflow-hidden group">
          
          {/* Brillo dinámico al pasar el mouse */}
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          <div className="flex flex-col items-center text-center space-y-8">
            
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              ¿Buscas un asesor experto?
            </h2>

            <p className="text-white/90 text-xl md:text-2xl font-light max-w-2xl">
              ¡Solo mándame un mensaje! Estamos listos para digitalizar tus procesos contables.
            </p>

            {/* Botón Minimalista Blanco */}
            <div className="pt-4">
              <button className="px-12 py-5 bg-white text-[#33CCCC] font-bold text-xl rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Contáctame
              </button>
            </div>
          </div>

          {/* Decoración sutil de fondo */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        </div>

        {/* Info de contacto secundaria (Limpia debajo del bloque) */}
        <div className="mt-16 flex flex-wrap justify-center gap-12">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-[#33CCCC]/10 flex items-center justify-center text-[#33CCCC] group-hover:bg-[#33CCCC] group-hover:text-white transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Llámanos</p>
              <p className="text-lg font-semibold text-gray-800">+591 XXX XXXXX</p>
            </div>
          </div>

          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-[#33CCCC]/10 flex items-center justify-center text-[#33CCCC] group-hover:bg-[#33CCCC] group-hover:text-white transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Email</p>
              <p className="text-lg font-semibold text-gray-800">info@consultoria.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}