'use client'

import { Button } from "@/components/ui/button";
import WhoWeAreImage from "./who-we-are-image";
import { Key } from "lucide-react";
import RequestBudget from "@/components/request-budget";
import { motion } from "framer-motion";

const WhoWeAreSession = () => {
    const description = "Oi, eu sou a Déh do Marketing! 🚀\n\nDesde 2019, venho ajudando empresas a se posicionarem no digital de forma estratégica e impactante. Minha agência de marketing não só cria estratégias, mas transforma negócios com soluções personalizadas que realmente fazem a diferença!\n\nSou formada em Marketing pela Uniritter e completamente apaixonada pelo que faço! Curiosa por natureza, estou sempre aprendendo e me atualizando para entregar o melhor aos meus clientes.\n\nHoje, já levamos nossos resultados para diversas cidades, como Porto Alegre, Viamão, Florianópolis, Balneário Camboriú e até Orlando, nos EUA! E agora, estamos prontos para levar a sua empresa para o próximo nível também.\n\nSe você quer ver seu negócio crescer no digital, está no lugar certo. Vamos juntas dar o próximo passo para virar a chave do seu negócio? 🚀💡";

    const budgetButton = <Button className="
        hover:text-white text-primary font-bold
        translate-x-0 
        hover:translate-x-0 hover:bg-primary/90
        border-primary/40
        rounded-xl mr-3" variant="outline" size="sm">
        <motion.div animate={{
             scale: [1, 1, 1.2, 1, 1],
        }}
            transition={{
                duration: 3,
                repeat: Infinity,
            }}>
            <Key /></motion.div> Virar a Chave
        
    </Button>;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}
            className="flex flex-col w-full">
            <div className="flex flex-col items-center pb-6">
                <h2 className="text-lg uppercase font-bold text-primary">🙋🏼‍♀️ Quem sou eu 🙋🏼‍♀️</h2>
                <p className="text-sm text-muted-foreground">Um pouco da minha história</p>
            </div>

            <div className="lg:grid lg:grid-cols-5">
                <div className="grid grid-cols-3 gap-3 lg:col-span-2">
                    <WhoWeAreImage imagePath="/quem-sou-3.JPG" />
                    <WhoWeAreImage imagePath="/quem-sou-2.JPEG" />
                    <WhoWeAreImage imagePath="/quem-sou-1.JPEG" />
                </div>

                <div className="
                    flex flex-col justify-between py-7
                    lg:pl-10 lg:pr-5 lg:col-span-3">
                    <h1 className="font-bold text-xl font-tanpearl text-primary/70">Débora de Borba</h1>
                    <p className="
                    whitespace-pre-line text-muted-foreground
                    pt-4">{description}
                    </p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
                        className="flex justify-center pt-7">
                        <RequestBudget triggerElement={budgetButton} />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

export default WhoWeAreSession;