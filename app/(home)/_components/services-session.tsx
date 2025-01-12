import ServiceItem from "./service-item";
import { servicesRepository } from "@/app/_repositories/services-local-repository";

const ServicesSession = () => {
    const services = servicesRepository.getAll();

    return (
        <>
            <div className="px-5 mb-3 flex flex-col items-center">
                <h2 className="text-lg uppercase text-gray-700 font-bold">Serviços oferecidos</h2>
                <p className="text-sm text-muted-foreground">Como podemos ajudar...</p>
            </div>

            <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
                {services.map((service) => (
                    <div key={service.id} className="min-w-[350px] max-w-[350px]">
                        <ServiceItem service={service} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default ServicesSession;