import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import InstagramInsights from "./instagram-insigths";
import { Compare } from "@/components/ui/compare";
import { Customer } from "@/app/_entities/customer";
import CustomerPersonalComment from "./customer-personal-comment";

interface CustomerItemParameters {
    customer: Customer
}

const CustomerItem = ({ customer }: CustomerItemParameters) => {
    return (
        <Card className="mt-20 border-primary/50 shadow-none">
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
                    <div className="
                        flex flex-col items-center gap-4
                        pt-20 px-5 pb-7 
                        border-b border-primary/50">
                        <a
                            className="text-primary font-bold"
                            href={`https://www.instagram.com/${customer.instagramIdentifier}`}
                            target="_blank">
                            @{customer.instagramIdentifier}
                        </a>
                        <CustomerPersonalComment comment={customer.description} />
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
                </div>
            </CardContent>
        </Card>
    );
}

export default CustomerItem;