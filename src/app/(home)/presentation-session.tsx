import { FlipWords } from "@/components/flip-words";
import Image from "next/image";

const PresentationSession = () => {
    const words = ["propósito", "estratégia", "qualidade", "segurança"];

    return (
        <div className="flex flex-col justify-center items-center text-center max-w-5xl mx-auto pt-14">
            <div className="bg-primary text-white text-xl font-bold h-40 w-40 flex items-center justify-center rounded-full shadow-md">
                <Image src="/logo.png" alt="Logo Deh do Marketing" height={200} width={200} />
            </div>

            <h1 className="mt-11 text-4xl mb-4 tracking-tighter">
                Marketing com
                <b><FlipWords className="text-primary" words={words} /> </b><br />
                de quem ama o que faz para quem ama o que faz
            </h1>

            <p className="max-w-2xl mx-auto text-xl font-medium text-balance text-neutral-600">
                Soluções de comunicação de forma criativa e aplicadas a estratégias assertivas
            </p>
        </div>
    );
}

export default PresentationSession;