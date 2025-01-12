import { Service } from "@/app/_entities/service";
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
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="outline">Ver mais</Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader className="pt-1">
                        <DrawerTitle className="uppercase">{service.name}</DrawerTitle>
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
                        <Button className="font-bold uppercase">Solicitar orçamento</Button>
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