import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import InstagramInsights from "./instagram-insigths";

const CustomerItem = () => {
    return (
        <Card className="mt-14 border-gray-400">
            <CardContent className="p-0">
                <div className="flex flex-col">
                    <div className="items-center flex flex-col pt-5">
                        <Image
                            className="
                                rounded-full border border-gray-400
                                absolute 
                                mt-[-105px]
                                object-cover"
                            src="/derma-locacoes-logo.PNG"
                            alt="Logo Deh do Marketing" height={180} width={180} />
                    </div>
                    <div className="pt-24 px-5 pb-7 border-b border-gray-400">
                        <h3 className="font-bold">Derma Locações</h3>
                        <p className="text-sm text-gray-500">Locações de equipamentos estéticos</p>
                    </div>
                    <div className="px-5 pt-5">
                        <InstagramInsights />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default CustomerItem;