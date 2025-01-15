import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const CustomerItem = () => {
    return (
        <Card className="mt-14">
            <CardContent className="p-0">
                <div className="flex flex-col">
                    <div className="items-center flex flex-col pt-5">
                        <Image
                            className="rounded-full absolute mt-[-105px]"
                            src="/derma-locacoes-logo.PNG"
                            alt="Logo Deh do Marketing" height={180} width={180}
                            style={{
                                objectFit: "cover"
                            }} />
                    </div>
                    <div className="h-full pt-20 h-46">
                        Test
                        <br />
                        test
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default CustomerItem;