'use client'

import { FlipWords } from "@/components/ui/flip-words";
import { motion } from "framer-motion";
import Image from "next/image";

const PresentationSession = () => {
    const words = ["propósito", "estratégia", "qualidade", "segurança"];

    return (
        <div className="flex flex-col justify-center items-center text-center">
            <div className="flex flex-col items-center justify-center">
                <motion.div
                    initial={{
                         width: "var(--width-from, 550px)", 
                         height: "var(--height-from, 550px)", 
                         y: 150
                    }}
                    animate={{ 
                        width: "var(--width-to)", 
                        height: "var(--height-to)", 
                        y: 0
                    }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="
                        border-x-4 border-white bg-primary 
                        rounded-full shadow-md
                        absolute mt-[200px]
                        max-sm:[--width-from:350px] max-sm:[--height-from:350px]
                        [--width-to:200px] [--height-to:200px]">

                    <Image 
                        src="/logo.png" 
                        alt="Logo Deh do Marketing" 
                        className="h-full w-full object-cover" 
                        width={800} height={800} />
                </motion.div>
            </div>

            <motion.h1
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1,
                    delay: 2,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
                className="font-[600] mt-[230px] text-3xl mb-4 tracking-tighter">
                Marketing com<br className="sm:hidden" />
                <b><FlipWords className="font-tanpearl text-primary w-[50]" words={words} /> </b>
            </motion.h1>

            <p className="max-w-xl mx-auto text-base text-neutral-600">
                Tudo o que sua marca precisa para conquistar <b>resultados de impacto</b>. Oferecemos soluções criativas, alinhadas a <b>estratégias precisas</b>, para levar sua comunicação a um <b>novo nível</b>.
            </p>
        </div>
    );
}

export default PresentationSession;