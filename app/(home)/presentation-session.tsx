import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";
import { tanPearl } from "../layout";

const PresentationSession = () => {
    const words = ["propósito", "estratégia", "qualidade", "segurança"];

    return (
        <div className="flex flex-col justify-center items-center text-center max-w-5xl mx-auto pt-14 px-7">
            <div className="bg-primary text-white text-xl font-bold h-40 w-40 flex items-center justify-center rounded-full shadow-md">
                <Image src="/logo.png" alt="Logo Deh do Marketing" height={200} width={200} />
            </div>

            <h1 className="font-[600] mt-11 text-3xl mb-4 tracking-tighter">
                Marketing com<br className="sm:hidden"/>
                {/* TODO: fazer com que o tamanho das palafras não altere o tamanho da frase */}
                <b><FlipWords className="font-tanpearl text-primary w-[50]" words={words} /> </b>
            </h1>

            <p className="max-w-xl mx-auto text-xl">
                Soluções de comunicação de forma criativa e aplicadas a estratégias assertivas de quem ama o que faz para quem ama o que faz
            </p>
        </div>
    );
}

export default PresentationSession;