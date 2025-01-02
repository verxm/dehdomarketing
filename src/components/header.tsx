import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

const Header = () => {
    return (
        <header>
            <Card className="">
                <CardContent className="p-1 justify-center flex items-center flex-row">
                    <Link href="/">
                        {/* TODO: alterar cor de fundo ou a logo */}
                        <Image src="/logo.png" alt="Deh do Marketing" height={22} width={70} />
                    </Link>
                </CardContent>
            </Card>
        </header>
    );
}

export default Header;