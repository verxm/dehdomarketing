import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

const Header = () => {
    return (
        <header className="mt-[-1px] mr-[-1px] ml-[-1px] sticky top-0 z-20">
            <Card className="rounded-t-none border-t-0 border-r-0 border-l-1 border-b-1 border-primary border-solid shadow-md">
                <CardContent className="p-2 justify-between flex flex-row ml-2 items-center">
                    <Link href="/">
                        <Image src="/logo-sem-fundo-marrom.png" alt="Deh do Marketing" height={100} width={70} />
                    </Link>

                    <Button className="font-bold rounded-full mr-3 text-primary" variant="outline" size="sm">
                        Começar
                    </Button>
                </CardContent>
            </Card>
        </header>
    );
}

export default Header;