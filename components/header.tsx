'use client'

import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import RequestBudget from "./request-budget";
import { HandCoins } from "lucide-react";
import { motion } from "framer-motion";

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
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: [0, 0.5, 1], y: [-60, 0]}}
                transition={{delay: 5.5, duration: 0.8, ease: "easeInOut"}}>
                <Card className="
                    rounded-t-none border-t-0 border-r-0 border-l-1 border-b-1 border-primary border-solid shadow-md">
                    <CardContent className="p-2 justify-between flex flex-row ml-2 items-center">
                        <Link href="/">
                            <Image
                                src="/logo-nova-sem-fundo.png"
                                alt="Deh do Marketing"
                                height={50} width={68} />
                        </Link>
                        <RequestBudget triggerElement={budgetButton} />

                    </CardContent>
                </Card>
            </motion.div>
        </header>
    );
}

export default Header;