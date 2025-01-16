import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import InstagramInsights from "./instagram-insigths";
import { Compare } from "@/components/ui/compare";

const CustomerItem = () => {
    return (
        <Card className="mt-14 border-primary/50 shadow-none">
            <CardContent className="p-0">
                <div className="flex flex-col">
                    <div className="items-center flex flex-col pt-5">
                        <Image
                            className="
                                rounded-full border border-primary/50
                                absolute 
                                mt-[-105px]
                                object-cover"
                            src="/derma-locacoes-logo.PNG"
                            alt="Logo Deh do Marketing" height={180} width={180} />
                    </div>
                    <div className="pt-24 px-5 pb-7 border-b border-primary/50">
                        <h3 className="font-bold text-gray-600">Orlando Bora Lá</h3>
                        <p className="text-sm text-gray-600">Agência de viagens para Disney</p>
                    </div>
                    <div className="px-5 pt-5 border-b border-dashed border-primary/50">
                        <InstagramInsights
                            insigthsDateRange="09/01/2024 a 09/02/2024"
                            accountsReached="10"
                            accountsWithEngagement="200"
                            totalFollowers="5"
                            sharedContents="20"
                            isBefore={true} />
                    </div>
                    <div className="px-5 pt-5 pb-2 border-b border-primary/50 ">
                        <InstagramInsights
                            insigthsDateRange="04/11/2024 a 04/12/2024"
                            accountsReached="10"
                            accountsWithEngagement="200"
                            totalFollowers="5"
                            sharedContents="20" />
                    </div>

                    <div className=" flex flex-col items-center justify-center pr-3 py-6">
                        <h3 className="font-bold pb-5 text-gray-500">Transformação do perfil</h3>
                        <div className="h-[600px] w-[300px]">
                            <Compare
                                firstImage="/orlandoborala-insta-antes.png"
                                secondImage="/orlandoborala-insta-depois.png"
                                firstImageClassName="object-cover object-left-top"
                                secondImageClassname="object-cover object-left-top"
                                className="h-full w-full"
                                slideMode="hover"
                                autoplay={true}
                            />
                        </div>
                        
                    </div>
                    <div className="flex flex-row justify-end p-2">
                        <p className="text-xs text-gray-400">Acompanhe: <a className="text-primary/80 underline" href="https://www.instagram.com/orlandoborala" target="_blank">@orlandoborala</a></p>
                        </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default CustomerItem;