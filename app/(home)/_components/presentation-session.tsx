'use client'

import { TextAnimate } from "@/components/magicui/text-animate";
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
                        y: 110
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
                        [--width-to:180px] [--height-to:180px]">

                    <Image
                        src="/logo.PNG"
                        alt="Logo Deh do Marketing"
                        className="h-full w-full object-cover"
                        width={800} height={800} />
                </motion.div>
            </div>

            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [-60, 0], scale: [0.8, 1] }}
                transition={{
                    duration: 0.7,
                    delay: 1.7,
                }}
                className="font-[600] mt-[230px] text-3xl mb-4 tracking-tighter">
                Marketing com<br className="sm:hidden" />
                <b><FlipWords className="font-tanpearl text-primary w-[50]" words={words} /> </b>
            </motion.h1>

            <motion.div
                initial={{display: "none"}}
                animate={{display: "flex"}}
                transition={{
                    delay: 2.2,
                }}>
                <TextAnimate
                    className="max-w-xl mx-auto text-base text-neutral-600 font-sans"
                    animation="blurInDown" by="word" once={true}>
                    Tudo o que sua marca precisa para conquistar resultados de impacto. Oferecemos soluções criativas, alinhadas a estratégias precisas, para levar sua comunicação a um novo nível.
                </TextAnimate>
            </motion.div>

        </div>
    );
}

export default PresentationSession;