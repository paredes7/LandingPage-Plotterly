import { motion } from "framer-motion";

export default function PainPointCard({ title, description, icon, isMobile }) {
  const mobileVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  return (
    <motion.div
      variants={isMobile ? mobileVariants : {}}
      initial={isMobile ? "initial" : { opacity: 0, y: 20 }}
      animate={isMobile ? "animate" : { opacity: 1, y: 0 }}
      exit={isMobile ? "exit" : {}}
      whileHover={!isMobile ? { scale: 1.05, translateY: -10 } : {}}
      transition={{ duration: 0.4, ease: "easeOut" }}
      // CLAVE: Se agregó 'group' para que los efectos de hover en hijos funcionen
      className="group max-w-[370px] flex flex-col items-center p-10 bg-gradient-to-br from-blue-950/50 to-blue-900/90 backdrop-blur-xl border border-white/10 rounded-[1rem] shadow-2xl min-h-[300px] cursor-pointer"
    >
      {/* AJUSTE DE TAMAÑO: Se aumentó de h-24/w-24 a h-32/w-32 */}
      <div className="h-36 w-38  flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
        <img 
          src={icon} 
          alt={title} 
          className="max-h-full max-w-full object-contain filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)]" 
        />
      </div>

      <h3 className="text-white font-bold text-2xl text-center mb-3 leading-tight group-hover:text-[#33CCCC] transition-colors duration-300">
        {title}
      </h3>
      
      {/* LA LÍNEA: Ahora sí se expandirá gracias a la clase 'group' arriba */}
      <div className="w-12 h-[2.5px] bg-[#33CCCC] mb-6 transition-all duration-500 ease-in-out group-hover:w-28 group-hover:shadow-[0_0_15px_#33CCCC]"></div>

      <p className="text-white/70 text-center text-lg italic font-light leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}