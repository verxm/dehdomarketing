import { Service } from "@/app/_entities/service";
import RequestBudget from "@/components/request-budget";
import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import Image from "next/image";

interface ServiceDetailParameters {
    service: Service
}

const ServiceDetail = ({ service }: ServiceDetailParameters) => {
    const budgetButton = <Button className="font-bold uppercase">Solicitar orçamento</Button>;

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="outline" className="
                    hover:text-white text-primary 
                    translate-x-0 
                    hover:translate-x-0 hover:bg-primary/90">Ver mais</Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader className="pt-1">
                        <DrawerTitle className="uppercase text-gray-500 flex justify-center">{service.name}</DrawerTitle>
                    </DrawerHeader>
                    <div className="p-2 pb-0">
                        <div className="space-x-2">
                            <div className="relative w-full h-[250px] flex flex-col items-center justify-center">
                                <Image
                                    src={service.image}
                                    alt={service.name}
                                    style={{
                                        objectFit: "cover"
                                    }}
                                    fill
                                    className="rounded-2xl" />
                            </div>

                            <p className="max-h-[200px] overflow-auto mt-5 whitespace-pre-line text-sm flex flex-col justify-between">
                                {service.description}
                            </p>
                        </div>
                    </div>
                    <DrawerFooter>
                        <RequestBudget triggerElement={budgetButton} />
                        <DrawerClose asChild>
                            <Button className="uppercase" variant="outline">Voltar</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    );
}

export default ServiceDetail;