'use client'

import { FlipWords } from "@/components/ui/flip-words";
import { motion } from "framer-motion";
import Image from "next/image";

const PresentationSession = () => {
    const words = ["propósito", "estratégia", "qualidade", "segurança"];

    return (
        <div className="flex flex-col justify-center items-center text-center mx-auto">
            <div className="flex flex-col items-center justify-center">
                <div className="
                    w-[400px] h-[400px]
                    absolute mt-[200px]
                    flex flex-col items-center justify-center">
                    <motion.div
                        initial={{ width: "100%", height: "100%", y: 150 }}
                        animate={{ width: "50%", height: "50%", y: 0 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="
                            border-x-4 border-white bg-primary 
                            rounded-full shadow-md
                            ">
                        <Image src="/logo.png" alt="Logo Deh do Marketing" className="h-full w-full object-cover" width={400} height={400} />
                    </motion.div>
                </div>
            </div>

            <h1 className="font-[600] mt-[230px] text-3xl mb-4 tracking-tighter">
                Marketing com<br className="sm:hidden" />
                {/* TODO: fazer com que o tamanho das palafras não altere o tamanho da frase */}
                <b><FlipWords className="font-tanpearl text-primary w-[50]" words={words} /> </b>
            </h1>

            <p className="max-w-xl mx-auto text-base text-neutral-600">
                Tudo o que sua marca precisa para conquistar <b>resultados de impacto</b>. Oferecemos soluções criativas, alinhadas a <b>estratégias precisas</b>, para levar sua comunicação a um <b>novo nível</b>.
            </p>
        </div>
    );
}

export default PresentationSession;