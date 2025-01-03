import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

const Header = () => {
    return (
        <header>
            <Card className="">
                <CardContent className="p-2 justify-center flex items-center flex-row">
                    <Link href="/">
                    <div className="bg-primary text-white text-xl font-bold h-20 w-20 flex items-center justify-center rounded-full mx-auto shadow-md">
                        <Image src="/logo.png" alt="Deh do Marketing" height={100} width={100} />
                    </div>
                    </Link>
                </CardContent>
            </Card>
        </header>
    );
}

export default Header;