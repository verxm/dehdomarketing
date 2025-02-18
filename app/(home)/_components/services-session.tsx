'use client'

import { motion } from "framer-motion";
import ServiceItem from "./service-item";
import { servicesRepository } from "@/app/_repositories/services-local-repository";

const ServicesSession = () => {
    const services = servicesRepository.getAll();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}>
            <div className="px-5 mb-5 flex flex-col items-center">
                <h2 className="text-lg uppercase text-primary font-bold">Serviços oferecidos</h2>
                <p className="text-sm text-muted-foreground">Como podemos ajudar...</p>
            </div>

            <div className="
                flex gap-4
                px-5
                overflow-x-auto [&::-webkit-scrollbar]:hidden
                2xl:justify-center">
                {services.map((service) => (
                    <motion.div 
                        whileInView={{x: [100, 0], transition: {duration:0.5}}} 
                        viewport={{once: true}}
                        key={service.id} 
                        className="min-w-[350px] max-w-[350px]">
                        <ServiceItem service={service} />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export default ServicesSession;