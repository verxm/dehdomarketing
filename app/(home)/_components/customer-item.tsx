import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import InstagramInsights from "./instagram-insigths";
import { Compare } from "@/components/ui/compare";
import { Customer } from "@/app/_entities/customer";
import CustomerPersonalComment from "./customer-personal-comment";
import { BsBarChartLine, BsInstagram } from "react-icons/bs";

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
                    <div className="flex flex-col items-center pt-20">
                        <a
                            className="text-primary font-bold"
                            href={`https://www.instagram.com/${customer.instagramIdentifier}`}
                            target="_blank">
                            @{customer.instagramIdentifier}
                        </a>
                    </div>
                    <div className="
                        flex flex-col items-center justify-center 
                        py-7
                        md:flex-row-reverse md:gap-8 md:items-start md:justify-between
                        md:pt-7 md:px-3">
                        <div className="
                            md:flex md:flex-col
                            md:pt-12 lg:pl-4">
                            <div className="px-4 pb-5">
                                <CustomerPersonalComment comment={customer.description} />
                            </div>

                            <div className="
                                pt-8 mt-4 pb-4 
                                border-t border-b border-dashed border-primary/50
                                md:pt-4
                                md:border-none">
                                <div className="flex flex-row justify-center gap-1">
                                    <h3 className="font-bold pb-5 text-gray-500">Evolução das métricas</h3>
                                    <BsBarChartLine className="text-sm text-gray-500 mt-1" />
                                </div>
                                <InstagramInsights
                                    beforeInsights={customer.beforeInstagramInsights}
                                    afterInsights={customer.afterInstagramInsights} />
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="flex flex-row items-center gap-1">
                                <h3 className="
                                font-bold text-gray-500
                                pt-9 pb-5
                                md:pt-0">Transformação do perfil</h3>
                                <BsInstagram className="text-sm text-gray-500 mt-4" />
                            </div>

                            <div className="
                                h-[600px] w-[300px] 
                                md:w-[310px] md:h-[600px]
                                lg:w-[350px] lg:h-[680px]
                                mr-3">
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

                </div>
            </CardContent>
        </Card>
    );
}

export default CustomerItem;