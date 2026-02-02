// resources/js/Components/welcome/CTA/CallToAction.jsx
import { motion } from "framer-motion";

export default function CallToAction() {
    return (
        <section className="bg-white py-4 flex flex-col items-center justify-center">
            <div className="container mx-auto px-6 text-center max-w-4xl">
                
                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative w-full max-w-2xl bg-gradient-to-r from-[#1d3474] to-[#3f80f1] 
                               text-white text-xl md:text-2xl font-semibold py-5 px-8 rounded-xl
                               shadow-[0_10px_30px_rgba(43,89,211,0.3)] mb-6 transition-all"
                >
                    Get My Free Account —{" "}
                    <span className="font-light italic">
                        No Credit Card Required
                    </span>
                </motion.button>
              
                <p className="text-[#0b1041] text-lg md:text-xl font-medium italic opacity-80 mb-10">
                    Start extracting leads from Google Maps today.
                </p>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent max-w-md mx-auto mb-10 opacity-50" />{" "}
              
                <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-center gap-3 text-[#2b59d3] font-bold text-lg"
                >
                    <div className="w-8 h-8 bg-[#2b59d3] rounded-full flex items-center justify-center pl-1">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                    <span className="font-bold">
                        Watch 60s Demo{" "}
                        <span className="font-normal text-gray-400">
                            — See It In Action
                        </span>
                    </span>
                </motion.a>
            </div>
        </section>
    );
}
