import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

const Header = () => {
    return (
        <header>
            <Card>
                <CardContent className="p-2 justify-between flex flex-row ml-2">
                    <Link href="/">
                        <Image src="/logo-sem-fundo-marrom.png" alt="Deh do Marketing" height={100} width={70} />
                    </Link>
                </CardContent>
            </Card>
        </header>
    );
}

export default Header;