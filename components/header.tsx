import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import RequestBudget from "./request-budget";
import { Forward, HandCoins, Landmark, Send } from "lucide-react";

const Header = () => {
    const budgetButton = <Button className="
        hover:text-white text-primary 
        translate-x-0 
        hover:translate-x-0 hover:bg-primary/90
        border-primary/40 shadow-md shadow-tertiary
        rounded-full mr-3" variant="outline" size="sm">
        Solicitar Orçamento <HandCoins />
    </Button>;

    return (
        <header className="mt-[-1px] mr-[-1px] ml-[-1px] sticky top-0 z-50">
            <Card className="rounded-t-none border-t-0 border-r-0 border-l-1 border-b-1 border-primary border-solid shadow-md">
                <CardContent className="p-2 justify-between flex flex-row ml-2 items-center">
                    <Link href="/">
                        <Image
                            src="/logo-sem-fundo-marrom.png" 
                            alt="Deh do Marketing" 
                            height={100} width={70} />
                    </Link>
``
                    <RequestBudget triggerElement={budgetButton} />

                </CardContent>
            </Card>
        </header>
    );
}

export default Header;