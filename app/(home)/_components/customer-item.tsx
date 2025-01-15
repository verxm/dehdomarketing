import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import InstagramInsights from "./instagram-insigths";

const CustomerItem = () => {
    return (
        <Card className="mt-14 border-primary shadow-none">
            <CardContent className="p-0">
                <div className="flex flex-col">
                    <div className="items-center flex flex-col pt-5">
                        <Image
                            className="
                                rounded-full border border-primary
                                absolute 
                                mt-[-105px]
                                object-cover"
                            src="/derma-locacoes-logo.PNG"
                            alt="Logo Deh do Marketing" height={180} width={180} />
                    </div>
                    <div className="pt-24 px-5 pb-7 border-b border-primary">
                        <h3 className="font-bold">Derma Locações</h3>
                        <p className="text-sm text-gray-500">Locações de equipamentos estéticos</p>
                    </div>
                    <div className="px-5 pt-5 border-b border-dashed border-primary">
                        <InstagramInsights
                            insigthsDateRange="09/01/2024 a 09/02/2024"
                            accountsReached="10"
                            accountsWithEngagement="200"
                            totalFollowers="5"
                            sharedContents="20"
                            isBefore={true} />
                    </div>
                    <div className="px-5 pt-5 border-b border-primary">
                        <InstagramInsights
                            insigthsDateRange="04/11/2024 a 04/12/2024"
                            accountsReached="10"
                            accountsWithEngagement="200"
                            totalFollowers="5"
                            sharedContents="20" />
                    </div>
                    <p className="p-5"> Em breve...</p>
                </div>
            </CardContent>
        </Card>
    );
}

export default CustomerItem;