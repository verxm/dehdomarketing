import { customerRepository } from "@/app/_repositories/customer-local-repository";
import CustomerItem from "./customer-item"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const CustomersSession = () => {
    const allCustomers = customerRepository.getAll();

    return (
        <div className="">
            <Carousel className="w-full">
                <CarouselContent className="pt-2">
                    {allCustomers.map((customer) => (
                        <CarouselItem key={customer.id}>
                            <div className="p-[-10px]">
                                <CustomerItem customer={customer} />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="absolute top-16 left-10 flex items-center justify-center z-20">
                    <CarouselPrevious className="hover:text-white text-primary relative left-0 translate-x-0 hover:translate-x-0 hover:bg-primary/90" />
                </div>
                <div className="absolute top-16 right-10 flex items-center justify-center">
                    <CarouselNext className="hover:text-white text-primary relative right-0 translate-x-0 hover:translate-x-0 hover:bg-primary/90" />
                </div>
            </Carousel>
        </div>
    );
}

export default CustomersSession;