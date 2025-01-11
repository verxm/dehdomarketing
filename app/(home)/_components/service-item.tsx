import LineBreakText from "../../../components/line-break-text";
import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../../components/ui/card";
import Image from "next/image";

interface ServiceItemParameters {
    name: string,
    description: string,
    imagePath: string,
}

const ServiceItem = ({ name, description, imagePath }: ServiceItemParameters) => {
    return (
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
                <p className="pl-2 pt-2 text-sm text-muted-foreground min-h-[90px] max-h-[90px] whitespace-pre-line line-clamp-4">
                    {description}
                </p>
            </CardContent>
            <CardFooter className="flex justify-end p-5 pt-1">
                <Button variant="outline">Ver mais</Button>
            </CardFooter>
        </Card>
    );
}

export default ServiceItem;