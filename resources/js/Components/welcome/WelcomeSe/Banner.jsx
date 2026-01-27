export default function Banner({img}) {
  return (
    <section className="animate-fade-in relative w-full h-[600px] md:h-screen overflow-hidden bg-gray-900">
      
      {/* Contenedor de Imagen Estática (Fixed Background) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ 
          backgroundImage: `url(${img || "https://res.cloudinary.com/dnbklbswg/image/upload/v1769557513/42b7e3e204ad93f3e39e7bd37b0bfb1f_qqp99z.png"})` 
        }}
      >
        {/* Overlay para legibilidad del texto */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Contenido Principal */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
        <div className="max-w-4xl">
          
          <h1 className="text-white font-bold leading-tight mb-6">
            <span className="block text-4xl md:text-6xl lg:text-7xl tracking-tight">
              Consultoría contable
            </span>
            <span className="block text-4xl md:text-6xl lg:text-7xl mt-2">
              y tributaria.
            </span>
          </h1>

          <p className="text-white/90 text-lg md:text-2xl font-light leading-relaxed mb-10 max-w-2xl">
            Ahora, con procesos digitales. Más eficiente que nunca.
          </p>

          {/* Botones de Acción */}
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 bg-[#33CCCC] hover:bg-[#2bbaba] text-white rounded-full font-semibold transition-all transform hover:scale-105">
              Contáctame
            </button>
            <button className="w-12 h-12 flex items-center justify-center bg-[#33CCCC]/20 border border-[#33CCCC] text-white rounded-full hover:bg-[#33CCCC] transition-all">
               <span className="text-xl">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}