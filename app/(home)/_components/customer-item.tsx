import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import InstagramInsights from "./instagram-insigths";
import { Compare } from "@/components/ui/compare";
import { Customer } from "@/app/_entities/customer";

interface CustomerItemParameters {
    customer: Customer
}

const CustomerItem = ({ customer }: CustomerItemParameters) => {
    return (
        <Card className="mt-14 border-primary/50 shadow-none">
            <CardContent className="p-0">
                <div className="flex flex-col">
                    <div className="items-center flex flex-col pt-5">
                        <Image
                            className="
                                rounded-full border border-primary/50
                                absolute 
                                object-cover
                                mt-[-105px] h-[180px]"
                            src={customer.logoPath}
                            alt={customer.name} height={180} width={180} />
                    </div>
                    <div className="pt-24 px-5 pb-7 border-b border-primary/50">
                        <h3 className="font-bold text-gray-600">{customer.name}</h3>
                        <p className="text-sm text-gray-600">{customer.description}</p>
                    </div>
                    <div className="px-5 pt-5 border-b border-dashed border-primary/50">
                        <InstagramInsights
                            insights={customer.beforeInstagramInsights}
                            isBefore={true} />
                    </div>
                    <div className="px-5 pt-5 pb-2 border-b border-primary/50 ">
                        <InstagramInsights
                            insights={customer.afterInstagramInsights} />
                    </div>

                    <div className=" flex flex-col items-center justify-center pr-3 py-6">
                        <h3 className="font-bold pb-5 text-gray-500">Transformação do perfil</h3>
                        <div className="h-[600px] w-[300px]">
                            <Compare
                                firstImage={customer.beforeInstagramInsights.profileImagePath}
                                secondImage={customer.afterInstagramInsights.profileImagePath}
                                firstImageClassName="object-cover object-left-top"
                                secondImageClassname="object-cover object-left-top"
                                className="h-full w-full"
                                slideMode="hover"
                                autoplay={true}
                            />
                        </div>

                    </div>
                    <div className="flex flex-row justify-end p-2">
                        <p className="text-xs text-gray-400">Acompanhe:
                            <a 
                                className="text-primary/80 underline" 
                                href={`https://www.instagram.com/${customer.instagramIdentifier}`}
                                target="_blank">
                                    @{customer.instagramIdentifier}
                            </a>
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default CustomerItem;