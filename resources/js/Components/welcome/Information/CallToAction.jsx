// resources/js/Components/welcome/CTA/CallToAction.jsx
import { motion } from "framer-motion";

export default function CallToAction() {
    return (
        <section className="bg-white flex flex-col items-center justify-center">
            <div className="container mx-auto px-6 text-center flex-col items-center max-w-4xl">
                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative w-full max-w-3xl bg-gradient-to-r from-[#1d3474] to-[#3f80f1] 
                               text-white rounded-xl shadow-[0_10px_30px_rgba(43,89,211,0.3)] 
                               mb-6 transition-all py-5 px-4 md:px-10
                            
                               flex flex-col md:flex-row items-center text-center justify-center gap-2 md:gap-4"
                >
                 
                    <span className="text-xl md:text-2xl font-bold tracking-tight">
                        Get My Free Account
                    </span>

                   
                    <span className="flex items-center justify-center">
                       
                        <span className="h-[2px] w-12 bg-white/60 rounded-full md:hidden my-1"></span>

                        
                        <span className="hidden md:inline text-2xl opacity-80">
                            —
                        </span>
                    </span>

                  
                    <span className="text-base md:text-2xl font-light italic opacity-90">
                        No Credit Card Required
                    </span>
                </motion.button>
                <p className="text-lg md:text-2xl font-bold tracking-tight text-[#0b1041] mt-2 mb-4">
                    Start extracting leads from Google Maps today.
                </p>
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent max-w-md mx-auto mb-8 opacity-50" />{" "}
                <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    
                    className="flex flex-row md:flex-row items-center w-full mb-5 justify-center gap-3 text-[#2b59d3]"
                >
              
                    <div className="flex-shrink-0 w-10 h-10 bg-[#2b59d3] rounded-full flex items-center justify-center pl-1 shadow-md transition-transform duration-300">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>

                    
                    <div className="text-center md:text-left text-lg">
                        <span className="text-base md:text-lg font-bold italic whitespace-nowrap">
                            Watch 60s Demo
                        </span>

                        <span className="flex flex-col md:inline items-center justify-center">
                            <span className="h-[1.5px] w-8 bg-gray-300 my-2 md:hidden"></span>

                        
                            <span className="hidden md:inline text-gray-400 mx-2">
                                —
                            </span>
                        </span>

                        <span className="font-normal text-gray-400 block md:inline italic whitespace-nowrap">
                            See It In Action
                        </span>
                    </div>
                </motion.a>
            </div>
        </section>
    );
}
