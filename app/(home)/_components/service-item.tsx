import { Card, CardContent, CardFooter } from "../../../components/ui/card";
import Image from "next/image";
import ServiceDetail from "./service-detail";
import { Service } from "@/app/_entities/service";

interface ServiceItemParameters {
    service: Service
}

const ServiceItem = ({ service }: ServiceItemParameters) => {
    return (
        <Card className="min-w-full max-w-full rounded-2xl">
            <CardContent className="px-2 py-2">
                <div className="relative w-full h-[300px]">
                    <Image
                        src={service.image}
                        alt={service.name}
                        style={{
                            objectFit: "cover"
                        }}
                        fill
                        className="rounded-2xl" />
                </div>

                <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap uppercase">{service.name}</h2>
                <p className="pl-2 pt-2 text-sm text-muted-foreground min-h-[90px] max-h-[90px] whitespace-pre-line line-clamp-4">
                    {service.description}
                </p>
            </CardContent>
            <CardFooter className="flex justify-end p-5 pt-1">
                <ServiceDetail service={service}/>
            </CardFooter>
        </Card>
    );
}

export default ServiceItem;