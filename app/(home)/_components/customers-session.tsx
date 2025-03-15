import { customerRepository } from "@/app/_repositories/customer-local-repository";
import CustomerItem from "./customer-item"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion } from "framer-motion";

const CustomersSession = () => {
    const allCustomers = customerRepository.getAll();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}>
            <div className="px-5 mb-7 pt-5 flex flex-col items-center justify-center">
                <h2 className="text-lg uppercase text-primary font-bold">🚀 Resultados 🚀</h2>
                <p className="text-sm text-muted-foreground">Acompanhe nossos clientes</p>
            </div>
            <Carousel className="w-full 2xl:max-w-[1500px]">
                <CarouselContent className="pt-2">
                    {allCustomers.map((customer) => (
                        <CarouselItem key={customer.id}>
                            <motion.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1, transition: { duration: 1 } }}
                                className="px-5">
                                <CustomerItem customer={customer} />
                            </motion.div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <motion.div 
                    animate={{
                        x: [0, 5, 0]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                    }}
                    className="
                        flex items-center justify-center 
                        absolute top-16 left-10  z-20
                        md:left-48
                        lg:left-72
                        xl:left-96">
                    <CarouselPrevious className="
                        hover:text-white text-primary 
                        relative left-0 translate-x-0 
                        hover:translate-x-0 hover:bg-primary/90
                        border-primary" />
                </motion.div>
                <motion.div 
                    animate={{
                        x: [5, 0, 5]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                    }}
                    className="
                        flex items-center justify-center 
                        absolute top-16 right-10
                        md:right-48
                        lg:right-72
                        xl:right-96">
                    <CarouselNext className="
                        hover:text-white text-primary 
                        relative right-0 translate-x-0 
                        hover:translate-x-0 hover:bg-primary/90
                        border-primary" />
                </motion.div>
            </Carousel>
        </motion.div>
    );
}

export default CustomersSession;