export default function Reviews() {
  const testimonials = [
    {
      name: "Bryan Cooper",
      role: "Nose, un man por ahi",
      content: "la verdad es un buen curso jajaja",
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "Stella Silver",
      role: "Responsable de Marketing ",
      content: "ta bueno",
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-6">
        
        {/* Título de la sección */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sus palabras te dicen más sobre mí
          </h2>
          <div className="w-20 h-1.5 bg-[#33CCCC] mx-auto rounded-full"></div>
        </div>

        {/* Cuadrícula de testimonios */}
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {testimonials.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 items-start group">
              
              {/* Foto Circular */}
              <div className="relative flex-shrink-0">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-xl"
                />
              </div>

              {/* Contenido */}
              <div className="space-y-4">
                <p className="text-gray-600 text-lg leading-relaxed italic">
                  "{item.content}"
                </p>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{item.name}</h4>
                  <p className="text-[#33CCCC] font-medium uppercase text-sm">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}