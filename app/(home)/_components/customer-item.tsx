import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

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
                    {/* <Separator /> */}
                    <div className="flex flex-row justify-between px-5 pt-5">
                        <p className="font-bold text-sm">Insigths</p>
                        <p className="text-xs italic">09/01/2024 a 09/02/2024</p>
                    </div>
                    <div className="flex flex-row px-8 py-5 ">
                        <div className="flex flex-col w-[265px] text-gray-600 text-sm">
                            <p>Contas alcançadas:</p>
                            <p>Contas com engajamento:</p>
                            <p>Total de seguidores:</p>
                            <p>Conteúdo que você compartilhou:</p>
                        </div>
                        <div className="flex flex-col text-sm">
                            <p>10</p>
                            <p>200</p>
                            <p>5400</p>
                            <p>20</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default CustomerItem;