import { customerRepository } from "@/app/_repositories/customer-local-repository";
import CustomerItem from "./customer-item"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const CustomersSession = () => {
    const allCustomers = customerRepository.getAll();

    return (
        <>
            <div className="px-5 mb-7 pt-5 flex flex-col items-center justify-center">
                <h2 className="text-lg uppercase text-gray-700 font-bold">🚀 Resultados 🚀</h2>
                <p className="text-sm text-muted-foreground">Acompanhe nossos clientes</p>
            </div>
            <Carousel className="w-full 2xl:max-w-[1500px]">
                <CarouselContent className="pt-2">
                    {allCustomers.map((customer) => (
                        <CarouselItem key={customer.id}>
                            <div className="p-[-10px]">
                                <CustomerItem customer={customer} />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="
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
                </div>
                <div className="
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
                </div>
            </Carousel>
        </>
    );
}

export default CustomersSession;