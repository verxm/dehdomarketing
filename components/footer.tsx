'use client'

import { useState } from "react";

const Footer = () => {
    const [isHide, setIsHide] = useState(true);
    setTimeout(() => setIsHide(false), 7000);

    return (
        <>
            {!isHide && (
                <footer className="
                    border-t border-primary/50
                    mt-10
                    flex flex-row justify-between
                    w-full bg-gray-300 py-8 px-5
                    text-muted-foreground text-xs font-bold opacity-75">
                    <div>
                        <p>7x Labs ®</p>
                        <p className="  text-xxs">Software Architecture & Engineering</p>
                    </div>
                    <div className="flex flex-col justify-end items-end">
                        <p>© 2025 Copyright</p>
                        <p className="text-xxs">Todos os direitos reservados</p>
                    </div>
                </footer>
            )}
        </>
    );
}

export default Footer;