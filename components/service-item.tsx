import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";

interface ServiceItemParameters {
    name: string,
    description: string,
    imagePath: string,
}

const ServiceItem = ({ name, description, imagePath }: ServiceItemParameters) => {
    return (
        <>
            <div className="py-5">
                <Card className="min-w-full max-w-full rounded-2xl">
                    <CardContent className="px-2 py-2">
                        <div className="relative w-full h-[300px]">
                            <Image
                                src={imagePath}
                                alt={name}
                                style={{
                                    objectFit: "cover"
                                }}
                                fill
                                className="rounded-2xl" />
                        </div>

                        <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">{name}</h2>
                        <div className="pl-2 pt-2 text-sm text-muted-foreground line-clamp-5">{description.split('\\n').map((line) => (
                            <p className="line-clamp-1">{line}</p>
                        ))}</div>
                    </CardContent>
                    <CardFooter className="flex justify-end p-5 pt-1">
                        <Button variant="outline">Ver mais</Button>
                    </CardFooter>
                </Card>
            </div>
        </>
    );
}

export default ServiceItem;